import { types } from "../types/types";
import { google, firebase } from "../firebase/firebaseconfig";

export const login = (id, displayName) => {
  return {
    type: types.login,
    payload: {
      id,
      displayName
    }
  }
}

export const loginGoogle = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(google)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          login(user.uid, user.displayName)
        )
      })
  }
}