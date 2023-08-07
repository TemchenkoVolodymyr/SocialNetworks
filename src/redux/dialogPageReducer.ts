


const SHOW_NEW_MESSAGE_TEXT = "SHOW-NEW-MESSAGE-TEXT";
export const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT"
export const SET_DIALOGS_DATABASE = "SET_DIALOGS_DATABASE";

let initialState = {
    newMessage: "",
    messageItem: [
        {text: null as string | null, id: null as number | null}
    ],
    dialogsItem: [
        {name: null as string | null, id: null as number | null}
    ],
    data: []
}
export type InitialStateType = typeof initialState


const DialogPageReducer = (state = initialState, action : any): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                messageItem: [...state.messageItem, {text: state.newMessage, id: action.id}],
                dialogsItem: [...state.dialogsItem, {name: "Vova", id: 1}],
                newMessage: ""
            }
        }
        case SHOW_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessage: action.newMessage
            }
        }
        case SET_DIALOGS_DATABASE: {
            return {
                ...state, data: action.data
            }
        }
        default:
            return state
    }

}

type ShowNewMessageTextType = {
    type: typeof SHOW_NEW_MESSAGE_TEXT,
    newMessage: String
}
export const ShowNewMessageText = (text): ShowNewMessageTextType => {
    return {
        type: SHOW_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
}

type AddNewMessageText = {
    type: typeof ADD_NEW_MESSAGE_TEXT,
    id: Number
}
export const AddNewMessageText = (id) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        id: id,
    }
}


type SetDialogsDatabaseType = {
    type: typeof SET_DIALOGS_DATABASE,
    data: String
}
export const SetDialogsDatabase = (dialogs): SetDialogsDatabaseType => {
    return {
        type: SET_DIALOGS_DATABASE,
        data: dialogs
    }
}
export default DialogPageReducer;