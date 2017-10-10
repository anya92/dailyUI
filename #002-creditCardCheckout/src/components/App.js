import React, { Component } from 'react';
const imageSrc = require('../assets/sneakers.jpg');

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	    name: 'Jane Doe',
	    number: '4234 5466 1235 7545',
	    date: '05/2018'
	  };
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className="container">
        <h1>#002 Credit Card Checkout</h1>
        <div className="mobile">
        	<div className="mobile__product">
        		<div className="mobile__product__image">
        			<img src={imageSrc} alt="sneakers"/>
        		</div>
        		<div className="mobile__product__name">
        			Blue sneakers
        		</div>
        		<div className="mobile__product__price">
	        		$79.99
        		</div>
        		<div className="mobile__product__decoration"></div>
        	</div>
        	<div className="mobile__card">
        		<form className="form" onSubmit={e => this.handleSubmit(e)}>
      				<label htmlFor="name">cardholder's name</label>
      				<input 
      					type="text"
      					id="name"
      					className="form-control"
      					value={this.state.name}
      					onChange={e => this.setState({ name: e.target.value })}
      				/>
      				<label htmlFor="number">card number</label>
      				<input 
      					type="text"
      					id="number"
      					className="form-control"
      					value={this.state.number}
      					onChange={e => this.setState({ number: e.target.value })}
      				/>
        			<div className="mobile__card__inline">
	      				<label htmlFor="date">expiration&nbsp;date</label>
	      				<input 
	      					type="text"
	      					id="date"
	      					className="form-control"
	      					value={this.state.date}
	      					onChange={e => this.setState({ date: e.target.value })}
	      				/>
        			</div>
      				<button type="submit" className="btn">purchase ➡</button>
        		</form>
        	</div>
        </div>
        <footer>
        	<i className="fa fa-code" aria-hidden="true"/> with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://github.com/anya92/dailyUI" target="_blank">anya92</a>
        </footer>
      </div>
		);
	}
}

export default App;
