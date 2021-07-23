import { types } from "../types/types";
import { google, firebase, db } from "../firebase/firebaseconfig";

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

export const register = (id, name, quantity, price) => {
  return {
    type: types.register,
    payload: {
      id,
      name,
      quantity,
      price
    }
  }
}

export const productRegister = (id, name, quantity, price) => {
  return async (dispatch) => {
    const newProduct = {
      id,
      name,
      quantity,
      price
    }
    await db.collection('/Products').add(newProduct);
    dispatch(register(id, name, quantity, price))
  }
}

export const list = (product) => {
  return {
    type: types.list,
    payload: product
  }
}

export const productList = () => {
  return async (dispatch) => {
    const data = await db.collection('/Products').get();
    const product = [];

    data.forEach(element => {
      product.push({
        ...element.data()
      })
    })
    dispatch(list(product));
  }
}