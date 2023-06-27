import React from 'react';
import './index.css';
import store from "./redux/reduxe-store";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderTree = () => {
    root.render(
            <Provider store={store}>
            <App/>
            </Provider>
    )};
rerenderTree();
