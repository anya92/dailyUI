import React, { Component } from 'react';
const imageSrc = require('../assets/background.jpg');
const logoSrc = require('../assets/logo.png');
class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="image-container">
          <img src={imageSrc} alt="background-image"/>
        </div>
      	<div className="navbar-custom" ref={ref => (this.navbarToggle = ref)}>
    			<div className="navbar-custom__logo">
    				<img src={logoSrc} alt="brand-logo"/>
    			</div>
    			<div 
    				className="navbar-custom__menu" 
    				onClick={() => this.navbarToggle.classList.toggle('open')}
    			>
	        	<span className="navbar-custom__menu__middle" />
	        </div>
    			<div className="navbar-custom__middle">
      			<div className="navbar-custom__middle__active">Home</div>
      			<div>About</div>
      			<div>Products</div>
      			<div>Community</div>
    			</div>
    			<div className="navbar-custom__right">
      			<div>Sign Up</div>
    			</div>
      	</div>
      	<div className="content">
      		performance is our passion <br/>
      		<span>since 1873</span>
      	</div>
      	<div className="social">
      		<i className="fa fa-twitter" />
      		<i className="fa fa-youtube" />
      		<i className="fa fa-facebook" />
      		<i className="fa fa-instagram" />
      	</div>
      	<footer>
        	<i className="fa fa-code" aria-hidden="true"/> with <i class="fa fa-heart" aria-hidden="true" /> by <a href="https://github.com/anya92/dailyUI" target="_blank">anya92</a>
        </footer>
      </div>
		);
	}
}

export default App;
