chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		const userNameInput = document.querySelector('input[name="UserName"]');
		const passwordInput = document.querySelector('input[name="Password"]');

		if (userNameInput) {
			userNameInput.value = request.userID;
		}
		if (passwordInput) {
			passwordInput.value = request.password;
		}
		sendResponse({message: "received"});
	}
);