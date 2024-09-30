import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'materialize-css';
import Main from './Main';
import 'materialize-css/dist/css/materialize.min.css'; 
import './global.scss';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>
);


