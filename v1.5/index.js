// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where, orderBy, serverTimestamp,
    getDoc,
    updateDoc
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUxgEruPP38L-8o5wloQpzlIXBw1LLOv0",
    authDomain: "test-338f7.firebaseapp.com",
    databaseURL: "https://test-338f7-default-rtdb.firebaseio.com",
    projectId: "test-338f7",
    storageBucket: "test-338f7.appspot.com",
    messagingSenderId: "819712021026",
    appId: "1:819712021026:web:8b26a81c713873ccd1b07b",
    measurementId: "G-JE138SYG4F"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init services
const db = getFirestore();
const auth = getAuth();
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        console.log('user is logged in');
        console.log(user);
        $('.login').remove();
        $('.homeAdmin').css('display', 'block');

    } else {
        // User is signed out
        // ...
        console.log('user is logged out');
    }
});

// Sign in
const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user logged in: ', cred.user);
            $('.login').remove();
            $('.homeAdmin').css('display', 'block');
        })
        .catch((err) => {
            console.log(err.message);
        })
})


// Sign out
$(document).on('click', '#logOut', function (e) {
    e.preventDefault()
    console.log('user logged out');
    auth.signOut().then(() => {
        window.location.href = "/v1.5"
    })
})


// Get data to requests
const colRef = collection(db, 'books');
onSnapshot(colRef, (snapshot)=>{
    const bookList = document.querySelector('ul')
	let books = []
	snapshot.docs.forEach((doc)=> {
		books.push({ ...doc.data(), id: doc.id });

        console.log(doc.id, " => ", doc.data().title);
		console.log(doc.id, " => ", doc.data().author);
		console.log('String is ', doc.toString());
		bookList.innerHTML +=
		`
			<li>
				<div>
					Title: ${doc.data().title}
				</div>
				<div>
					Author: ${doc.data().author}
				</div>
			</li>
		`;
	})
	console.log(books);
})