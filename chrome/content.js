window.isReraExtensionInstalled = true

check = document.querySelector('span[id="statusCheck"]')
if (check) {
	check.innerHTML = "Installed";
}

window.addEventListener("message", function(event) {
	check = document.querySelector('span[id="statusCheck"]')
	if (check) {
		check.innerHTML = "Installed";
	}
	
	if (event.data.userID) {
		chrome.runtime.sendMessage(event.data);
	}
});