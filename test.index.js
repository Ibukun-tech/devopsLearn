const add =require("./index.js")

// --- Simple Test Runner ---

let testsRun = 0;
let testsPassed = 0;
let testsFailed = 0;

function runTest(name, actual, expected) {
  testsRun++;
  if (actual === expected) {
    testsPassed++;
    console.log(`PASS: ${name}`);
  } else {
    testsFailed++;
    console.error(`FAIL: ${name} - Expected: ${expected}, Got: ${actual}`);
  }
}

console.log("Running tests for the add function:");
console.log("-----------------------------------");

// Test Case 1: Positive numbers
runTest("Test 1: Positive numbers", add(1, 3), 4);

// Test Case 2: Negative numbers
runTest("Test 2: Negative numbers", add(-1, -5), -6);

// Test Case 3: Positive and negative numbers
runTest("Test 3: Positive and negative numbers", add(10, -4), 6);

// Test Case 4: Zero
runTest("Test 4: Zero", add(0, 7), 7);

// Test Case 5: Floating-point numbers
runTest("Test 5: Floating-point numbers", add(1.5, 2.5), 4.0);

console.log("-----------------------------------");
console.log("Test Summary:");
console.log(`Total Tests: ${testsRun}`);
console.log(`Tests Passed: ${testsPassed}`);
console.log(`Tests Failed: ${testsFailed}`);

// In a real CI/CD environment, you might exit with a non-zero status code if testsFailed > 0
process.exit(testsFailed > 0 ? 1 : 0); 
