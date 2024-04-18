import React, { useState } from 'react';
import Ex06Toolbar from './Ex06Toolbar';

function Ex06Main(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Ex06Toolbar 
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div>리액트 공부~</div>
        </div>
    )
}
export default Ex06Main;