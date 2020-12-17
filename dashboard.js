refresh();

function refresh() {
	const URL = sessionStorage.getItem('url')

	const Http = new XMLHttpRequest();
	Http.open("GET", URL);
	Http.responseType = "text";
	Http.send();
	Http.onreadystatechange = (e) => {
		var response = Http.responseText;
		var r = JSON.parse(response);

		document.getElementById("bed").innerHTML = `Bed Temp: ${r['bedTemp']}`;
		document.getElementById("nozzle").innerHTML = `Nozzle Temp: ${r['nozzleTemp']}`;
		document.getElementById("pos").innerHTML = `X: ${r['position']['x']} Y: ${r['position']['y']} Z: ${r['position']['z']}`;
	}
}
