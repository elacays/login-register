import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


type User = {
	id?:number,
	eMail?:string,
	userName?:string,
	userPass?:string

}



function UserRegister() {
	const [userValue,setUserValue]=useState<User>({})

	useEffect(() => {
		// tarayıcının başlık bölümünü değiştirmemizi sağlar
		console.log(userValue)
	  },[userValue]);
  return (
    <div className="container">
	<div className="screen">
		<div className="screen_content">
        <h1 className='form_name'>Register</h1>
			<form className="login">
				<div className="login_field">
					<input type="text" className="login_input" placeholder="Email" onChange={e=>setUserValue({...userValue,eMail:e.target.value})}/>
				</div>
				<div className="login_field">
					<input type="text" className="login_input" placeholder="User Name" onChange={e=>setUserValue({...userValue,userName:e.target.value})}/>
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password" onChange={e=>setUserValue({...userValue,userPass:e.target.value})}/>
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password"/>
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