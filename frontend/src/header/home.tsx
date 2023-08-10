import React from "react";
import './home.css'

const Home = () => {
    const hanldeLogOut = () => {
        localStorage.removeItem('user')
        window.location.href = 'login'
    }
    
        // const getUser1 =localStorage.getItem('name');
        // const getUser1 = JSON.parse(localStorage.getItem('nam') || "[]")
       
        // console.log(getUser1);

        
   
    return (
        <>
            <div className="container-header">
                <h1> Chào Mừng Bạn Đã Đến Với Hội Các Con Báo </h1>
                 Hello 
            </div>
            <div>
    </div>
            <div onClick={hanldeLogOut}>
                LogOut
            </div>
        </>

    )
}
export default Home;