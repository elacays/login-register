import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

type User = {
	id?:number,
	eMail?:string,
	userName?:string,
	userPass?:string,
	confirmPass?:string

}

function UserRegister() {

	const {register,handleSubmit,watch,formState:{errors}} =useForm<User>()
	const onSubmit = handleSubmit((data) => console.log(data));

	axios
	.post(`http://localhost:3000/register`,register)
		.then(res=>{
		if(res.status==200){
			console.log("success.")
		}
	}).catch(error =>{
		console.log("something went wrong.")
	})

  return (
    <div className="container">
	<div className="screen">
		<div className="screen_content">
        <h1 className='form_name'>Register</h1>
			<form className="login" onSubmit={onSubmit}>
				<div className="login_field">
					<input type="text" className="login_input" placeholder="Email" 
					{...register("eMail",{required:"Bu alanın doldurulması gerek.",minLength:{value:8,message:"En az 8 karakter olmalı"},maxLength:64,
					pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}  />
				</div>
				<div className="login_field">
					<input type="text" className="login_input" placeholder={errors.userName?.message ? 'This Field Required':'User Name'} style={{ borderBottom: errors.userName?.message ? '2px solid red' : ''}}
					{...register("userName",{required:"Bu alanın doldurulması gerek.",minLength:{value:3,message:"En az 3 karakter olmalı"},maxLength:64})}  />

				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password" 
					{...register("userPass",{required:"Bu alanın doldurulması gerek.",minLength:6,maxLength:64})} />
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Confrim Password" 
					{...register("confirmPass",{required:"Bu alanın doldurulması gerek.",minLength:6,maxLength:64,
					validate: (val) => {
						if (watch('userPass') != val) {
						  return "Your passwords do no match";
						}
					  },
					})} />
				</div>
				<button className="button login_submit">
					<span className="button_text">Register</span>
				</button>				
				<Link to="/" style={{ textDecoration: 'none', color: 'white' }}><p className='router_p'>Login</p></Link>
			</form>
		</div>	
	</div>
</div>
  )
}

export default UserRegister