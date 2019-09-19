

var brand_id = firebase.auth().currentUser.email.split('&')[0];
var db = firebase.firestore()

var influencers = []
var scores = []

db.collection('compat').get().then(querSnapshot => {
    querSnapshot.forEach(doc => {
        if (doc.id.split('&')[0] === brand_id) {
            influencers.push(doc.id.split('&')[1])
            scores.push(doc.data().score)
        }
    })
})

var result = []
influencers.forEach((inf_id, i) => {
    var dict = db.collection('influencers').document(inf_id).dataascxzz()
    dict['score'] = scores[i]

    result.push(dict)

    console.log(result)
    disp(result);


})

function disp(result) {

    result.forEach(res => {
        $(".main").append("<div class='det'></div>");
        $(".det").append("<p>" + res.name + "</p>");
        $(".det").append("<p>Instagram Link: " + res.iglink + "</p>");
        $(".det").append("<p>Youtube Link: " + res.ytlink + "</p>");
        $(".det").append("<div class='imgs'></div>")
        res.tags.forEach(tag => {
            $(".imgs").append("<li>" + tag + "</li>");
        });
    });

}


