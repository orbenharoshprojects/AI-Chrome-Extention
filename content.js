chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "toggleSidebar") {
      if (!document.getElementById("aiSidebar")) {
        const iframe = document.createElement("iframe");
        iframe.src = chrome.runtime.getURL("sidebar.html");
        iframe.id = "aiSidebar";
        iframe.style.cssText = "position:fixed;top:0;left:0;z-index:99999999;width:400px;height:100%;border:none;";
        document.body.appendChild(iframe);
      } else {
        const iframe = document.getElementById("aiSidebar");
        iframe.parentNode.removeChild(iframe);
      }
    }
  });
  