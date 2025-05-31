const icon = document.createElement("img");
icon.src = chrome.runtime.getURL("assets/icon-512.png");
icon.alt = "tweet-feed-icon";
icon.id = "shadow-icon";
document.body.appendChild(icon);

icon.addEventListener("click", () => {
	const tweetElement = document.querySelector('[data-testid="tweetText"]');
	const tweetText = tweetElement.querySelector("span").textContent.trim();
	alert(tweetText);
	writeTweetReply(tweetText);
});

/**
 * @param {string} reply
 * @returns {void}
 */
const writeTweetReply = (reply) => {
	const tweetBox = document.querySelector('[data-testid="tweetTextarea_0"]');
	if (tweetBox) {
		tweetBox.focus();
		document.execCommand("insertText", false, reply);
	}
};
