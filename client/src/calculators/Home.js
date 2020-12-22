import React, {useEffect, useState} from "react";
import './Home.scss';
import { Link } from "react-router-dom";

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
                        <span className="word"><Link to="/basic" className='basicLink'>Basic</Link></span>
                        <div className="definition">A basic calculator that will save your past calculations IF you are logged in.</div>
                </div>
                <div className="notecard">                   
                        <span className="word"><Link to="/Savings" className='savingsLink'>Financial</Link></span>                  
                        <div className="definition">A financial calculator to help you manage your investments and make inquiries.</div>
                </div>
                <div className="notecard">
                        <span className="word"><Link to="/Currency" className='currencyLink'>Currency</Link></span>
                        <div className="definition">A currency converter for international travel and making purchases abroad.</div>
                </div>
                <div className="notecard">
                        <span className="word"><Link to="/random" className='randomLink'>Random</Link></span>
                        <div className="definition">An efficient random number generator to generate a number between 1 and 1000.</div>
                </div>
            </div>
              <div id="SignUp">
            <h1 className="button"><Link to="/signup" className='link'>Sign-up Now</Link></h1>
        </div>
    </div>
    )
}




export default Home;