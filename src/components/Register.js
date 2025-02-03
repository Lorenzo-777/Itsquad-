
import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            password:'',
            passwordb:'',
            errors:{ },
            msg:""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
    }
        onChange(e) {
            this.setState({[e.target.name]: e.target.value})
        };

        onSubmit(e){
            e.preventDefault();
            const newUser={
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                passwordb:this.state.passwordb
            }
            axios.post('http://localhost:8080/api/users/register', newUser)
            .then(res => this.setState({ msg: res.data, errors: {} })) // Clear errors on success
            .catch(err => this.setState({ errors: err.response.data, msg: null })); // Clear msg on error
           }
      
    
    render(){
                    const {errors, msg} = this.state;

        return(
            <div className="fcontainer">
                <div className="form-container">
                    <form onSubmit={this.onSubmit}>
                    <img src='/images/logo.png' style={{width:'400px'}}  alt="logo" />
                <label>Name:</label>
                <input type="txt"  placeholder="Enter your complete Name" onChange={this.onChange} name="name" value={this.state.name} />
                <label>Email :</label>
                <input  type="email" placeholder="Enter your email address" name="email" onChange={this.onChange} value={this.state.email}/> 
                <label>Password</label>
                <input type="password"  placeholder="********" name="password" value={this.state.password} onChange={this.onChange}/>
                <label>Confirm Password</label>
                <input type="password"  placeholder="********" name="passwordb" value={this.state.passwordb} onChange={this.onChange} />
               <br/> <div className="space"></div>
               <span>Already have acount    <Link to='/login'>login</Link></span> 
                <div className="space"></div>
                <button>Submit</button>
                  {/* Display error messages */}
                  {/* Display error messages */}
                  {errors && errors.name && <div>{errors.name}</div>}
                        {errors && errors.email && <div>{errors.email}</div>}
                        {errors && errors.password && <div>{errors.password}</div>}
                        {errors && errors.passwordb && <div>{errors.passwordb}</div>}

                        {/* Display success message */}
                        {msg && (typeof msg === 'string' ? <div>{msg}</div> : <div>{msg.message || msg.data}</div>)}

                 </form>
                 </div>
            </div>
        )
    }
}
export default Register;