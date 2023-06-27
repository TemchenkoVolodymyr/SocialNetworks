import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Textarea} from "../../validationForm/FormsControls/FormControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../validationForm/validations";

// npm add redux-form  Что бы добавить redux form  в проект
// для работы с данными нам надо из redux-form в combineReducer заимпортировать import { reducer as formReducer } from 'redux-form';

const maxlength = maxLengthCreator(50);
const minLength = minLengthCreator(1)
export const DialogsForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
        <Field name="message" component={Textarea} type="text" placeholder="your message..." validate={[requiredField,maxlength]} />
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}
const DialogsFormRedux = reduxForm({
  form: 'dialogs' // тут присваиваем уникальное  имя нашей текущей форме, так как в дальнейшем будем много форм , каждой надо давать свое уникальное имя
})(DialogsForm) // обворачиваем нашу LoginForm в обгертку redux-form для того что бы управлять данными
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