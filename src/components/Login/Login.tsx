import * as React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import { setLoginData} from "../../redux/profilePageReducer.ts";
import { useDispatch} from "react-redux";
import {
  maxLengthCreator,
  minLengthCreator,
  requiredField
} from "../../validationForm/validations.tsx";
import {Input} from "../../validationForm/FormsControls/FormControls.tsx";
import s from "../../validationForm/FormsControls/FormControls.module.css";
import {createField} from "../../validationForm/FormsControls/createField.tsx";
import {AppReducerType} from "../../redux/reduxe-store";


const maxLength10 =  maxLengthCreator(30);
const minLength5 = minLengthCreator(5);

export const LoginForm:React.FC<InjectedFormProps<FormDataTypes>> = ({error,handleSubmit}) => {
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


type FormDataTypes = {
    email : string,
    password:string,
    rememberMe:boolean,

}
const Login:React.FC<AppReducerType> =  () => {

  const dispatch : any = useDispatch()
  const onSubmit = (formData : FormDataTypes) => {
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