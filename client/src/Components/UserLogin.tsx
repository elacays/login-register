import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

interface IUser{
	eMail:string,
	userPass:string
}
function UserLogin() {
	const {register,handleSubmit,watch,formState:{errors}} =useForm<IUser>()
	const onSubmit = handleSubmit((data) => 
	{
		axios
	.post(`http://localhost:3000/login`,data)
		.then(res=>{
		if(res.status==200){
			console.log("success.")
		}
	}).catch(error =>{
		console.log("something went wrong.")
	})
	});



	
  return (
    <div className="container">
	<div className="screen">
		<div className="screen_content">
        <h1 className='form_name'>LOGIN</h1>
			<form className="login" onSubmit={onSubmit}>
				<div className="login_field">
					<input type="text" className="login_input" placeholder="Email" {...register("eMail")} />
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password" {...register("userPass")}/>
				</div>
				<button className="button login_submit">
					<span className="button_text">Log In Now</span>
				</button>	
                <div className="login_field">
				</div>		
				<Link to="/register" style={{ textDecoration: 'none', color: 'white' }}><p className='router_p'>Create Account</p></Link>
			</form>
		</div>	
	</div>
</div>
  )
}

export default UserLogin
