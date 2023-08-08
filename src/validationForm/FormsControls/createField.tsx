import {Field} from "redux-form";
import * as React from "react";
import {ValuesTypesValidator} from "../validations";


type CreateFieldType = {
    name: string,
    component: string | React.Component | React.FC,
    type:string,
    placeholder:string,
    validators:Array<ValuesTypesValidator>,
    text:string

}
export const createField: React.FC<CreateFieldType> = (name, component, type, placeholder = "", validators = null, text = "")  => (

    <div>
        <Field name={name} component={component} type={type} placeholder={placeholder} validate={validators}/> {text}
    </div>
)
