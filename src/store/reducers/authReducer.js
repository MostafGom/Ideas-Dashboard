const initialState = {
  authError: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // error
    case "LOGIN_ERROR":
      console.log("LOGIN_ERROR");
      return {
        ...state,
        authError: "Login failed"
      }
    // success
    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        authError: null,
      }
    // success
    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT_SUCCESS");
      return state

    // error
    case "SIGNOUT_ERROR":
      console.log("SIGNOUT_ERROR");
      return {
        ...state,
        authError: action.error

      }


    // success
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS");
      return {
        ...state,
        authError: null,
      }

    // error
    case "SIGNUP_ERROR":
      console.log("SIGNUP_ERROR");
      return {
        ...state,
        authError: action.error.message

      }

    default:
      return state
  }
}


export default authReducer