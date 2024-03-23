chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        let tab = tabs.find(t => t.title.includes('Login Page : Maharashtra'))
        chrome.tabs.sendMessage(tab.id, request, function(response) {
            console.log(response);
        });
    });
});