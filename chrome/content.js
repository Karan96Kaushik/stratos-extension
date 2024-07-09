window.isReraExtensionInstalled = true

check = document.querySelector('span[id="statusCheck"]')
if (check) {
	check.innerHTML = "Installed";
}

window.addEventListener("message", function(event) {

	
	if (event.data.userID) {
		chrome.runtime.sendMessage(event.data);
	}
	else {
		check = document.querySelector('span[id="statusCheck"]')
		if (check) {
			check.innerHTML = "Installed";
		}
	}
});