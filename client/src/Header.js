import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import logo1 from "./img/logo2.png";


export default function Header() {
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
               setUserInfo(userInfo);
            })
        });
    }, []);

    function logout(){
        fetch('http://localhost:4000/logout',{
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return(
        <header>
            <Link to=""className='logo'>                    
            <img src={logo1}  width="130"/>
            </Link>
            
            <nav>
                {username && (
                <>
                  <span>Merhaba,  {username}</span>
                  <Link to="/create">
                    Paylaş
                  </Link>
                  <a onClick={logout}>Çıkış</a>
                </>
                )}
                {!username && (
                <>
                  <Link to="/login">Giriş Yap</Link>
                  <Link to="/register">Kayıt Ol</Link>
                </>
                )} 
            </nav>
        </header>
    );
}