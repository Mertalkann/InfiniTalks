
import { useEffect, useState } from "react";
import Post from "../post";

export default function IndexPage() {
    const[posts,setPosts] = useState([]);
    //ilk render edildiğinde çalışacak olan asenkron işlemler
    useEffect(() => {
       fetch('http://localhost:4000/post').then(response => {//API'den post verilerini çekmek
        response.json().then(posts => {
            setPosts(posts);
        });
       });
    }, []);
    //Eğer post verileri mevcutsa, bu veriler haritalanarak Post bileşeni ile ekrana yazdırılor
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    );
}