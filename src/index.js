import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NameForm from './step10_form/NameForm';
import SelectForm from './step10_form/SelectForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode> 
<SelectForm />
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
