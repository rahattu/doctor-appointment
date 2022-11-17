// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNydspV9dNUJkWybfpK58mgHGXeI0cTcg",
  authDomain: "doctor-appointment-34df2.firebaseapp.com",
  projectId: "doctor-appointment-34df2",
  storageBucket: "doctor-appointment-34df2.appspot.com",
  messagingSenderId: "433859974019",
  appId: "1:433859974019:web:8e576f6fef1f05ba931cb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;