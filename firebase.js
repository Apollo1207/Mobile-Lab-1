import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2B-avtPIwMS5efEqmvGBf5dw5rC6vMKU",
    authDomain: "fir-auth-77619.firebaseapp.com",
    projectId: "fir-auth-77619",
    storageBucket: "fir-auth-77619.appspot.com",
    messagingSenderId: "844245953199",
    appId: "1:844245953199:web:a17aac1619654b7496425a"
};

let application;

if (!firebase.apps.length) {
    application = firebase.initializeApp(firebaseConfig);
} else {
    application = firebase.app();
}

export const authorization = firebase.auth();
