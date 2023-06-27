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
        return <Navigate to="/login"/> // Тут происходит : Если мы незалогинены то нам не показывает messages и profile а перенаправляет на то, что указали в Navigate to={"/login}
// Navigate это компонента которая экспортируется с react-router-dom
      }else {
        return <Component {...this.props}/>
      }
    }
  }
  let ConnectWithProfileComponent = connect(mapStateToProps)(ProfileNavComponent)   // Это сделал для того что бы классова компонента ProfileNavComponent в пропсы получила данные из store
  // можно было данные передать из ProfileContainer но зачем нам постоянно их передавать если может один раз сделать коннект.

  return ConnectWithProfileComponent;
}



