import {Field} from "redux-form";
import React from "react";



export const createField = (name,component,type,placeholder = "",validators = null,text = "") => (

<div>
  <Field name={name} component={component} type={type}   placeholder={placeholder} validate={validators}/> {text}
</div>
  )
