const firebase = require("firebase");
const firestore = require("firebase/firestore");

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyBmJeIoNzs1H1LKYvw7SU7yMwMa_RjXxUs",
    authDomain: "asknans-b3dad.firebaseapp.com",
    databaseURL: "https://asknans-b3dad.firebaseio.com",
    projectId: "asknans-b3dad",
    storageBucket: "",
    messagingSenderId: "880863999419"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase

