// This function will list all localStorage items and log those with "presence" in their name
function presenceItem() {
    for (let i = 0; i < localStorage.length; i++) {
        // Get the key of each item
        const key = localStorage.key(i);
        // Check if the key contains "presence"
        if (key && key.includes("presence")) {
            // Log the key and its value if "presence" is found in the name
            let dataJson = localStorage.getItem(key);

            return JSON.parse(dataJson)
        }
    }
}

console.debug('GHASKJSKAJKSJK')

const run = async () => {
    // console.debug(presenceItem())
    if (!presenceItem().secret) return console.debug('NONENOENEONE')

	let presReq = await fetch("https://presence.teams.microsoft.com/v1/me/reportmyactivity/", {
		"credentials": "include",
		"headers": {
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:123.0) Gecko/20100101 Firefox/123.0",
			"Accept": "json",
			"Accept-Language": "en-US,en;q=0.5",
			"Content-Type": "application/json",
			"x-ms-correlation-id": "9da01245-3888-410f-82e7-844bc6929a75",
			"x-ms-endpoint-id": "d2b830d3-d20c-426c-a602-0f994b7adeb9",
			"BehaviorOverride": "redirectAs404",
			"Authorization": "Bearer " + presenceItem().secret,
            "x-ms-scenario-id": "369",
			"x-ms-user-type": "null",
			"x-ms-client-type": "web",
			"x-ms-client-env": "pds-prod-azsc-frce",
			"x-ms-client-version": "1415/1.0.0.2024021506",
			"x-ms-session-id": "99c80e59-8479-eddd-a9f3-1a72417fa1b3",
			"Sec-Fetch-Dest": "empty",
			"Sec-Fetch-Mode": "cors",
			"Sec-Fetch-Site": "same-site"
		},
		"referrer": "https://teams.microsoft.com/",
		"body": "{\"endpointId\":\"d2b830d3-d20c-426c-a602-0f994b7adeb9\",\"isActive\":true}",
		"method": "POST",
		"mode": "cors"
	});

	console.log(presReq.statusText)
	console.log(presReq.status)

}

run()

setInterval(run, 10*1000);