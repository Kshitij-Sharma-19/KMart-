import { useState, useEffect } from "react";
const User = () => {

  
    const [isLoggedIn, setLoggedIn] = useState(false)


    // document.title = isLoggedIn ? "Welcome User" : "Please Login"
    const handleLogin = () => {
        localStorage.setItem("demo-token", true)
        setLoggedIn(true)
    }

    useEffect( () => {
        const isTokenSet = localStorage.getItem("demo-token")
        setLoggedIn(isTokenSet)
        document.title = isTokenSet ? "Welcome User" : "Please Login"
    }, [])
    const handleLogout = () => {
        localStorage.removeItem("demo-token")
        setLoggedIn(false)
    }
    return (
        <div>
            <h1>{isLoggedIn? "Welcome User" : "Please Login"}</h1>
            {
                isLoggedIn?
                <button onClick={handleLogout}>Logout</button>
                :
                <button onClick={handleLogin}>Login</button>
            }
        </div>
    )
}

export default User