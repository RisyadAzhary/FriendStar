const SERVER = "http://localhost:3000";

$(document).ready(function () {
	if (localStorage.getItem("access_token")) {
		afterLogin();
	} else {
		beforeLogin();
	}
});

function beforeLogin(event) {
	$("#login-page").show();
	$("#music-search").hide();
	$("#register-page").hide();
	$("#navbar-logout").hide();
	$("#home-page").hide();
	$(".jumbotron").hide();
	$("#go-to-register").on("click", function (event) {
		$("#login-page").hide();
		$("#music-search").hide();
		$("#register-page").show();
		$("#navbar-logout").hide();
		$("#home-page").hide();
	});
	$("#go-to-login").on("click", function (event) {
		$("#login-page").show();
		$("#register-page").hide();
		$("#navbar-logout").hide();
		$("#home-page").hide();
	});
}

function afterRegister(event) {
	$("#login-page").show();
	$("#register-page").hide();
	$("#navbar-logout").hide();
	$("#home-page").hide();
}

function afterLogin(event) {
	$("#login-page").hide();
	$("#register-page").hide();
	$("#navbar-logout").show();
	$("#home-page").show();
	$(".jumbotron").show();
}

function showTweets(event) {
    const token = localStorage.getItem("token");
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/tweets",
        headers: {
            access_token: localStorage.getItem("access_token"),
        },
    }).done(
        (response) => {
            const tweet = response;
            $("#showtweet").empty();
            tweet.forEach((i) => {
                $("#showtweet").append(`

                <div class="col-md-2 mt-5 ">
                <p> ${i.content}</p>
              
                <i id=edit style="color:blue" class="fas fa-edit fa-lg"></i>
                   &nbsp &nbsp
                <i id=add style="color:green" class="fas fa-check-square fa-lg"></i>
                &nbsp &nbsp
                <i id=trash style="color:red" class="fas fa-ban fa-lg"></i>
                </div>`);
            });
        })
    }

function register(e) {
	e.preventDefault();
	const first_name = $("#first_name").val();
	const last_name = $("#last_name").val();
	const username = $("#username").val();
	const email = $("#email").val();
	const password = $("#password").val();

	$.ajax({
		method: "POST",
		url: "http://localhost:3000/users/register",
		data: {
			first_name: first_name,
			last_name: last_name,
			username: username,
			email: email,
			password: password,
		},
	})
		.done((data) => {
			$("#login-page").show();
			$("#register-page").hide();
			$("#navbar-logout").hide();
			$("#home-page").hide();
		})
		.fail((err) => {
			console.log(err);
		});
}

function menuLogout(event) {
	event.preventDefault();
	$("#login-page").show();
	$("#register-page").hide();
	beforeLogin();
	signOut();
	localStorage.clear();
}

function searchForm(e) {
	e.preventDefault();

	let name_search = $("#name-search").val();

	console.log(name_search);
	$.ajax({
		method: "GET",
		url: SERVER + `/deezers/search`,
		data: {
			q: name_search,
		},
	})
		.done((response) => {
			let data = Math.floor(Math.random() * 10);
			console.log(data);
			if (!response.data) {
				throw { message: "no data availabe", status: 404 };
			}
			$("#play-audio").empty();
			$("#play-audio").append(`
        <audio controls>
  
  <source src="${response.data[data].preview}" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

        `);

			console.log(response.data);
		})
		.fail((err) => {
			Swal.fire("error", `${err.message}`, "error");
			console.log(err);
		});
}



function loginForm(event) {
	event.preventDefault();

	console.log("this is from login");

	const username = $("#username-login").val();
	const password = $("#password-login").val();

	console.log(username, password);

	$.ajax({
		method: "POST",
		url: "http://localhost:3000/users/login",
		data: {
			username,
			password,
		},
	})
		.done((response) => {
			localStorage.setItem("access_token", response.access_token);
			console.log(response.access_token);
			// event.preventDefault();
			$("username-login").val("");
			$("password-login").val("");
			Swal.fire("Success!", "success");
			afterLogin();
		})
		.fail((err) => {
			console.log(err);
		});
}
