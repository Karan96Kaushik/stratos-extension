window.addEventListener("message", function(event) {
	if (event.data.userID) {
		chrome.runtime.sendMessage(event.data);
	}
});
