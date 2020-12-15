import React from "react";
import './Home.scss';

function Home() {
    return (
    <div>
        <div id="Welcome">
            <h1 class="title">Welcome to Omnicalculator</h1>
        </div><
            p>Login, Sign-up, or continue as a guest and use whichever calulator meets your current need.</p>
      
            <div id="notecards">
                <div class="notecard">
                    <div class="front">
                        <span class="word">Basic</span>
                    </div>
                    <div class="back">
                        <div class="definition">A basic calculator that will save your past calculations IF you are logged in.</div>
                    </div>
                </div>
                <div class="notecard">
                    <div class="front">
                        <span class="word">Financial</span>
                    </div>
                    <div class="back">
                        <div class="definition">A financial calculator to help you manage your investments and make inquiries.</div>
                    </div>
                </div>
                <div class="notecard">
                    <div class="front">
                        <span class="word">Currency</span>
                    </div>
                    <div class="back">
                        <div class="definition">A currency converter for international travel and making purchases abroad.</div>
                    </div>
                </div>
            </div>
              <div id="SignUp">
            <h1 class="button">Sign-up Now</h1>
        </div>
    </div>
    )
}




export default Home;