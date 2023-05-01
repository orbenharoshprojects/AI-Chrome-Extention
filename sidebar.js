var sidebar = document.querySelector(".sidebar");
var closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function () {
  sidebar.style.display = "none";
  chrome.action.setBadgeText({ text: "" });
});

chrome.action.onClicked.addListener(function (tab) {
  chrome.action.setBadgeText({ text: "1" });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleSidebar") {
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
  }
});
