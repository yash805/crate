import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';

const Login = () => {
    const [values, setValues] = useState({
        email:"",
        password:""
    })
    
    const navigate = useNavigate();
    const [errors,setErrors] = useState({})
    const handleInput =(e)=>{
        setValues(prev =>({...prev, [e.target.name]: [e.target.value]}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validation(values));
        if(errors.email ==="" && errors.password ===""){
            axios.post("http://localhost:8081/login", values)
            .then(res =>{
               if(res.data === "Success"){
                navigate('/home');
               }else{
                alert("no record");
               }
               
            })
            .catch(err => console.log(err));
}
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
            <div  className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' name="email" onChange={handleInput} className='form-control rounded-0' />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div  className='mb-3'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Email' name="password" onChange={handleInput} className='form-control rounded-0' />
                {errors.password && <span className='text-danger'>{errors.password}</span>}

            </div>
            <button type="submit" className='btn btn-success w-100'>Login</button>
            <p>You are agree to our terms and policies</p>
            <Link to="/signup" className='btn btn-default border w-100 bg-light'>SignUp</Link>

        </form>
      </div>
    </div>
  )
}

export default Login
