import React from 'react';
import { Button,Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'
import { User } from "../interface";


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        const users: User[] = JSON.parse(localStorage.getItem('nam@gmail.com') || '[]');
        // const user = JSON.parse(localStorage.getItem('user') || "[]")
        const foundUser = users.find((e: { email: string; password: string; }) => e.email === user.email && e.password === user.password);
       
        if (foundUser) {
            alert("đăng nhập thành công")
            localStorage.setItem('user', user.email );
            window.location.href = "home"
        } else {
            alert("đăng nhập thất bại")
        }


        const users1: User[] = JSON.parse(localStorage.getItem('kien@gmail.com') || '[]');
        const foundUser1 = users1.find((e: { email: string; password: string; }) => e.email === user.email && e.password === user.password);

        if (foundUser1) {
            alert("đăng nhập thành công")
            localStorage.setItem('user', user.email );
            window.location.href = "home"
        } else {
            alert("đăng nhập thất bại")
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };
    return (
        <div className="container-login">
            <h1 style={{ textAlign: 'center', paddingBottom: 50, paddingTop: 100 }}>LOGIN</h1>
            <div style={{ marginLeft: 100 }}>
                <Form
                    onSubmitCapture={handleSubmit}
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        style={{ alignItems: "center" }}
                        name="email"
                        rules={[{ required: true, message: 'Email không được trống' }]}
                    >
                        <Input style={{ width: 400, height: 48 }}
                            name="email" value={user.email} onChange={handleChange}
                            type='email' placeholder='Email' className="color-blur inpt" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Mật khẩu không được trống' }]}
                    >
                        <Input.Password
                            name="password" value={user.password} onChange={handleChange}
                            style={{ width: 400, height: 48 }} placeholder='Mật khẩu' className="color-blur inpt" />
                    </Form.Item>
                    <Button style={{ marginTop: 20 }} type="primary" htmlType="submit" className="btn-login" >
                        Đăng nhập
                    </Button>
                    <Button style={{ marginLeft: 20 }}>
                        <Link to={'/account/forgot-password'} style={{ color: '#616496' }}>Lấy lại mật khẩu</Link>
                    </Button>
                </Form>
                <div style={{ marginTop: 20 }} className="register">
                    <span>Bạn chưa có tài khoản? </span>
                    <Link to={'/register'} style={{ color: '#616496' }} replace>Đăng ký</Link>
                </div>
            </div>

        </div>
    )
}
export default Login;