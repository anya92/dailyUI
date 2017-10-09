import React from 'react';

const Form = ({ username, email, password, handleChange, handleSubmit }) => {
  return (
    <div>
    	<div className="title">Sign Up</div>
    	<form className="form" onSubmit={e => handleSubmit(e)}>
	    	<div className="form-group">
	    		<input 
	    			type="text"
	    			placeholder="Username" 
	    			className="form-control" 
	    			value={username}
	    			onChange={e => handleChange('username', e)}
	    			required
	    		/>
	    	</div>
	    	<div className="form-group">
	    		<input 
	    			type="email"
	    			placeholder="Email" 
	    			className="form-control" 
	    			value={email}
	    			onChange={e => handleChange('email', e)}
	    			required
	    		/>
	    	</div>
	    	<div className="form-group">
	    		<input 
	    			type="password"
	    			placeholder="Password" 
	    			className="form-control" 
	    			aria-describedby="forget-password"
	    			value={password}
	    			onChange={e => handleChange('password', e)}
	    			required
	    		/>
	    		<small id="forget-password" className="form-text text-muted text-right">Forgot your password?</small>
    		</div>
	    	<div className="button">
	    		<button type="submit" className="btn btn-lg">Sign Up</button>
	    	</div>
	    	<small className="form-text text-muted text-center">Already have an acount? <span>Login</span></small>
    	</form>
    </div>
  );
};

export default Form;
