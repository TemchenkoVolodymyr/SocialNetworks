
const SHOW_NEW_MESSAGE_TEXT = "SHOW-NEW-MESSAGE-TEXT";
export const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT"
export const SET_DIALOGS_DATABASE = "SET_DIALOGS_DATABASE";

let initialState =  {

        newMessage: "",


}
const DialogPageReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                messageItem: [...state.messageItem,{text:state.newMessage,id:action.id}],
                dialogsItem: [...state.dialogsItem,{name:"Vova",id:1}],
                newMessage: ""
            }
        }
        case SHOW_NEW_MESSAGE_TEXT: {
            return{
                ...state,
                newMessage: action.newMessage
            }
        }
        case SET_DIALOGS_DATABASE:{
            return {
                ...state, data:action.data
            }
        }
        default:
            return state
    }

}
export const ShowNewMessageText = (text) => {
    return {
        type: SHOW_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
}
export const AddNewMessageText = (id) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        id: id,
    }
}

export const SetDialogsDatabase = (dialogs) => {
    console.log(dialogs)
    return{
        type:SET_DIALOGS_DATABASE,
        data:dialogs
    }
}
export default DialogPageReducer;