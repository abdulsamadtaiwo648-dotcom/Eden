// Your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// Update signup phrase dynamically
function updatePhrase() {
    const type = document.getElementById('userType').value;
    const phraseEl = document.getElementById('signupPhrase');
    if(type==='personal') phraseEl.textContent = "Sign up to request deliveries and track them!";
    if(type==='business') phraseEl.textContent = "Sign up to manage deliveries and assign riders!";
    if(type==='rider') phraseEl.textContent = "Sign up to accept delivery jobs and update status!";
}
updatePhrase();

// Sign Up
function signup(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    if(!name || !email || !password) return alert("Please fill all fields");

    auth.createUserWithEmailAndPassword(email,password)
        .then(userCredential=>{
            const uid = userCredential.user.uid;
            // Save user info in Firestore
            db.collection('users').doc(uid).set({
                name,
                email,
                userType
            }).then(()=>{
                alert("Signup successful!");
                // Redirect to dashboard
                window.location.href = 'dashboard.html?uid='+uid;
            });
        })
        .catch(err=>alert(err.message));
}

// Login
function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!email || !password) return alert("Please fill all fields");

    auth.signInWithEmailAndPassword(email,password)
        .then(userCredential=>{
            const uid = userCredential.user.uid;
            // Redirect to dashboard
            window.location.href = 'dashboard.html?uid='+uid;
        })
        .catch(err=>alert(err.message));
}
