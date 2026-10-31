import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext.js";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save username in Context
        setUser({ username });

        console.log("Login Submitted");
    };

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    
                />

                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    
                />

                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;