import * as React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {setLoginData} from "../../redux/profilePageReducer";
import {useDispatch} from "react-redux";
import {
  maxLengthCreator,
  minLengthCreator,
} from "../../validationForm/validations";
import FormForLogin from "./FormForLogin";


const maxLength10 =  maxLengthCreator(30);
const minLength5 = minLengthCreator(5);


export const LoginForm:React.FC<InjectedFormProps<FormDataTypes>> = ({error,handleSubmit}) => {
  return (

    <FormForLogin handle={handleSubmit} fall={error} maxLength={maxLength10} minLength={minLength5}></FormForLogin>
  )
}

export const LoginFormRedux = reduxForm({
  form: 'login'
})(LoginForm)

type FormDataTypes = {
  email : string,
  password:string,
  rememberMe:boolean,
}
const Login = () => {

  let dispatch:any = useDispatch()
  const onSubmit = (formData : FormDataTypes) => {
    dispatch(setLoginData(formData))
  }
  return (
    <>
      <h1>ttt</h1>
      <LoginFormRedux onSubmit={onSubmit}/>
    </>
  )
}

export default Login;