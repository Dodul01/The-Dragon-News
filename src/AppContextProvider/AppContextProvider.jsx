import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

export const AppContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);

    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        setUser(userCredential.user)
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const signUpWithEmail = (email, password) =>{
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      setUser(userCredential.user);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const signInWithEmail = (email, password) =>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      setUser(userCredential.user)
    })
    .catch((error)=>console.log(error))
  }

  const logOut = () =>{
    setLoading(true)
    signOut(auth)
    .then(()=>{
      alert('sign out sucessfully');
      setUser(null)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
      return () => {
        unsubscribe();
      }
    })
  }, [user])

  const appInfo = {
    user,
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    loading,
    logOut
  }

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;