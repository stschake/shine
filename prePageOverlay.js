function onPreRequest(request, sender, callback) {
    chrome.extension.onRequest.removeListener(arguments.callee);
    callback(($('._shine-overlay').size()==0));
}
chrome.extension.onRequest.addListener(onPreRequest);
