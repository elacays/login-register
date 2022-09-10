import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'


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

	useEffect(() => {

	  },[]);




  return (
    <div className="container">
	<div className="screen">
		<div className="screen_content">
        <h1 className='form_name'>Register</h1>
			<form className="login" onSubmit={onSubmit}>
				<div className="login_field">
					<input type="text" className="login_input" placeholder="Email" {...register("eMail")}  required/>
				</div>
				<div className="login_field">
					<input type="text" className="login_input" placeholder="User Name" {...register("userName")} required/>
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password" {...register("userPass")} required/>
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Confrim Password" {...register("confirmPass")} required/>
					<label className="error_message" >{}</label>
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