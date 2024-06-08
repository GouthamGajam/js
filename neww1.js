console.log("Hellooo Wurld");
console.error ('This is an error');
console-warn( 'This is a warning');

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Adding methods to the prototype
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate objects
const person = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

// Log results
console.log(person2.getFullName()); // Output: Mary Smith
console.log(person.getFullName());  // Output: John Doe
console.log(person.getBirthYear()); // Output: 1980
console.log(person2.getBirthYear()); // Output: 1970

