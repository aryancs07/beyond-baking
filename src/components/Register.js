import React, { Component } from 'react';

import { Button, Card} from 'reactstrap';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			password: '',
			phone:''
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
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			fullname: '',
			phone:'',
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<div className="container">
				<br/><br/><br/><br/>
					<Card> <br/><br/>
				<form onSubmit={this.displayLogin} className="col-12 col-sm-6" >
					<h2>Register</h2>

					<div className="name" id="name" >
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email" id="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="phone" id="phone">
						<input
							type="text"
							placeholder="Phone No."
							phone="phone"
							value={this.state.phone}
							onChange={this.update}
						/>
					</div>

					<div className="pasword" id="password">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password" id="confirmpassword">
						<input type="password" placeholder="Confirm Password" name="password1" />
					</div>

					<Button className="col-12 col-sm-6" type="submit" value="register" id="registerbutton">Register</Button><br/><br/>

					
				<Button variant="secondary" href="/login" >
				Login
				</Button>
				<br/>
				</form><br/>
				</Card>
				<br/>
			</div>
			</div>
		);
	}
}

export default Register;