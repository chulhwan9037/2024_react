import React from 'react';
import { Ex02_F, Ex02_T } from './Ex02_TF';


function Ex02(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <Ex02_T />
    }
    return <Ex02_F />
}
export default Ex02;