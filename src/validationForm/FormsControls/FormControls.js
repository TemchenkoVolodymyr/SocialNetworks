
import React from "react";
import s from "./FormControls.module.css"




//                       тут использую rest оператор , props помещаю в {обьект},
//                       тут мне надо что бы input и meta были отдельно от пропсов ,
//                       по этому записываем {input,meta,...props} и в ...props останется все что осталось в пропсах


const FormControl = ({input,meta,child,...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <>
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span> }
    </div>


    </>
  )
}

export const Textarea = (props) => {
  const {input,meta,...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props) => {
  const {input,meta,...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}




