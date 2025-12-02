const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function updatePhrase() {
    const type = document.getElementById('userType').value;
    const phraseEl = document.getElementById('signupPhrase');
    if(type==='personal') phraseEl.textContent = "Sign up to request deliveries and track them in real-time!";
    if(type==='business') phraseEl.textContent = "Sign up to manage your deliveries and assign riders efficiently!";
    if(type==='rider') phraseEl.textContent = "Sign up to accept delivery jobs and update delivery status on the go!";
}
updatePhrase();

// Signup
function signup(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    auth.createUserWithEmailAndPassword(email,password)
        .then(userCredential=>{
            const uid = userCredential.user.uid;
            db.collection('users').doc(uid).set({name,email,userType})
                .then(()=> window.location.href = 'dashboard.html?uid='+uid);
        })
        .catch(err=>alert(err.message));
}

// Login
function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email,password)
        .then(userCredential=>{
            const uid = userCredential.user.uid;
            window.location.href = 'dashboard.html?uid='+uid;
        })
        .catch(err=>alert(err.message));
}
