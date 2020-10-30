const SERVER = "http://localhost:3000"

function searchForm(e) {
    e.preventDefault()

    let name_search = $("#name-search").val()

    console.log(name_search);
    $.ajax({
        method: "GET",
        url: SERVER + `/deezers/search`,
        data: {
            q: name_search
        }
    })
    .done(response => {

        let data = Math.floor(Math.random()*10)
        console.log(data);
        if(!response.data) {
            throw { message: "no data availabe", status: 404 }
        }
        $("#play-audio").empty()
        $("#play-audio").append(`
        <audio controls>
  
  <source src="${response.data[data].preview}" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

        `)

        console.log(response.data);
    })
    .fail(err => {
        Swal.fire(
            'error',
            `${err.message}`,
            'error'
          )
        console.log(err);
    })
}

function onSignIn(googleUser) {

    var google_access_token = googleUser.getAuthResponse().id_token;

    console.log(google_access_token);

    $.ajax({
        method: "POST",
        url: SERVER + `/users/googleLogin`,
        data: {
            google_access_token
        }
    })
    .done(response => {

        localStorage.setItem("access_token", response.access_token)
        console.log(localStorage);

    })
    .fail(err => {
        console.log("errrooooooororoo");
    })
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

