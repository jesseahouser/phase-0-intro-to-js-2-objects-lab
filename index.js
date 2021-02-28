// Creates an objected called `employee` with keyes `name` and `streetAddress`
// Values are empty strings.
const employee = {
    name: ``,
    streetAddress: ``
}

// Non-destructively updates `employee` with given `key` and `value`
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Uses the `Object.assign` method to create and return a new object, 
    // combining the original `employee` object with the new `key` and `value`
    // passed in the function arguments.
    return Object.assign({}, employee, { [key]: value });
}

// Destructively updates `employee` with given `key` and `value`
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Assigns the new `value` to the `key` passed in the function arguments.
    // We use bracket notation here so that we can dynamically access the `key`
    // we want to update.
    employee[key] = value;
    // Returns the object `employee`
    return employee;
}

// Non-destructively deletes `key` from employee
function deleteFromEmployeeByKey(employee, key) {
    // Uses the 'Object.assign' method to create and return a new object,
    // where the given `key` passed in the function arguments is deleted.
    return Object.assign({}, delete employee.key);
}

// Destructively deletes `key` from employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the `key` from employee using bracket notation.
    // Using bracket notation allows us to dynamically access the `key`
    // we want to update.
    delete employee[key];
    // Returns the object `employee`
    return employee;
}