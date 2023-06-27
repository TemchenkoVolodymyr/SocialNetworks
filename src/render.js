import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addNewPost, ShowNewPostText} from "./redux/store";
import {BrowserRouter} from "react-router-dom";


//  export const rerenderTree = (state) => {
//
//      const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state={state} addNewPost={addNewPost} ShowNewPostText={ShowNewPostText}/>
//   </React.StrictMode>
// )};