import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './SignupValidation'

const SignUp = () => {

    const [values, setValues] = useState({
        name: "",
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
        if(errors.name ==="" && errors.email ==="" && errors.password ===""){
                    axios.post("http://localhost:8081/signup", values)
                    .then(res =>{
                        console.log(res);
                        navigate('/');
                    })
                    .catch(err => console.log(err));
        }
    }
  return (
    <div>
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Create an account</h2>
        <form action="" onSubmit={handleSubmit}>
        <div  className='mb-3'>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter Name' name="name" onChange={handleInput} className='form-control rounded-0' />
                {errors.name && <span className='text-danger'>{errors.name}</span>}

            </div>
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
            <button type='submit' className='btn btn-success w-100'>Signup</button>
            <p>You are agree to our terms and policies</p>
            <Link to="/" className='btn btn-default border w-100 bg-light'>Login</Link>

        </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp
