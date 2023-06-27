import React from "react";
import {connect} from "react-redux";
import NavBar from "./Nav";
import {compose} from "redux";


let f1 = (state) => {
    return {
        sidebar : state.sidebar
    }
}

export default compose(connect(f1)
(NavBar))