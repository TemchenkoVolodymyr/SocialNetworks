import React from "react";
import {reduxForm} from "redux-form";
import {setLoginData} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import {
  maxLengthCreator,
  minLengthCreator,
  requiredField
} from "../../validationForm/validations";
import {Input} from "../../validationForm/FormsControls/FormControls";
import s from "../../validationForm/FormsControls/FormControls.module.css";
import {createField} from "../../validationForm/FormsControls/createField";

const maxLength10 =  maxLengthCreator(30);
const minLength5 = minLengthCreator(5);


// npm add redux-form  Что бы добавить redux form  в проект
// для работы с данными нам надо из redux-form в combineReducer заимпортировать import { reducer as formReducer } from 'redux-form';
export const LoginForm = ({error,handleSubmit}) => {
  return (
    // в redux-form не используем <input> , используем встроенные в библиотеку <Field> Для того что бы можно было управлять данными интупов
    // в поле component передаем то что мы хотим создать component="input"

    // на форму вешаем handleSubmit который приходит в props из redux-form
    // handleSubmit это функция которая внутри имеет метод preventDefault и соберает все данные по инпутах формы
    <form onSubmit={handleSubmit}>
        {createField("email",Input,"text","email", [requiredField,maxLength10,minLength5])}
        {createField("password",Input,"password","password",[requiredField,maxLength10,minLength5])}
        {createField("rememberMe",Input,"checkbox", "",null,"Remember me")}

      {error ? <div className={s.formSomeError}>{error}</div> : null}
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}
const LoginFormRedux = reduxForm({
  form: 'login' // тут присваиваем уникальное  имя нашей текущей форме, так как в дальнейшем будем много форм , каждой надо давать свое уникальное имя
})(LoginForm) // обворачиваем нашу LoginForm в обгертку redux-form для того что бы управлять данными
const Login = (props) => {
  const onSubmit = (formData) => {
    props.dispatch(setLoginData(formData))
  }
  return (
    <>
      <h1>LOGIN</h1>
      <LoginFormRedux onSubmit={onSubmit}/>
    </>
  )
}

let mapStateToProps = (store) => {
  return {
    errorMessageLogin:store.profilePage.loginError
  }
}

export default connect(mapStateToProps)(Login);