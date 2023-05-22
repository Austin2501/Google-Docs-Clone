// function to copy URL to clipboard
export function copyURLToClipboard() {
    var url = window.location.href;

    navigator.clipboard.writeText(url)
        .then(function () {
            alert("URL copied to clipboard: " + url);
        })
        .catch(function (error) {
            alert("Failed to copy URL to clipboard: ", error);
        });
}