import React, { useEffect, useState } from "react";
import { Button } from 'antd';
import './home.css'
import { User } from "../interface";
import { log } from "console";

const Home = () => {

    const hanldeLogOut = () => {
        // localStorage.removeItem('user')
        window.location.href = 'login'

    }

    let getUser = (localStorage.getItem("kien"));
    console.log("user", getUser)
    return (
        <>
            <div className="container-header">
                <h1> Chào Mừng Bạn Đã Đến Với Hội Các Con Báo </h1>
                <h1> 123{getUser}</h1>

            </div>
            <div onClick={hanldeLogOut}>
                LogOut
            </div>
        </>

    )
}
export default Home;