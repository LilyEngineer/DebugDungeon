// Sample test cases for QA Test Case and Bug Report App

const testCases = [
  {
    id: 1,
    description: "Add a new test case with valid inputs",
    steps: [
      "Open the Test Case form",
      "Enter a title",
      "Enter detailed steps",
      "Select a severity",
      "Click 'Add Test Case'",
      "Verify the new test case appears in the list"
    ],
    expectedResult: "Test case is added and displayed with correct details and severity",
  },
  {
    id: 2,
    description: "Add a new bug report with valid inputs",
    steps: [
      "Open the Bug Report form",
      "Enter a bug title",
      "Enter a detailed description",
      "Select a severity",
      "Click 'Add Bug Report'",
      "Verify the new bug report appears in the list"
    ],
    expectedResult: "Bug report is added and displayed with correct details and severity",
  },
  {
    id: 3,
    description: "Edit an existing test case",
    steps: [
      "Locate an existing test case in the list",
      "Click the ✏️ (edit) button",
      "Verify the test case details load into the form",
      "Change some details",
      "Click 'Add Test Case' to save changes",
      "Verify the updated test case appears in the list with new details"
    ],
    expectedResult: "Test case is updated correctly in the list",
  },
  {
    id: 4,
    description: "Delete an existing bug report",
    steps: [
      "Locate an existing bug report in the list",
      "Click the 🗑️ (delete) button",
      "Confirm the bug report is removed from the list"
    ],
    expectedResult: "Bug report is removed from the list immediately",
  },
  {
    id: 5,
    description: "Export all test cases and bug reports to JSON",
    steps: [
      "Add at least one test case and one bug report",
      "Click the '📤 Export All Data as JSON' button",
      "Save and open the downloaded JSON file",
      "Verify it contains both test cases and bug reports with correct details"
    ],
    expectedResult: "JSON file correctly contains all current test cases and bug reports",
  },
];
