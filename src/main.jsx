import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import ColorChanger1 from './learning/colorChanger.jsx';
// import ReactElement from './learning/custom_react.jsx';
import '/home/dusty-dragon/Documents/js-frontend/main.css';

// react dom makes a virtual dom and render it to the main page
// react dom compares itself with the browser dom and then make changes 
const reactDom = ReactDOM.createRoot(document.getElementById('root'));

reactDom.render(
    <>

   <ColorChanger1 />
   
    </>
);

