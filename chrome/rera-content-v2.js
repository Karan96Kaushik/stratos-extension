function removeEye () {
	const col6Elements = document.querySelectorAll('.col-6');
	let button
	if (col6Elements.length >= 2) {
		const secondCol6 = col6Elements[1];
		
		button = secondCol6.querySelector('.btn.btn-primary');
		
		if (button) {
			console.log('Button found:', button);
			button.outerHTML = null
		} else {
			console.log('Button not found in the second "col-6" element');
		}
	} else {
		console.log('Not enough "col-6" elements found');
	}


}

function simulateTyping(element, text, delay = 100) {
	return new Promise(resolve => {
		let i = 0;
		const interval = setInterval(() => {
			if (i < text.length) {
				element.value += text[i];
				element.dispatchEvent(new Event('input', { bubbles: true }));
				i++;
			} else {
				clearInterval(interval);
				resolve();
			}
		}, delay);
	});
}

function emulateTextDeletion(element, charsToDelete = 1, delay = 1) {
    return new Promise((resolve) => {
        let deletionCount = 0;
        const interval = setInterval(() => {
            if (deletionCount < charsToDelete && element.value.length > 0) {
                // Remove the last character
                element.value = element.value.slice(0, -1);
                
                // Dispatch input event to trigger any listeners
                element.dispatchEvent(new Event('input', { bubbles: true }));
                
                deletionCount++;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

function removeAllEventListeners(element) {
    const newElement = element.cloneNode(true);
    
    if (element.parentNode) {
        element.parentNode.replaceChild(newElement, element);
    }
    
    return newElement;
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		removeEye()

		let userNameInput = document.querySelector('input[id="email-mobile-number"]');
		let passwordInput = document.querySelector('input[id="aadhar-number-mobile-number"]');


		userNameInput.type = 'password';
		passwordInput.type = 'password';

		if (userNameInput) {
			// simulateTyping(userNameInput, request.userID)
			simulateTyping(userNameInput, request.userID).then(async () => {
				// userNameInput = document.querySelector('input[id="email-mobile-number"]');
				removeAllEventListeners(userNameInput)
				userNameInput = document.querySelector('input[id="email-mobile-number"]');
				if (userNameInput) await emulateTextDeletion(userNameInput,15)
				if (userNameInput) await simulateTyping(userNameInput, "***HIDDEN***")

				// passwordInput = document.querySelector('input[id="aadhar-number-mobile-number"]');
				if (passwordInput) {
					await simulateTyping(passwordInput, request.password)
					// passwordInput = document.querySelector('input[id="aadhar-number-mobile-number"]');
					removeAllEventListeners(passwordInput)
					passwordInput = document.querySelector('input[id="aadhar-number-mobile-number"]');
					if (passwordInput) await emulateTextDeletion(passwordInput,15)
					if (passwordInput) await simulateTyping(passwordInput, "***HIDDEN***")
					passwordInput = document.querySelector('input[id="aadhar-number-mobile-number"]');
				}

			})

		}
		
		sendResponse({message: "received"});

		var form = document.querySelector('form'); // Adjust the selector to target your specific form
		if (form) {
	
			form.addEventListener('submit', function(event) {
				setTimeout(() => {
					const userNameInput = document.querySelector('input[id="email-mobile-number"]');
					if (userNameInput) {
						userNameInput.value = "***HIDDEN***";
					}
					const passwordInput = document.querySelector('input[id="aadhar-number-mobile-number"]');
					if (passwordInput) {
						passwordInput.value = "***HIDDEN***";
					}
					
				}, 0);
	
			});
		}

	}
);
