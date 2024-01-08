const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({dest:'uploads/'});
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'asf4sd68fs6d5f4sdsdg4sd6g4sd89gsdgdssdg4';//JWT (JSON Web Token) oluşturulurken kullanılacak gizli anahtar

app.use(cors({credentials:true,origin:'http://localhost:3000'}));//sadece http://localhost:3000 origin'inden gelen isteklere izin verilmiştir.
app.use(express.json());// JSON verilerine erişimi sağlar
app.use(cookieParser());// çerezlere erişimi sağlar.
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://mertalkan:un4Wa1czwjWPzsDZ@cluster0.i42ri1q.mongodb.net/?retryWrites=true&w=majority');// 
//kayıt olma işlemi
app.post('/register', async (req, res) => {
    const {username,password} = req.body; //gelen isteğin gövdesinden kullnıcı adı ve şifre alınır
    try{
        // yeni Kullanıcı oluşturma işlemi
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password,salt),//Şifre, bcrypt.hashSync ile güvenli bir şekilde hashlenir.
        }); 
        res.json(userDoc);//Başarı durumunda oluşturulan kullanıcı belgesini JSON olarak yanıtla
    }catch(e){
        console.log(e);
        res.status(400).json(e)//hata durumu yanıtla
    }
});
//giriş yapma işlemi
app.post('/login', async (req, res) => {
    const {username,password} = req.body;
    // Kullanıcı adına göre veritabanında kullanıcı arama
    const userDoc = await User.findOne({username});
    // Kullanıcının şifresini kontrol etme
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if(passOk){
        //// Şifre doğruysa, JWT ile bir token oluşturup kullanıcıya gönderme
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
            if(err) throw err;
            //Token'i cookie olarak kullanıcıya gönderme
            res.cookie('token',token).json({
                id:userDoc._id,
                username,
            });
        });
    }else{
        res.status(400).json('wrong credentials');//// Şifre yanlışsa, 400 (Bad Request) verir
    }
});
//kullanıcının bilgilerini JSON olarak yanıtlar
app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});
//kullanıcı çıkışı fonksiyonu
app.post('/logout', (req, res) => {
    res.cookie('token','').json('ok');
});

// İsteğin içindeki dosyayı alır, dosya bilgilerini işler, kullanıcı kimlik doğrulamasını gerçekleştirir ve ardından bu bilgileri kullanarak yeni post oluşturur
app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const{originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext =parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
    
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const {title,summary,content} = req.body;
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover:newPath,
            author:info.id,
        });
        res.json(postDoc);
    });
});

//İsteğin içinde dosya varsa dosya bilgilerini işler, kullanıcının kimlik doğrulama bilgilerini kontrol eder,  yazarıyla karşılaştırır, eğer yazar ise  postu günceller
app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');
      }
      await postDoc.updateOne({
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
      });
  
      res.json(postDoc);
    });
});


app.get('/post', async(req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username'])
            .sort({createdAt: -1})
            .limit(20)
    );
})


app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
})

app.listen(4000);
 