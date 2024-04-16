import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App.js
import reportWebVitals from './reportWebVitals';
import Library from './step01_jsx/Library';
import Clock from './step02_element/Clock';
import Welcome from './step03_component/Welcome';
import Comment from './step03_component/Comment';
import CommentList from './step03_component/CommentList';
import NotificationList from './step04_state/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/*  
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" /> 
  */}
  <CommentList />
 {/*  <NotificationList />  */} 
  </React.StrictMode>
);

/* 셋 인터벌 이용 매초마다 새로고침 
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );

}, 1000);
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
