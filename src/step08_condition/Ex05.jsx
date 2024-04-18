import React, { useState } from 'react';
import Ex02 from './Ex02';
import { LogInButton, LogOutButton } from './Ex03_in_out';

function Ex05(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

 
    return(
        <div>
            {/* isLoggedIn에 따라서 button 변수의 컴포넌트가 달라진다. */}
            <Ex02 isLoggedIn={isLoggedIn} />
            {isLoggedIn? <LogOutButton onClick={handleLogoutClick}/> : <LogInButton onClick={handleLoginClick}/> }
        </div>
    )    
}
export default Ex05;