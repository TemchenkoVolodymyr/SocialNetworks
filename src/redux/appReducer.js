
import {getDataAuthorization} from "./AuthorizationReducer";

let SET_INITIALIZATION = "SET_INITIALIZATION";


let initialState = {
  initialization : false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZATION:
      return {
        ...state,
       initialization: true
      }
    default: return state
  }
}

export const initializationSuccess = () => {
  return {
    type:SET_INITIALIZATION,
  }
}

export const initializeApp = () => {
  return (dispatch) => {
   let promise = dispatch(getDataAuthorization())
    Promise.all([promise]).then(() => {
      dispatch(initializationSuccess())
    })

  }
}
export default AppReducer