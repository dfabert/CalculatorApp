import React, {useEffect, useState} from "react";
import './Home.scss';

function Home() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = () => {
            fetch('/api/user', {
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('token')
                }
              }).then(res => {
                return res.json()
              }).then(user => {
                setUser(user)
              }).catch( err => {
                console.log(err)
              });
        };
        fetchUser();
    }, []) 

    return (
    <div>
        <div id="Welcome">
            <h1 className="title">Welcome to Omnicalculator</h1>
        </div>
            <p>Login, Sign-up, or continue as a guest and use whichever calulator meets your current need.</p>
      
            <div id="notecards">
                <div className="notecard">
                    <div className="front">
                        <span className="word">Basic</span>
                    </div>
                    <div className="back">
                        <div className="definition">A basic calculator that will save your past calculations IF you are logged in.</div>
                    </div>
                </div>
                <div className="notecard">
                    <div className="front">
                        <span className="word">Financial</span>
                    </div>
                    <div className="back">
                        <div className="definition">A financial calculator to help you manage your investments and make inquiries.</div>
                    </div>
                </div>
                <div className="notecard">
                    <div className="front">
                        <span className="word">Currency</span>
                    </div>
                    <div className="back">
                        <div className="definition">A currency converter for international travel and making purchases abroad.</div>
                    </div>
                </div>
            </div>
              <div id="SignUp">
            <h1 className="button">Sign-up Now</h1>
        </div>
    </div>
    )
}




export default Home;