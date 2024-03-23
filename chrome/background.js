chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.create({url: 'https://maharerait.mahaonline.gov.in/Login/LogOff'}, function(tab) {
        chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo, updatedTab) {
            if (tabId === tab.id && changeInfo.status === 'complete') {
                chrome.tabs.onUpdated.removeListener(listener);
                chrome.tabs.sendMessage(tab.id, request, function(response) {
                    console.log(response);
                })
            }
        });
    })

    if (false)
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        let tab = tabs.find(t => t.title.includes('Login Page : Maharashtra'))
        if (tab?.id)
            chrome.tabs.sendMessage(tab.id, request, function(response) {
                console.log(response);
            })
        else 
            chrome.tabs.create({url: 'https://maharerait.mahaonline.gov.in'}, function(tab) {

                chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo, updatedTab) {
                    if (tabId === tab.id && changeInfo.status === 'complete') {
                        chrome.tabs.onUpdated.removeListener(listener);
                        chrome.tabs.sendMessage(tab.id, request, function(response) {
                            console.log(response);
                        })
                    }
                });



            })
    });
});