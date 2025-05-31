const icon = document.createElement("img");
icon.src = chrome.runtime.getURL("assets/icon-512.png");
icon.alt = "tweet-feed-icon";
icon.id = "shadow-icon";
document.body.appendChild(icon);
