import { useState } from "react";
import logo2 from "../img/logo.png";

export default function RegisterPage() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    //Kullanıcının kayıt olma işlemi
    async function register(ev) {
        ev.preventDefault(); //submit işlemi esnasında  sayfanın yeniden yüklenmesini engeller

        //Sunucuya kayıt olma isteğinin gönderimesi
        const response = await fetch('http://localhost:4000/register',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-Type': 'application/json'},
        });
        // Sunucudan gelen yanıtın kontrolü
        if (response.status === 200){
            alert('Kayıt İşlemi Başarılı');
        }else{
            alert('Kayıt Hatalı, Tekrar Deneyiniz...');
        }

    }
    //Kayıt formunun render edilmesi
    return (
        <form className="register" onSubmit={register} >
            
            <img src={logo2} width="300"/>
            
            <input  type="text"  
                    placeholder="Kullanıcı Adı" 
                    value={username} 
                    onChange={ev => setUsername(ev.target.value)}/>
            
            <input  type="password"   
                    placeholder="Şifre"
                    value={password} 
                    onChange={ev => setPassword(ev.target.value)}/>
            <button>Kayıt Ol</button>
        </form>
    );
}