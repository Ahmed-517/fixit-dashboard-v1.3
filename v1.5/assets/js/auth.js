const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', (e)=>{
	e.preventDefault()

	const email = loginForm.email.value;
	const password = loginForm.password.value;

	signInWithEmailAndPassword(auth, email, password)
		.then((cred)=>{
			console.log('user logged in: ', cred.user);
		})
		.catch((err) => {
			console.log(err.message);
		})
})