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

$(window).on("load", () => {
    $(".influ").hide();
    $(".brand").hide();
});

$(".influencer-button").on("click", function () {


});

function influ() {
    $(".brand").hide();
    $(".influ").fadeIn();
    //$(".influencer-button").toggle(".btn");
}

function brand() {
    $(".influ").hide();
    $(".brand").fadeIn();
}

function signupAsInflu() {

    // var email = document.getElementById("email_field").value;
    // var password = document.getElementById("password_field").value;


    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // [START_EXCLUDE]
    //   if (errorCode == 'auth/weak-password') {
    //     alert('The password is too weak.');
    //   } else {
    //     alert(errorMessage);
    //   }
    //   console.log(error);
    // });



}

function signupAsBrand() {

}
