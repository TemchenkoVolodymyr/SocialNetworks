import React from "react";
import {reduxForm} from "redux-form";
import {setLoginData} from "../../redux/profilePageReducer";
import {useDispatch} from "react-redux";
import {
  maxLengthCreator,
  minLengthCreator,
} from "../../validationForm/validations";
import FormForLogin from "./FormForLogin";


const maxLength10 =  maxLengthCreator(30);
const minLength5 = minLengthCreator(5);


export const LoginForm = ({error,handleSubmit}) => {
  return (

    <FormForLogin handle={handleSubmit} fall={error} maxLength={maxLength10} minLength={minLength5}></FormForLogin>
  )
}

export const LoginFormRedux = reduxForm({
  form: 'login'
})(LoginForm)


const Login = () => {

  let dispatch = useDispatch()

  const onSubmit = (formData) => {
    dispatch(setLoginData(formData))
  }
  return (
    <>
      <h1>LOGIN</h1>
      <LoginFormRedux onSubmit={onSubmit}/>
    </>
  )
}

export default Login;