import firebase from 'firebase';

// Firebase 初期化
const config = {
    apiKey: "AIzaSyCmUDyYR-q5tn8n46L4mkNIbdiRp-QA-ZU",
    authDomain: "fir-a4c7d.firebaseapp.com",
    databaseURL: "https://fir-a4c7d.firebaseio.com",
    projectId: "fir-a4c7d",
    storageBucket: "fir-a4c7d.appspot.com",
    messagingSenderId: "609015527901",
    appId: "1:609015527901:web:771cb8cc18eb838fb85e34",
    measurementId: "G-11LWLY0X0Y"
};
firebase.initializeApp(config);

// ユーザ登録
export const signup = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
        if (user) {
            console.log("Success to Signup")
        }
    })
    .catch(error => {
        console.log(error);
    })
}

// メール＆パスワードログイン
export const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
        alert("Login Success!");
    })
    .catch(error => {
        alert(error.message);
    });
}


export default firebase;
