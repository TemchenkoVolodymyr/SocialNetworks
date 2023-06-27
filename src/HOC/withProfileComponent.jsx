import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {Component} from "react";


// ТЕПЕРЬ Я МОГУ ЛЮБУЮ КОМПОНЕНТУ ЗАЩИТИТЬ(ЕСЛИ ЗАЛОГИНЕН ТО ПОКАЗЫВАЕТ,ЕСЛИ НЕТ ТО НЕ ПОКАЗЫВАЕТ КОМПОНЕНТУ) , ПРОСТО В Container компоненты написать вот так
// let AuthNavigateComponent = withProfileComponent(ProfileContainer);
// let ProfileNavigateComponent = withRouter(AuthNavigateComponent)
// export default connect(mapStateToProps, {SetUserProfile, getProfileThinkCreator})(withRouter(ProfileNavigateComponent));


let mapStateToProps = (state) => ({
  isAuth:state.authorization.isAuth
})


// ЭТО НОС(HIGH ORDER COMPONENT) ОНА ОБВАРАЧИВАЕТ НАШУ КОМПОНЕНТУ И ДОБАВЛЯЕТ КАКУЮ ТО СВОЮ ЛОГИКУ
// В Component попадает наш компонент который мы передали в качестве параметра в ProfileContainer файле + AuthNavigateComponent(26 строка) функция
// Таким образом мы может какую то логику не дублировать а просто подставлять разные компоненты
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



