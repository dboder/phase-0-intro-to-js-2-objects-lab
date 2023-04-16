// Write your solution in this file!

var employee = {
    name: "",
    streetAddress : ""
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    /* This function should not mutate the employee; 
    it should return a new Object that has an updated value for the key passed in.
     Hint: use the spread operator! */
    let obj = {...employee};
    obj[key]  = value;
    return obj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]  = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    /* This should not mutate the original employee Object; 
    it should return a new Object that doesn't include the identified key-value pair. 
    Hint: use the spread operator!*/
    let obj = {...employee};
    delete obj[key];
    return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}