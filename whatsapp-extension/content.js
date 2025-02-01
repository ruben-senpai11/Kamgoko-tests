// Prevent multiple executions by setting a unique flag
///if (!window.__WHATSAPP_ANALYZER__) {  window.__WHATSAPP_ANALYZER__ = true;

  (function analyzeConversations() {
    // Select all conversations
    const conversations = document.querySelectorAll('._ak8l');
    let total = conversations.length;
    let opened = 0;
    let unopened = 0;

    // Analyze each conversation
    conversations.forEach(conversation => {
      const unreadBadge = conversation.querySelector('._ahlk');
      if (unreadBadge) {
        unopened++;
      } else {
        opened++;
      }
    });

    // Send results to the popup
    chrome.runtime.sendMessage({
      total: total,
      opened: opened,
      unopened: unopened
    });
  })();
//}
