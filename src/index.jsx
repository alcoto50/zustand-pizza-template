

// creating an import React from 'react'
// creating an import ReactDOM from 'react-dom/client'
// creating an import './index.css'
// creating an import App from './components/App/App'
// creating an import wireframe from './components/wireframe/wireframe'
// creating an import custInfo from './zustand/customerInfo/custInfo'
// creating an import './custInfo.css'
// creating an import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import wireframe from './components/wireframe/wireframe';
import custInfo  from './zustand/customerInfo/custInfo';
import './custInfo.css';
import{ BrowserRouter as Router } from 'react-router-dom';

// creating a function that returns customer information

function customerInfo() {
  const 
}
    
    
    
    return (
        <div>
        <h1>Customer Information</h1>
        <h2>pizza</h2>
        </div>
    );
}






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
