import React from 'react';
import Form from './demo/render1000/FormRedux';
import { Provider } from "react-redux";
import store from "./store";
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: 15 }}>
        <h2>Redux form</h2>
        <Form />
      </div>
    </Provider>
  );
}

export default App;
