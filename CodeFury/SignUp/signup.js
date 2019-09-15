var firebaseConfig = {
    apiKey: "AIzaSyBd77_DiSvrirrZ1FjRCkpIO_7rJZAv7tY",
    authDomain: "influencia-ffaad.firebaseapp.com",
    databaseURL: "https://influencia-ffaad.firebaseio.com",
    projectId: "influencia-ffaad",
    storageBucket: "",
    messagingSenderId: "886560911024",
    appId: "1:886560911024:web:8840b5a9941ef941985575"
};
firebase.initializeApp(firebaseConfig);

$(window).on("load", () => {
    $(".influ").hide();
    $(".brand").hide();
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

    var fields = {}

    fields['name'] = document.querySelector(".name").value;
    fields['iglink'] = document.querySelector(".iglink").value;
    fields['ytlink'] = document.querySelector(".ytlink").value;
    fields['text'] = document.querySelector(".text").value;

    email = $("input[type='email']").val();
    password = $("input[type='password'").val();

    fields['influencer_id'] = email.split('@')[0]
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            return;
        });

    // TODO get fields and make dict

    fetch('http://localhost:5000/register_influencer', {
        method: "POST",
        body: JSON.stringify(fields)
    })
        .catch(err => {
            console.log(err)
        });

}

function signupAsBrand() {

    fields['name'] = document.querySelector(".name").value;
    fields['brandName'] = document.querySelector(".brand").value;
    fields['text'] = document.querySelector(".text").value;

    email = $("input[type='email']").val();
    password = $("input[type='password'").val();

    fields['brand_id'] = email.split("@")[0];

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

    fetch('http://localhost:5000/register_brand', {
        method: "POST",
        body: JSON.stringify(fields)
    })
        .catch(err => {
            console.log(err)
        });
}
