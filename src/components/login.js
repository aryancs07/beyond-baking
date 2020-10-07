import React, { Component } from 'react';
// import {  } from 'react-router-dom';
import { Button} from 'reactstrap';


class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
			<div className="container">
			<br/><br/><br/><br/>
			<br/>
				<form onSubmit={this.displayLogin} className="col-12 col-sm-6 mr-auto">
					
					<div className="fullpage">
					<h2>Login</h2>
					
					<div className="username" id="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password" id="password">
						<input 
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					
					</div>
{/* 
					<input type="submit" value="Login" placeholder="Login"/> */}
					<Button className="col-12 col-sm-6" type="submit" value="login" id="loginbutton">Login</Button><br/><br/>
							<h5 >OR</h5>
						<div className="phonelogin" id="phonelogin">
						<input
							type="text"
							placeholder="Phone no."
							value={this.state.phone}
							onChange={this.update}
							name="phonelogin"
						/>
					</div>
					<Button className="col-12 col-sm-6" type="submit" value="">Send an OTP</Button>
					<br/>
				
				<br/>
				<Button variant="secondary" href="/register" >
				Create new Account
				</Button>
				</div>
			</form>
			<br/>
		
				
			<br/>
			
			<br/>

			</div>
			</div>
		);
	}
}

export default Login;