import React from "react";
import {AddNewMessageText, ShowNewMessageText} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withProfileComponent} from "../../HOC/withProfileComponent";
import {compose} from "redux";

let mapStateToProps = (state) => {

  return {
    dialogPage: state.dialogPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (text) => {
      console.log(text)
      dispatch(ShowNewMessageText(text));
      dispatch(AddNewMessageText('2'));
    },
    showNewMessage: (text) => {
      dispatch(ShowNewMessageText(text));
    }
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),// compose это функция от redux, она выполняет роль конвеера. Первая функция в очереди  это последння переданная (тут первая функция сработает withProfileComponent)
  // Сработает она,потом свой результат передаст  в connect
  withProfileComponent,
)(Dialogs)