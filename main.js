const testCaseForm = document.getElementById('testCaseForm');
const bugReportForm = document.getElementById('bugReportForm');

const testCaseList = document.getElementById('testCaseList');
const bugReportList = document.getElementById('bugReportList');
const exportBtn = document.getElementById('exportBtn');

let testCases = [];
let bugReports = [];

// Helper: Render lists
function render() {
  testCaseList.innerHTML = testCases.map((tc, i) => `
    <li>
      <strong>${tc.title}</strong> (Severity: ${tc.severity}, Status: ${tc.status})<br />
      <em>Description:</em> ${tc.description}<br />
      <em>Expected Result:</em> ${tc.expectedResult}
      <button onclick="deleteTestCase(${i})">🗑️ Delete</button>
      <button onclick="editTestCase(${i})">✏️ Edit</button>
    </li>
  `).join('');

  bugReportList.innerHTML = bugReports.map((bug, i) => `
    <li>
      <strong>${bug.title}</strong> (Severity: ${bug.severity}, Status: ${bug.status})<br />
      <em>Description:</em> ${bug.description}<br />
      <em>Expected Result:</em> ${bug.expectedResult}
      <button onclick="deleteBugReport(${i})">🗑️ Delete</button>
      <button onclick="editBugReport(${i})">✏️ Edit</button>
    </li>
  `).join('');
}

// Add Test Case
testCaseForm.addEventListener('submit', e => {
  e.preventDefault();
  const newTestCase = {
    title: document.getElementById('tcTitle').value.trim(),
    description: document.getElementById('tcDescription').value.trim(),
    expectedResult: document.getElementById('tcExpected').value.trim(),
    severity: document.getElementById('tcSeverity').value,
    status: document.getElementById('tcStatus').value,
  };
  testCases.push(newTestCase);
  testCaseForm.reset();
  render();
});

// Add Bug Report
bugReportForm.addEventListener('submit', e => {
  e.preventDefault();
  const newBugReport = {
    title: document.getElementById('bugTitle').value.trim(),
    description: document.getElementById('bugDescription').value.trim(),
    expectedResult: document.getElementById('bugExpected').value.trim(),
    severity: document.getElementById('bugSeverity').value,
    status: document.getElementById('bugStatus').value,
  };
  bugReports.push(newBugReport);
  bugReportForm.reset();
  render();
});

// Delete and Edit functions
function deleteTestCase(i) {
  testCases.splice(i, 1);
  render();
}

function deleteBugReport(i) {
  bugReports.splice(i, 1);
  render();
}

function editTestCase(i) {
  const tc = testCases[i];
  document.getElementById('tcTitle').value = tc.title;
  document.getElementById('tcDescription').value = tc.description;
  document.getElementById('tcExpected').value = tc.expectedResult;
  document.getElementById('tcSeverity').value = tc.severity;
  document.getElementById('tcStatus').value = tc.status;
  deleteTestCase(i);
}

function editBugReport(i) {
  const bug = bugReports[i];
  document.getElementById('bugTitle').value = bug.title;
  document.getElementById('bugDescription').value = bug.description;
  document.getElementById('bugExpected').value = bug.expectedResult;
  document.getElementById('bugSeverity').value = bug.severity;
  document.getElementById('bugStatus').value = bug.status;
  deleteBugReport(i);
}

// Export all data as JSON
exportBtn.addEventListener('click', () => {
  const data = {
    testCases,
    bugReports,
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'qa-data.json';
  a.click();
  URL.revokeObjectURL(url);
});

render();
