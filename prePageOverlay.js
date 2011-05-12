function onPreRequest(request, sender, callback) {
    chrome.extension.onRequest.removeListener(arguments.callee);
    callback(document.getElementById('_shineBarLoaded')==null);
}
chrome.extension.onRequest.addListener(onPreRequest);
