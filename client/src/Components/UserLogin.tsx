import {Link} from 'react-router-dom'

function UserLogin() {
  return (
    <div className="container">
	<div className="screen">
		<div className="screen_content">
        <h1 className='form_name'>LOGIN</h1>
			<form className="login">
				<div className="login_field">
					<input type="text" className="login_input" placeholder="Email"/>
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password"/>
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
