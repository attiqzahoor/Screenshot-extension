chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'capture') {
    chrome.tabs.captureVisibleTab(null, {}, (dataUrl) => {
      chrome.downloads.download({
        url: dataUrl,
        filename: 'screenshot.png'
      });
    });
  }
});
