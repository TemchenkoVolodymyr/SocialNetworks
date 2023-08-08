import React, {useEffect, useState} from "react";
import {Field, reduxForm} from "redux-form";
import {connect, useSelector} from "react-redux";
import {Textarea} from "../../../../validationForm/FormsControls/FormControls.tsx";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../../validationForm/validations.tsx";
import CustomButton from "../../../../utilits/CustomButton/CustomButton";
import s from './PostForm.module.scss'
import {arrayUnion, doc, updateDoc, addDoc, collection, setDoc, getFirestore,getDoc} from "firebase/firestore";
import {db} from "../../../../firebase/firebase";


const maxlength = maxLengthCreator(50);
const minLength = minLengthCreator(1)
export const PostForm = (props) => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapperInput}>
        <Field name="post" component={Textarea} type="text" placeholder="your message..."
               validate={[requiredField, maxlength]}/>
      </div>
      <div>
        <CustomButton name={'send'}></CustomButton>
      </div>
    </form>
  )
}
const PostsFormRedux = reduxForm({
  form: 'posts'
})(PostForm)
const FormPosts = (props) => {

  const {posts,userId,addNewPost} = props

  const image = "https://images.unsplash.com/photo-1687893641851-3d9946c661e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"


  const setPosts = async (data) => {
    const date = new Date()
    const dataBase = {
      postMessage: data,
      date: date.toLocaleDateString(),
      userId: userId
    }

    const overwriteMessage = doc(db, "posts", `${userId}`);
    const test = posts.dataBase.postMessage

    test.push(data)
    await updateDoc(overwriteMessage, {
     dataBase: {
       postMessage:test,
       date:posts.dataBase.date,
       id:posts.dataBase.id,
       image:image,
     }
    });
  }


  const onSubmit = (formData) => {
    setPosts(formData.post).catch(error => console.log(error))
    addNewPost(formData.post)
    formData.post = ""
  }


  return (
    <>
      <PostsFormRedux onSubmit={onSubmit}/>
    </>

  )
}


export default connect()(FormPosts);