

function beforeLogin(event) {
    $('#login-page').show();
    $('#register-page').hide();
    $('#navbar-logout').hide();
    $('#home-page').hide();
    $('.jumbotron').hide();
    $('#go-to-register').on('click', function(event) {
        $('#login-page').hide();
        $('#register-page').show();
        $('#navbar-logout').hide();
        $('#home-page').hide();
    })
    $('#go-to-login').on('click', function(event) {
        $('#login-page').show();
        $('#register-page').hide();
        $('#navbar-logout').hide();
        $('#home-page').hide();
    })
}


function afterRegister(event) {
    $('#login-page').show();
    $('#register-page').hide();
    $('#navbar-logout').hide();
    $('#home-page').hide();
}

function afterLogin(event) {
    $('#login-page').hide();
    $('#register-page').hide();
    $('#navbar-logout').show();
    $('#home-page').show();
    $('.jumbotron').show();
}


function profile() {
  
}

function register(e) {
    e.preventDefault()

    console.log("masuk ke register");
    const first_name = $("#first-name").val()
    const last_name = $("#last-name").val()
    const username = $("#username").val()
    const email = $("#email").val()
    const password = $("#password").val()


    $.ajax({
        method: "POST",
        url: SERVER + "/users/register"
    })
}

function loginForm(event) {
    event.preventDefault();
    const email = $('#email-login').val()
    const password = $('#password-login').val()

    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
            email,
            password
        }
    })
    .done((response) => {
        event.preventDefault();
        $('email-login').val();
        $('password-login').val();
        localStorage.setItem('access_token', response.access_token);
        Swal.fire(
            'Success!',
            'success'
        )
        afterLogin();
    })
    .fail((err) => {
        console.log(err);
    })
}


function menuLogout(event) {
    event.preventDefault();
    $('#login-page').show();
    $('#register-page').hide();
    beforeLogin();
    signOut()
    localStorage.clear();
}


// $(document).ready(function() {
//     if (localStorage.getItem('access_token')) {
//         afterLogin();

//     } else {
//         beforeLogin();
//     }
//     $('#add-form').submit(addForm)
//     $('#login-page').submit(loginForm);
//     $('#register-page').submit(registerForm);
//     $('#navbar-logout').click(menuLogout)
// })