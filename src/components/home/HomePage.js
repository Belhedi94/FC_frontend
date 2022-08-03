import React, {useState} from 'react';
import  './homepage.css';
import Register from "../components/Register/Register";
import Login from "../components/login/Login";

const HomePage = () => {
    const [isLoginSelected, setIsLoginSelected] = useState(true);
    function goToLogin() {
        setIsLoginSelected(true);
    }
    function goToSignUp() {
         setIsLoginSelected(false);
    }

    return (
            <div className={"content"}>
                {isLoginSelected ?
                    <div className={"form"}>
                        <Login goToLogin={goToLogin} goToSignUp={goToSignUp}/>
                    </div>
                    :
                    <div className={"form"}>
                        <Register goToLogin={goToLogin} goToSignUp={goToSignUp}/>
                    </div>
                }
            </div>
    )
}

export default HomePage;