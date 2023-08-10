import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';



const Register = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password:''
  })
const handleChange = (e) => {
  setValues({...values, [e.target.email]:[e.target.value]})
}
const handleSubmit = (e) => {
  axios.post('http://localhost:3200/signup',values.email && values.password)
  .then(res => {
    console.log("sucess",res);
    navigate('/login')
  })
  .catch(err => {
    console.log(err);
    
  })
}
    
  return (
    <>
<div className="container-login">
<h1 style={{ textAlign: 'center', paddingBottom: 50, paddingTop: 100 }}>Register</h1>
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
            value={values.email}
                name="email"  onChange={handleChange}
                type='email' placeholder='Email' className="color-blur inpt" />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Mật khẩu không được trống' }]}
        >
            <Input.Password
            value={values.password}
                name="password"  onChange={handleChange}
                style={{ width: 400, height: 48 }} placeholder='Mật khẩu' className="color-blur inpt" />
        </Form.Item>
        <Button style={{ marginTop: 20 }} type="primary" htmlType="submit" className="btn-login" >
            Đăng ký
        </Button>
     
    </Form>
</div>

</div>

    </>

  );
};

export default Register;