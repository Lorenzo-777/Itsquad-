import React from "react";
import { Link } from "react-router-dom";
class Register extends React.Component{
    render(){
        return(
            <div className="fcontainer">
                <div className="form-container">
                    <form>
                    <img src='/images/logo.png' style={{width:'400px'}}  alt="logo" />
                <label>Email :</label>
                <input required type="email" placeholder="Enter your email address"/> 
                <label>Password</label>
                <input type="password" required placeholder="********" />
               <br/> <div className="space"></div>
               <span>Don't have acount    <Link to='/register'>register</Link></span> 
                <div className="space"></div>
                <button>Submit</button>
                
                 </form>
                 </div>
            </div>
        )
    }
}
export default Register;