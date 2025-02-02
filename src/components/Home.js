import React from "react";
import { Link } from "react-router-dom";
import Animate  from "./Animation";
class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <div>
                    <img src='/images/logo.png' alt="logo" className="logo"/>
                    <Link to='/login'>Login</Link>
                 <Link to='/register'>SingUp</Link>
                 
                  
                   </div>
                   
                


                </div>

                <div className="interface1"><Animate/></div>
                <div className="footer">
                    <span>&copy;right - 2025 by Ali</span>
                </div>
            </div>
        )
    }
}
export default Home;