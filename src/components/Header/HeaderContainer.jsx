import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getDataAuthorization} from "../../redux/AuthorizationReducer";
import {compose} from "redux";

class HeaderContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
        <Header {...this.props}/>
      </>
    )
  }
}

let mapStateToProps = (state) => ({

    isAuth: state.authorization.isAuth,
    login: state.authorization.login,
    idUser: state.authorization.userId,
    photos: state.authorization.image

  }
)
export default compose(
     /*(3)*/ connect(mapStateToProps, {getDataAuthorization})
    // (2) some function
    // (1)some function
    (HeaderContainer))
// compose это функция от redux, она выполняет роль конвеера. Первая функция в очереди  это последння переданная (тут первая функция сработает (1)some function)
// Сработает она,потом свой результат передаст в (2)some function , после результат  передаст в connect

