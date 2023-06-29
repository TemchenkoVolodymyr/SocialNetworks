import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {Component} from "react";




let mapStateToProps = (state) => ({
  isAuth:state.authorization.isAuth
})

export const withProfileComponent = (Component) => {
  class ProfileNavComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login"/>

      }else {
        return <Component {...this.props}/>
      }
    }
  }
  let ConnectWithProfileComponent = connect(mapStateToProps)(ProfileNavComponent)   // Это сделал для того что бы классова компонента ProfileNavComponent в пропсы получила данные из store


  return ConnectWithProfileComponent;
}



