import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
// import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDcrX6xtHye8rhZtXzwVNN2N7giEs15Ywc",

    authDomain: "e-cosmos-96c41.firebaseapp.com",

    projectId: "e-cosmos-96c41",

    storageBucket: "e-cosmos-96c41.appspot.com",

    messagingSenderId: "653314530339",

    appId: "1:653314530339:web:c5ba0203aef4d2763ea596",

    measurementId: "G-TMMS8CEK2Q"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);







