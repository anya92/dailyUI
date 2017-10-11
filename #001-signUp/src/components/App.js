import React, { Component } from 'react';

import Form from './Form';
import Hello from './Hello';

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username: '',
	    email: '',
	    password: '',
	    signed: false
	  };
	}

	handleChange(type, e) {
		this.setState({ [type]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ signed: true });
	}

	render() {
		return (
			<div className="container">
        <h1>#001 SignUp</h1>
        <div className="mobile">
        	<div className="icon">
		      	<i className="fa fa-headphones" aria-hidden="true"></i>
		    	</div>
        	{
        		!this.state.signed
        		? <Form 
        				username={this.state.username} 
        				email={this.state.email}
        				password={this.state.password}
        				handleChange={this.handleChange.bind(this)}
        				handleSubmit={this.handleSubmit.bind(this)}
        			/>
        		: <Hello username={this.state.username} />	
        	}
        </div>
        <footer>
        	<i className="fa fa-code" aria-hidden="true"/> with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://github.com/anya92/dailyUI" target="_blank">anya92</a>
        </footer>
      </div>
		);
	}
}

export default App;
