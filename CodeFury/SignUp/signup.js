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


$(document).ready(function () {

    $("#influencer-button").click(function () {
        $("div#influencer-sign-up").fadeIn();
        $("div#brand-sign-up").hide();
    });

    $("#brand-button").click(function () {
        $("div#influencer-sign-up").hide();
        $("div#brand-sign-up").fadeIn();
    });
});
