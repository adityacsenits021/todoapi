import { initializeApp } from 'firebase/app'
import {
  getFirestore,
} from 'firebase/firestore'
import {
  getAuth,
  
} from 'firebase/auth'

import {getStorage,

} from 'firebase/storage'





const firebaseConfig = {
  apiKey: "AIzaSyAyx8DTEriHlAJ5B3CLRV89Lh4a-4_6qBs",
  authDomain: "todo-5c333.firebaseapp.com",
  projectId: "todo-5c333",
  storageBucket: "todo-5c333.appspot.com",
  messagingSenderId: "40255383412",
  appId: "1:40255383412:web:bfaae58d33229639d2ee21",
  measurementId: "G-XEPXS967M8"
};


initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()
const storage=getStorage()

export {db,auth,storage}