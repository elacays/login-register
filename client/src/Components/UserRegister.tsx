import React from 'react'
import {Link} from 'react-router-dom'
function UserRegister() {
  return (
    <div className="container">
	<div className="screen">
		<div className="screen_content">
        <h1 className='form_name'>Register</h1>
			<form className="login">
				<div className="login_field">
					<input type="text" className="login_input" placeholder="Email"/>
				</div>
				<div className="login_field">
					<input type="text" className="login_input" placeholder="User Name"/>
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password"/>
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