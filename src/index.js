import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import './index.css';

// import Form from './demo/render1000/Form';
// import Form from './demo/render1000/FormikForm';
// import Form from './App';
// import Form from './demo/fieldArray/Form';
// import Form from './demo/fieldArray/FormikForm';
// import Form from './demo';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Form />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
