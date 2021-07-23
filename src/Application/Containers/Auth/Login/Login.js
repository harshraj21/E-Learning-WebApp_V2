import React,{Component} from 'react'
import globalstyles from '../../Global.module.css';

class Login extends Component {
    render(){
        return (
            <div className={globalstyles.border}>
                <h1>Login Page</h1>
            </div>
        );    
    };
};

export default Login;