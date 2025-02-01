let analysisData = null;

document.getElementById('analyze').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    // Inject the content script into the current tab
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message) => {
  analysisData = message;
  const tbody = document.getElementById('results');
  tbody.innerHTML = `
    <tr>
      <td>${message.total}</td>
      <td>${message.opened}</td>
      <td>${message.unopened}</td>
    </tr>
  `;
});

// Export data to CSV
document.getElementById('exportCSV').addEventListener('click', () => {
  if (!analysisData) {
    alert('Veuillez analyser les données avant d’exporter.');
    return;
  }

  const currentDate = new Date().toLocaleDateString('fr-FR');

  const csvData = [
    ['Date', 'Total Discussions', 'Discussions Ouvertes', 'Discussions Non-Ouvertes'],
    [currentDate, analysisData.total, analysisData.opened, analysisData.unopened]
  ];

  const csvContent = "data:text/csv;charset=utf-8," + 
    csvData.map(row => row.join(',')).join('\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Analyses_whatsapp_${currentDate}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
