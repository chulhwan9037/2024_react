import React from 'react';

// 엘리먼트 변수 => 컴포넌트(엘리먼트)를 변수 처럼 다루고 싶을 때 

function LogInButton(props) {
    return(
        <div>
        <span></span>
        <button onClick={props.onClick}>로그인</button>
        </div>
    )
}
function LogOutButton(props) {
    return(
        <div>
        <span>환영합니다.!</span>
        <button onClick={props.onClick}>로그아웃</button>
        </div>
    )
}

export {LogInButton, LogOutButton};