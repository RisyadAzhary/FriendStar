const SERVER = "http://localhost:3000"

$(document).ready(function () {
checkLogin()

},


function checkLogin() {
    const token = localStorage.getItem("token");
	console.log(token);

	if (token) {
		$("#content").show();
		$("#music-search").show();

	} else {
		$("#music-search").show();
		$("#content").hide();

	}

    
},

function logout() {
    localStorage.clear();
    checkLogin();
},

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

// const SERVER = "http://localhost:3000";

//  const SERVER = "http://localhost:3000";

// $(document).ready(function () {
// 	const token = localStorage.getItem("token");
// 	console.log(token);

// 	if (token) {
// 		$("#content").show();
// 		$("#landing").hide();

// 		fetchTodo();
// 	} else {
// 		$("#landing").show();
// 		$("#content").hide();

// 	}

// 	$("#btn-logout").on("click", function () {
// 		logout();
// 	});

// 	$("#btn-login").on("click", function () {
// 		login();
// 	});
// });