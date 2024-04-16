import { initializeApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUjaVJ_1EybBCBOhuFofmfDoRvHG7TSU",
  authDomain: "acompanho-65dbe.firebaseapp.com",
  projectId: "acompanho-65dbe",
  storageBucket: "acompanho-65dbe.appspot.com",
  messagingSenderId: "527511416130",
  appId: "1:527511416130:web:88daa1c77884d5ba27ecdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// const googleProvider = new GoogleAuthProvider();

export { auth, app };