function copyDiscordToClipboard() {
    /* global navigator, alert */
    navigator.clipboard.writeText("theodorus");
    alert("Saved the discord username theodorus to the clipboard.");
}

function copyEmailToClipboard() {
    /* global navigator, alert */
    navigator.clipboard.writeText("adealdrey1@gmail.com");
    alert("Saved the email adealdrey1@gmail.com to the clipboard.");
}

function openLinkedIn(link) {
    window.open(link, '_blank').focus();
}