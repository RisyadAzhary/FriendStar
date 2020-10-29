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




function todoList(event) {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/todos',
        headers: {
            access_token: localStorage.getItem('access_token')
        }
    })

 

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

},





function menuLogout(event) {
    event.preventDefault();
    $('#login-page').show();
    $('#register-page').hide();
    beforeLogin();
    signOut()
    localStorage.clear();
},


$(document).ready(function() {
    if (localStorage.getItem('access_token')) {
        afterLogin();

    } else {
        beforeLogin();
    }
    $('#add-form').submit(addForm)
    $('#login-page').submit(loginForm);
    $('#register-page').submit(registerForm);
    $('#navbar-logout').click(menuLogout)
    

})