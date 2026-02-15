import React from 'react'
import "../App.css";
import {Link} from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='landingPageContainer'>

      <nav>
        
        <div className='navHeader'>

          <h2>Sync Space</h2>

        </div>

        <div className='navList'>

          <p>Join as Guest</p>
          <p>Register</p>
          <div role='button'>
            <p>Login</p>
          </div>

        </div>

      </nav>

      <div className="landingMainContainer">
            
        <div>
          <h1>Your Space to <span style={{ color: "#22D3EE" }}>Meet & Connect</span></h1>
          <p>Connect, collaborate, and share — all in your SyncSpace</p>
          
          <div role='button'>
                
            <Link to={"/home"}>Get Started</Link>

          </div>

        </div>
        
        <div>
           
          <img src="/mobile.png" alt="" />

        </div>
        
      </div>

    </div>
  )
}
