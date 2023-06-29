import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect, useSelector} from "react-redux";
import {Textarea} from "../../../validationForm/FormsControls/FormControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../validationForm/validations";
import CustomButton from "../../../utilits/CustomButton/CustomButton";
import { updateDoc, doc, arrayUnion} from "firebase/firestore";
import {db} from "../../../firebase/firebase";
import style from './FormDialog.module.scss'


const maxlength = maxLengthCreator(50);
const minLength = minLengthCreator(1)
export const DialogsForm = (props) => {


  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Field name="message" component={Textarea} type="text" placeholder="your message..."
             validate={[requiredField, maxlength]}/>
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
  const messages = useSelector((state) => state.form);
  const profile = useSelector((state) => state.profilePage)


  const setMessage = async (message, userId,name) => {
    try {
      const docRef = await doc(db, "messages", "dialogs");
      const date = new Date()
      let data = {
        date: date.toLocaleDateString(),
        image: 'https://th.bing.com/th/id/OIP.PzcHfGLZz-SORrGVsjL34gHaHa?w=207&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        name: name,
        userId:userId,
        id: userId,
        items: message
      }
      await updateDoc(docRef, {messages: arrayUnion(data)})


      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const onSubmit = (formData) => {
    // props.showNewMessage(formData.message)

    // setMessage(formData.message, profile.myCurrentId,'Rob')
    //   .catch(error => console.log(error))
    formData.message = ""
  }
  return (
    <>
      <DialogsFormRedux onSubmit={onSubmit}/>
    </>

  )
}

export default connect()(FormDialogs);