// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDlYY27fDgiNp25GTJipEhMZVXxQetk-xM",
  authDomain: "technocean.harshbanjare.me",
  projectId: "technocean-5349f",
  storageBucket: "technocean-5349f.appspot.com",
  messagingSenderId: "985024537776",
  appId: "1:985024537776:web:f6a7aee97e210a6d568775",
  measurementId: "G-8SGFJJRSY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export function timeStampToDate(timeStamp) {
  // return Timestamp.toDate(timeStamp).toString();
  const date = new Timestamp(timeStamp._seconds, timeStamp._nanoseconds);
  // console.log(timeStamp);
  // console.log(date.toDate());
  return date.toDate();
}

export default app;
