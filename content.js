chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "toggleSidebar") {
      toggleSidebar();
    }
  });
  
  function toggleSidebar() {
    let sidebar = document.getElementById("aiChromeExtensionSidebar");
  
    if (sidebar) {
      sidebar.remove();
    } else {
      createSidebar();
    }
  }
  
  function createSidebar() {
    let sidebar = document.createElement("iframe");
    sidebar.id = "aiChromeExtensionSidebar";
    sidebar.src = chrome.runtime.getURL("sidebar.html");
    sidebar.style.cssText = `
      border: none;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 350px;
      height: 100%;
      z-index: 100000;
      background-color: #f5f5f5;
    `;
  
    document.body.appendChild(sidebar);
  }
  