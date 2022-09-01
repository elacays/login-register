import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

type User={
	eMail?:string,
	userPass?:string
}
function UserLogin() {
	const [userValue,setUserValue]=useState<User>({})

	useEffect(() => {
		// tarayıcının başlık bölümünü değiştirmemizi sağlar
		console.log(userValue)
	  },[userValue]);
  return (
    <div className="container">
	<div className="screen">
		<div className="screen_content">
        <h1 className='form_name'>LOGIN</h1>
			<form className="login">
				<div className="login_field">
					<input type="text" className="login_input" placeholder="Email" onChange={e=>setUserValue({...userValue,eMail:e.target.value})}/>
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password" onChange={e=>setUserValue({...userValue,userPass:e.target.value})}/>
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
