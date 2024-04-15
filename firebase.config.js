import { initializeApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUjaVJ_1EybBCBOhuFofmfDoRvHG7TSU",
  authDomain: "acompanho-65dbe.firebaseapp.com",
  projectId: "acompanho-65dbe",
  storageBucket: "acompanho-65dbe.appspot.com",
  messagingSenderId: "527511416130",
  appId: "1:527511416130:web:88daa1c77884d5ba27ecdb"
};

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { auth };

