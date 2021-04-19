document.getElementById("submitBtn").onclick = function handleSubmit(event) {
	// function handleSubmit(event) {
	event.preventDefault();
	console.log(`event.target.value`, event.target.value);

	// check what text was put into the form field
	let formText = document.getElementById("name").value;

	Client.checkForName(formText);

	console.log("::: Form Submitted :::");
	fetch("http://localhost:8081/test")
		.then((res) => {
			return res.json();
		})
		.then(function (data) {
			document.getElementById("results").innerHTML = data.message;
		});
};

// export { handleSubmit };
