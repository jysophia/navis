chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.runtime.onSuspend.addListener(() => {
    console.log("Extension suspended");
});