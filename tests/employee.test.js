const Employee = require("../lib/employee");

test("Able to create new employee", () => {
    const employeeTest = new Employee();
    expect(typeof(employeeTest)).toBe("object");
});

test("Name tester", () => {
    const name = "John"
    const employeeTest = new Employee(name);
    expect(employeeTest.name).toBe(name);
});

test("ID tester", () => {
    const id = 123
    const employeeTest = new Employee("John", id);
    expect(employeeTest.id).toBe(id);
});

test("Email tester", () => {
    const email = "John@email.com"
    const employeeTest = new Employee("John", 123, email);
    expect(employeeTest.email).toBe(email);
});


test("Testing getName()", () => {
    const name = "John"
    const employeeTest = new Employee(name);
    expect(employeeTest.getName()).toBe(name);
});

test("Testing getId", () => {
    const id = 123
    const employeeTest = new Employee("John", id);
    expect(employeeTest.getId()).toBe(id);
});

test("Testing getEmail", () => {
    const email = "John@email.com"
    const employeeTest = new Employee("John", 123, email);
    expect(employeeTest.getEmail()).toBe(email);
});


test("Testing getRole()", () => {
    const role = "Employee"
    const employeeTest = new Employee("John", 123, "John@email.com");
    expect(employeeTest.getRole()).toBe(role);
});



