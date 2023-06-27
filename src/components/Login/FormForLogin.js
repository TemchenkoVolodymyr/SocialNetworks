import React from 'react';
import {createField} from "../../validationForm/FormsControls/createField";
import {Input} from "../../validationForm/FormsControls/FormControls";
import {requiredField} from "../../validationForm/validations";
import s from "../../validationForm/FormsControls/FormControls.module.css";

const FormForLogin = (props) => {
  let {handleSubmit,fall,maxLength,minLength} = props

  return (
  <>
    <form onSubmit={handleSubmit}>
      {createField("email",Input,"text","email", [requiredField,maxLength,minLength])}
      {createField("password",Input,"password","password",[requiredField,maxLength,minLength])}
      {createField("rememberMe",Input,"checkbox", "",null,"Remember me")}

      {fall ? <div className={s.formSomeError}>{fall}</div> : null}
      <div>
        <button>Send</button>
      </div>
    </form>
  </>
  );
};

export default FormForLogin;