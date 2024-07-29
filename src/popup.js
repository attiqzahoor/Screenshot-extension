document.getElementById('capture-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
  
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id },
          files: ['dist/bundle.js']
        }
      ).then(() => {
        console.log('Content script injected.');
      }).catch(err => {
        console.error('Could not inject content script:', err);
      });
    });
  });
  