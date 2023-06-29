import React from "react";
import './App.scss';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../redux/appReducer";
import Loader from "../components/Loader/Loader";
import RouterCollection from "./RouterCollection/RouterCollection";


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialization) {
      return <Loader/>
    }
    return (
     <RouterCollection></RouterCollection>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    idUser: state.authorization.userId,
    initialization: state.app.initialization
  }
}
export default compose(
  connect(mapStateToProps, {initializeApp})(App));
