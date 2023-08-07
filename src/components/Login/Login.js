import React from "react";
import {reduxForm} from "redux-form";
import {setLoginData} from "../../redux/profilePageReducer.ts";
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



export const LoginForm = ({error,handleSubmit}) => {
  return (

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
  form: 'login'
})(LoginForm)
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