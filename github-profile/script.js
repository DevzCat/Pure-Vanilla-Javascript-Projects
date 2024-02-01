/* DOM elements import */
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");
const messageElement = document.getElementById("message");
const bodyElement = document.getElementById("body");
const fullnameElement = document.getElementById("fullname");
const usernameElement = document.getElementById("username");
const aElement = document.getElementById("a");
const imageElement = document.getElementById("image");
const followersElement = document.getElementById("followers");
const followingElement = document.getElementById("following");
const bioElement = document.getElementById("bio");
const locationElement = document.getElementById("location");

/* Event handling */
function onSubmit() {
	/* Check input */
	if (!inputElement.value) {
		messageElement.style.display = "block";	
	}

	if(inputElement.value && messageElement) {
		messageElement.style.display = "none";	
	}

	/* AJAX handling */
	const xhr = new XMLHttpRequest();

	/* AJAX init */
	xhr.open("GET", `https://api.github.com/users/${inputElement.value}`, true);

	/* Hanlde request, response */
	xhr.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			const data = JSON.parse(this.responseText);
			fullnameElement.textContent = data.name;	
			usernameElement.textContent = data.login;
			aElement.href = data.avatar_url;
			imageElement.src = data.avatar_url;
			followers.textContent = data.followers;
			following.textContent = data.following;
			bioElement.textContent = data.bio;
			locationElement.textContent = data.location;
			bodyElement.style.display = "flex";
		}	else if (this.readyState === 4 && this.status == 404) {
			messageElement.textContent = "user not found.";
			messageElement.style.display = "block";
		}
	}

	/* Sending */
	xhr.send();
}

/* On waiting event */
buttonElement.addEventListener("click", onSubmit);
