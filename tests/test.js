const { sum, isEven, getGrade } = require('../index');

let allPassed = true;

function runTest(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.log(`FAIL ${name}`);
    console.error(`  -> Error: ${error.message}\n`);
    allPassed = false;
  }
}

// Test 1: Sum
runTest('Question 1: sum(a, b) returns correct sum', () => {
  if (sum(2, 3) !== 5) throw new Error(`sum(2, 3) expected 5, got ${sum(2, 3)}`);
  if (sum(-1, 5) !== 4) throw new Error(`sum(-1, 5) expected 4, got ${sum(-1, 5)}`);
});

// Test 2: Even/Odd
runTest('Question 2: isEven(num) returns true for even numbers', () => {
  if (isEven(4) !== true) throw new Error(`isEven(4) expected true, got ${isEven(4)}`);
  if (isEven(7) !== false) throw new Error(`isEven(7) expected false, got ${isEven(7)}`);
  if (isEven(0) !== true) throw new Error(`isEven(0) expected true, got ${isEven(0)}`);
});

// Test 3: Grade Conditions
runTest('Question 3: getGrade(score) returns correct grade based on rules', () => {
  if (getGrade(95) !== 'Grade A') throw new Error(`getGrade(95) expected "Grade A", got "${getGrade(95)}"`);
  if (getGrade(85) !== 'Grade B') throw new Error(`getGrade(85) expected "Grade B", got "${getGrade(85)}"`);
  if (getGrade(75) !== 'Grade C') throw new Error(`getGrade(75) expected "Grade C", got "${getGrade(75)}"`);
});

if (!allPassed) {
  process.exit(1);
}