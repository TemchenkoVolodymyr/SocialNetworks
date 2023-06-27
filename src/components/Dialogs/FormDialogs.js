import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Textarea} from "../../validationForm/FormsControls/FormControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../validationForm/validations";
import CustomButton from "../../utilits/CustomButton/CustomButton";


const maxlength = maxLengthCreator(50);
const minLength = minLengthCreator(1)
export const DialogsForm = (props) => {

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
        <Field name="message" component={Textarea} type="text" placeholder="your message..." validate={[requiredField,maxlength]} />
      <div>
        <CustomButton name={'send'}></CustomButton>
      </div>
    </form>
  )
}
const DialogsFormRedux = reduxForm({
  form: 'dialogs'
})(DialogsForm)
const FormDialogs = (props) => {
  const onSubmit = (formData) => {
    props.showNewMessage(formData.message)
    formData.message = ""
  }
  return (
    <>
      <DialogsFormRedux onSubmit={onSubmit}/>
    </>

  )
}

export default connect()(FormDialogs);