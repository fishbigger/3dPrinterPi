function validateForm() {
	var user = document.forms["login"]["user"].value;
	var pass = document.forms["login"]["pass"].value;
	var domain = document.forms["login"]["domain"].value;

	const Http = new XMLHttpRequest();
	const URL = `https://python-request-handler.herokuapp.com/?URL=${domain}&user=${user}&pass=${pass}`;


	// console.log(URL)

	Http.open("GET", URL);

	Http.send();

	Http.onreadystatechange = (e) => {
		var response = Http.responseText;
  		console.log(Http.responseText);

  		sessionStorage.setItem('url', URL)
  		
  		window.location.href = "dashboard.html";
	}

	return false;
}
