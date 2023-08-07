import { Button, Form, Input } from "antd";
import './index.css'
import { useState } from "react";


const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem(user.email) || '[]');
        const existingUser = users.find((e: { email: string; }) => e.email === user.email);
        if (existingUser) {
            alert("tài khoản đã tồn tại")
        } else {
            users.push(user);
            localStorage.setItem(user.email, JSON.stringify(users));
            alert("đăng ký thành công")
            window.location.href = "login"

        };
    }




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    return (
        <>
            <div className="container-register" >

                <h1 style={{ textAlign: 'center', paddingBottom: 50, paddingTop: 100 }}>REGISTER</h1>
                <div style={{ marginLeft: 100 }}>
                    <Form
                        onSubmitCapture={handleSubmit}
                        name="basic"
                        initialValues={{ remember: true }}
                        autoComplete="off">
                        <p>Email</p>
                        <Form.Item
                            rules={[{ required: true, message: 'Email không được trống' }]}>
                            <Input
                                type="email" name="email" value={user.email} onChange={handleChange}
                                style={{ width: 400, height: 48 }} placeholder='Email' className="color-blur inpt" />
                        </Form.Item>
                        <p>PassWord</p>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Mật khẩu không được trống' }]}>
                            <Input.Password
                                name="password" value={user.password} onChange={handleChange}
                                style={{ width: 400, height: 48 }} placeholder='Mật khẩu' className="color-blur inpt" />
                        </Form.Item>

                        <Button
                            style={{ marginTop: 20, textAlign: "center" }} type="primary" htmlType="submit" className="btn-login" >
                            Đăng ký
                        </Button>
                    </Form>
                </div>
            </div >
        </>
    )
}
export default Register;