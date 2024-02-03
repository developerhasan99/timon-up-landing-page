document.querySelectorAll("#myForm").forEach((el) => {
	el.addEventListener("submit", function (e) {
		e.preventDefault(); // Prevent the default form submission

		// Create the pop-up element
		var popup = document.createElement("div");
		popup.classList.add("popup");
		popup.innerHTML = `
				 <h2>Please wait while we redirect you....</h2>
				 <div class="loader"></div>
			   `;

		// Append the pop-up element to the document body
		document.body.appendChild(popup);

		// Get the trackingid value from the URL
		var urlParams = new URLSearchParams(window.location.search);
		var trackingid = urlParams.get("trackingid");

		// Set the rtkcid value
		document.getElementById("trackingid").value = trackingid;

		var formData = new FormData(this); // Get the form data

		// Get the email and zip values
		var email = formData.get("email");
		var zip = formData.get("zip");

		// Send the form data to the PHP script
		fetch("https://whatever77777.online/form-push.php", {
			method: "POST",
			body: formData,
		}).finally(function () {
			// Redirect the user to another URL with email and zip as URL parameters
			// window.location.href = 'https://www.connectacp.com/6ZR9ZK/2LS592/?emailAddress=' + encodeURIComponent(email) + '&zipCode=' + encodeURIComponent(zip);
			window.location.href =
				"https://apply.smartphone-program.com/click?sub7=" +
				encodeURIComponent(email) +
				"&sub8=" +
				encodeURIComponent(zip);
			// window.location.href = 'https://www.google.com/';
		});
	});
});
//.then(function(response) {
//if (!response.ok) {
//throw new Error('Network response was not ok');
//}
// Redirect the user to another URL with email and zip as URL parameters
// window.location.href = 'https://www.connectacp.com/6ZR9ZK/2LS592/?emailAddress=' + encodeURIComponent(email) + '&zipCode=' + encodeURIComponent(zip);
//window.location.replace('https://www.connectacp.com/6ZR9ZK/2LS592/?emailAddress=' + encodeURIComponent(email) + '&zipCode=' + encodeURIComponent(zip));
//})
//.catch(function(error) {
//console.error('Error:', error);
//});
//});
