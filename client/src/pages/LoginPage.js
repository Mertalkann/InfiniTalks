import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import logo2 from "../img/logo.png";
// kullanıcı girişi için fonsiyon tanımlanması
export default function LoginPage() {
    // State hook kullanılarak bileşenin içinde kullanılacak state'ler tanımlanmış.
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false); //Yönlendirme durumu state'i
    const {setUserInfo} = useContext(UserContext); //Kullanıcı bağlamından ilgili fonksiyon alınmış.

     //  kullanıcının giriş yapma işlemlerini gerçekleştirilmesi
    async  function login(ev){
        ev.preventDefault();
        // Sunucuya kullanıcı adı ve şifre bilgilerini içeren bir POST isteği gönderiliyor.
        const response = await fetch('http://localhost:4000/login',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers:{'Content-Type': 'application/json'},
            credentials:'include', // tarayıcı ile sunucu arasında oturum bilgileri paylaşımı                       
        })
        if(response.ok){ // Sunucu yanıtı başarılı ise kullanıcı bilgileri alınıyor ve yönlendirme yapılıyor.
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        }else{// Sunucu yanıtı başarısız ise hata mesajı gösteriliyor.
            alert('Hatalı Kullanıcı adı veya şifre, Tekrar Deneyiniz... ');
        }
    }
    //Eğer yönlendirme durumu true ise, Navigate bileşeni ile anasayfaya yönlendirme yapılıyor.
    if(redirect){
        return <Navigate to={'/'} />
    }
    return ( 
       
        <form className="login" onSubmit={login}>
             <img src={logo2} width="300"/>
            <input  type="text" 
                    placeholder="Kullanıcı Adı"
                    value={username} 
                    onChange = {ev => setUsername(ev.target.value)}/>{/* input elementinin şu anki değerini (ev.target.value) alır username state'ine atar*/}
            <input  type="password" 
                    placeholder="Şifre" 
                    value={password} 
                    onChange = {ev => setPassword(ev.target.value)}/>
            <button>Giriş Yap</button>
        </form>
        
        
    );
}