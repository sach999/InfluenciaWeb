var firebaseConfig = {
    apiKey: "AIzaSyBd77_DiSvrirrZ1FjRCkpIO_7rJZAv7tY",
    authDomain: "influencia-ffaad.firebaseapp.com",
    databaseURL: "https://influencia-ffaad.firebaseio.com",
    projectId: "influencia-ffaad",
    storageBucket: "",
    messagingSenderId: "886560911024",
    appId: "1:886560911024:web:8840b5a9941ef941985575"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        // document.getElementById("user_div").style.display = "block";
        // document.getElementById("login_div").style.display = "none";
        window.location = "./SignedIn/signedin.html";

        var user = firebase.auth().currentUser;

        if (user != null) {

            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

        }

    } else {
        // No user is signed in.

        // document.getElementById("user_div").style.display = "none";
        // document.getElementById("login_div").style.display = "block";
        window.open("../index.html", null);

    }
});

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert("Error : " + errorMessage);

        // ...
    });

}

function logout() {
    firebase.auth().signOut();
}
