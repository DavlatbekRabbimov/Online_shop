import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "ApiKey",

    authDomain: "authDomain",

    projectId: "projectId",

    storageBucket: "storageBucket",

    messagingSenderId: " messagingSenderId",

    appId: "appId",

    measurementId: "measurementId"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


