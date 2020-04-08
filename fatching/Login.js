import React from 'react';
import axios from 'axios';
import { Rediect } from 'react-router-dom'


class Login extends React.Component{
	constructor(){
		super();
		this.state={
			username:'wicak',
			password:'luthfi',
			token:''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value 
		})
	}

	handleSubmit = e => {
		e.preventDefault();

		const dataInput = {
			username: this.state.username,
			password: this.state.password
		}

		axios.post('https://penjualanapp-api.herokuapp.com/api/v1/auth/login' , dataInput)
			.then(res => this.setState({token : res.data.data.token}))
			.thes(localStrage.setItem('token', res.data.data.token ))
			.catch(err => console.log(err))
	}

	render(){
		if(localStrage.getItem('token')){
			return <Rediect to='/home' />
		}
		return (
				<div>

				<form onSubmit={this.handleSubmit}>
				<br />
				<label>Username</label>
				<br />
				<input 
				name='username'
				type='text'
				placeholder="masukan name"
		    	onChange={this.handleChange}
		    	value={this.state.username}
				 />

				<br />
				<br />
				<label>password</label>
				<br />
				<input 
				name='password'
				type='text'
				placeholder="masukan password"
		    	onChange={this.handleChange}
		    	value={this.state.username}
		    	
				/>

				<br />
				<br />
				<button type='submit'>Kirim
				</button>
				</form>



				</div>
			)
	}
}

export default Login;