import React, {useEffect} from "react";
import s from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import FormDialogs from "./FormDialog/FormDialogs";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase/firebase";
import {useDispatch, useSelector} from "react-redux";
import {SetDialogsDatabase} from "../../redux/dialogPageReducer";


const Dialogs = (props) => {

  const {dialogPage, addNewMessage} = props
  const dispatch = useDispatch()

  const dialogDataBase = useSelector((state) => state.dialogPage.data)


  useEffect(() => {
    const getDialogsFromDatabase = async () => {
      const querySnapshot = await getDocs(collection(db, `messages`));
      querySnapshot.forEach((doc) => {
        if (doc.id === 'dialogs') {
          dispatch(SetDialogsDatabase(doc.data()))
        }
      });
    }
    getDialogsFromDatabase().catch((error) => console.log(error))
  }, [])


  const showNewMessage = (message) => {
    addNewMessage(message)
  }

  const DialogItems = dialogDataBase?.messages?.map(item => <DialogItem name={item.name} idDialog={item.id}
                                                                        image={item.image} date={item.date}
                                                                        text={item.items}></DialogItem>)

  return (
    <>
      <div className={s.dialogs}>
        <div className={s.wrapperDialogs}>
          {DialogItems}
        </div>

      </div>

    </>
  )
}

export default Dialogs;