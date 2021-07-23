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

export const singupEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        console.log(user);
        await user.updateProfile({ displayName: name })
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(
        e => console.log(e)
      )
  }
}

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(
        e => console.log(e)
      )
  }
}