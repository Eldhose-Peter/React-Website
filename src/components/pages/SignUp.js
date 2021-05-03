import React from 'react'
import { Button } from '../Button'
import useForm from '../useForm'
import validateInfo from '../validateInfo'
import './SignUp.css'
//import '../../App.css'

const SignUp=({submitForm})=> {
     
    const{handleChange,values,handleSubmit,errors}=useForm(submitForm,validateInfo)

    return (
        <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='/images/img-7.jpg' alt='spaceship' />
        </div>  


       <div className='form-content-right'>
           <form className='form' onSubmit={handleSubmit}>
               <h1>Get started with us today! Create 
                   your own account by filling out the 
                   information below. 
               </h1>
               <div className='form-inputs' >
                    <label className='form-label' htmlFor= 'username'>
                    Username
                    </label>
                    <input
                        id='username' 
                        type ='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}/>
                        {errors.username && <p>{errors.username}</p> }
               </div>
               <div className='form-inputs'>
                    <label className='form-label' htmlFor= 'email'>
                    Email
                    </label>
                    <input 
                        id='email'
                        type ='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}/>
                        {errors.email && <p>{errors.email}</p> }
               </div>
               <div className='form-inputs'>
                    <label className='form-label' htmlFor= 'password'>
                    Password
                    </label>
                    <input 
                        id='password'
                        type ='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}/>
                        {errors.password && <p>{errors.password}</p> }
               </div>
               <div className='form-inputs'>
                    <label className='form-label' htmlFor= 'password2'>
                    Confirm Pasword
                    </label>
                    <input 
                        id='password2'
                        type ='password'
                        name='password2'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password2}
                        onChange={handleChange}/>
                        {errors.password2 && <p>{errors.password2}</p> }
               </div>

               <button className='form-input-btn'type='submit' >Sign Up</button>

               <span className='form-input-login'>Already have an account? 
               Login <a href='#'>here</a></span>
           </form>

       </div>
       </div>
    )
}

export default SignUp