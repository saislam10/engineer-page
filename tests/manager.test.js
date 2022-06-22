const Manager = require("../lib/manager");

test("Able to create manager", () => {
    const managerTest = new Manager();
    expect(typeof(managerTest)).toBe("object");
});

test("Name tester", () => {
    const name = "Jayden"
    const managerTest = new Manager(name);
    expect(managerTest.name).toBe(name);
});

test("ID tester", () => {
    const id = 12345
    const managerTest = new Manager("Jayden", id);
    expect(managerTest.id).toBe(id);
});

test("Email tester", () => {
    const email = "Jayden@email.com"
    const managerTest = new Manager("Jayden", 12345, email);
    expect(managerTest.email).toBe(email);
});

test("Office Number tester", () => {
    const officeNumber = 1200
    const managerTest = new Manager("Jayden", 12345, "Jayden@email.com", officeNumber);
    expect(managerTest.officeNumber).toBe(officeNumber);
});

test("Testing getName()", () => {
    const name = "Jayden"
    const managerTest = new Manager(name);
    expect(managerTest.getName()).toBe(name);
});

test("Testing getId", () => {
    const id = 12345
    const managerTest = new Manager("Jayden", id);
    expect(managerTest.getId()).toBe(id);
});

test("Testing getEmail", () => {
    const email = "Jayden@email.com"
    const managerTest = new Manager("Jayden", 12345, email);
    expect(managerTest.getEmail()).toBe(email);
});

test("Testing getRole()", () => {
    const role = "Manager"
    const managerTest = new Manager("Jayden", 12345, "Jayden@email.com");
    expect(managerTest.getRole()).toBe(role);
});

test("Testing getOfficeNumber()", () => {
    const officeNumber = 1200
    const managerTest = new Manager("Jayden", 12345, "Jayden@email.com", officeNumber);
    expect(managerTest.getOfficeNumber()).toBe(officeNumber);
});