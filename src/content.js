const icon = document.createElement("img");
icon.src = chrome.runtime.getURL("assets/icon-512.png");
icon.alt = "tweet-feed-icon";
icon.id = "shadow-icon";
document.body.appendChild(icon);

icon.addEventListener("click", () => {
	const tweetText = getTweetText();
	alert(tweetText);
	writeTweetReply(tweetText);
});

/**
 * @description Get tweet text
 * @returns {string}
 */
const getTweetText = () => {
	const tweetElement = document.querySelectorAll(
		'article [data-testid="tweetText"]'
	)[0];
	if (!tweetElement) {
		console.warn("Tweet not found.");
		return null;
	}
	const tweet = tweetElement.querySelector("span");
	return tweet ? tweet.textContent.trim() : null;
};

/**
 * @param {string} reply
 * @returns {void}
 */
const writeTweetReply = (reply) => {
	const tweetBox = document.querySelector('[data-testid="tweetTextarea_0"]');
	if (tweetBox) {
		tweetBox.focus();
		const lines = reply.split("\n");
		lines.forEach((line, index) =>
			document.execCommand("insertText", false, line)
		);
	}
};
