import React,{useState} from "react";
import './login.css'
const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = () => {
        localStorage.setItem("username", username);
    };
    return(
        <>
        <div className="hashfolio"> HashFolio Assignment</div>
        <div className="login_main">
            <h3> Login </h3>
            <form  className="login_form" onSubmit= {handleSubmit()}>
                <input
                type="name"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                <br/>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <br/>
                <button className="submit_btn" type="submit">Submit</button>
            </form>
        </div>
        </>
    );
};

export default Login;