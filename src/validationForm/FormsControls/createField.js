import {Field} from "redux-form";
import React from "react";



// Это моя функция которая помогает создавать инпуты ,текстэриа, чекбоксы, помогает быстрее создававать форму
export const createField = (name,component,type,placeholder = "",validators = null,text = "") => (

<div>
  <Field name={name} component={component} type={type}   placeholder={placeholder} validate={validators}/> {text}
</div>
  )
