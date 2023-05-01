document.getElementById('openChatGPT').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://chat.openai.com/' });
  });
  
  document.getElementById('openDALLE').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://labs.openai.com/' });
  });
  
  // Add more event listeners for other AI tools