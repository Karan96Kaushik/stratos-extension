chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		const userNameInput = document.querySelector('input[name="UserName"]');
		const passwordInput = document.querySelector('input[name="Password"]');

		if (userNameInput) {
			userNameInput.value = request.userID;
			userNameInput.type = 'password';
		}
		if (passwordInput) {
			passwordInput.value = request.password;
		}
		sendResponse({message: "received"});

		var form = document.querySelector('form'); // Adjust the selector to target your specific form
		if (form) {
	
			form.addEventListener('submit', function(event) {
				setTimeout(() => {
					const userNameInput = document.querySelector('input[name="UserName"]');
					if (userNameInput) {
						userNameInput.value = "***HIDDEN***";
					}
					const passwordInput = document.querySelector('input[name="Password"]');
					if (passwordInput) {
						passwordInput.value = "***HIDDEN***";
					}
					
				}, 0);
	
			});
		}

	}
);
