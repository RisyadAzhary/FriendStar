function beforeLogin(event) {
    $('#login-page').show();
    $('#music-search').hide();
    $('#register-page').hide();
    $('#navbar-logout').hide();
    $('#home-page').hide();
    $('.jumbotron').hide();
    $('#go-to-register').on('click', function(event) {
        $('#login-page').hide();
        $('#music-search').hide();
        $('#register-page').hide();
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




function todoList(event) {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/todos',
        headers: {
            access_token: localStorage.getItem('access_token')
        }
    })
}
 

function loginForm(event) {
    event.preventDefault();
    const username = $('#username-login').val()
    const password = $('#password-login').val()

    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: {
            username,
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


function register(e) {
    e.preventDefault()
    const first_name = $("#first_name").val()
    const last_name = $("#last_name").val()
    const username = $("#username").val()
    const email = $("#email").val()
    const password = $("#password").val()

    $.ajax({
        method: "POST",
        url: "http://localhost:3000/users/register",
        data: {
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password
        }
    })
    .done((data) => {
        $('#login-page').show();
        $('#register-page').hide();
        $('#navbar-logout').hide();
        $('#home-page').hide();
    })
    .fail(err => {
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


$(document).ready(function() {
    if (localStorage.getItem('access_token')) {
        afterLogin();

    } else {
        beforeLogin();
    }
    // $('#add-form').submit(addForm)
    // $('#login-page').submit(loginForm);
    // $('#register-page').submit(registerForm);
    // $('#navbar-logout').click(menuLogout)
    

})