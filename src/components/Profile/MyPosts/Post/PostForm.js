import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Textarea} from "../../../../validationForm/FormsControls/FormControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../../validationForm/validations";


const maxlength = maxLengthCreator(50);
const minLength = minLengthCreator(1)
export const PostForm = (props) => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="post" component={Textarea} type="text" placeholder="your message..." validate={[requiredField,maxlength]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}
const PostsFormRedux = reduxForm({
  form: 'posts'
})(PostForm)
const FormPosts = (props) => {
  const onSubmit = (formData) => {
    props.addNewPost(formData.post)
    formData.post = ""
  }
  return (
    <>
      <PostsFormRedux onSubmit={onSubmit}/>
    </>

  )
}


export default connect()(FormPosts);