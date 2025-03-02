import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import ReactElement from './learning/custom_react.jsx';

// react dom makes a virtual dom and render it to the main page
// react dom compares itself with the browser dom and then make changes 
const reactDom = ReactDOM.createRoot(document.getElementById('root'));

reactDom.render(
    <>
    <App />
    </>,
    // ReactElement
);

