import React from 'react';
import ReactDOM from 'react-dom';
//import Component
import App from "./App";
//import Style
import './assets/Style.css'
//import Router
import { BrowserRouter as Router } from 'react-router-dom'
//import Redux
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";
import Reducer from './Store/reducers'
const Store = createStore(Reducer, devToolsEnhancer())



ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
