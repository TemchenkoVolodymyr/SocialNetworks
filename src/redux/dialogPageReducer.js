import dialogItem from "../components/Dialogs/DialogItem/DialogItem";
import messageItem from "../components/Dialogs/MessageItem/MessageItem";

const SHOW_NEW_MESSAGE_TEXT = "SHOW-NEW-MESSAGE-TEXT";
export const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT"

let initialState =  {

        dialogsItem: [
            {id: 0, name: "Vova"},
            {id: 1, name: "Sasha"},
            {id: 2, name: "Petro"},
            {id: 3, name: "Viktor"},
            {id: 4, name: "Feruza"}
        ],
        messageItem: [
            {text: "Hi,i have first work in my life", id: 0},
            {text: "Good afternoon", id: 1},
            {text: "Hi,i have first work in my life", id: 2},
            {text: "Good afternoon", id: 3},
            {text: "Hi,i have first work in my life", id: 4}
        ],
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
export default DialogPageReducer;