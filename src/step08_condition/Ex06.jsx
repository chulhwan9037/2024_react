import React, { useState } from 'react';
import Ex02 from './Ex02';
import { LogInButton, LogOutButton } from './Ex06_L';

function Ex06(props) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if(isLoggedIn){
        button = <LogOutButton onClick={handleLogoutClick} />
    }else{
        button = <LogInButton onClick={handleLoginClick} />
    }

    return(
        <div>
            {/* isLoggedIn에 따라서 button 변수의 컴포넌트가 달라진다. */}
            <Ex02 isLoggedIn={isLoggedIn} />{button}
        </div>
    )    
}
export default Ex06;