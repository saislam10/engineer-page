const Intern = require("../lib/intern");

test("Able to create new intern", () => {
    const internTest = new Intern();
    expect(typeof(internTest)).toBe("object");
});

test("Name tester", () => {
    const name = "Jade"
    const internTest = new Intern(name);
    expect(internTest.name).toBe(name);
});

test("ID tester", () => {
    const id = 123456
    const internTest = new Intern("Jade", id);
    expect(internTest.id).toBe(id);
});

test("Email tester", () => {
    const email = "Jade@email.com"
    const internTest = new Intern("Jade", 123456, email);
    expect(internTest.email).toBe(email);
});

test("school tester", () => {
    const school = "Zoo University"
    const internTest = new Intern("Jade", 123456, "Jade@email.com", school);
    expect(internTest.school).toBe(school);
});

test("Testing getName()", () => {
    const name = "Jade"
    const internTest = new Intern(name);
    expect(internTest.getName()).toBe(name);
});

test("Testing getId", () => {
    const id = 123456
    const internTest = new Intern("Jade", id);
    expect(internTest.getId()).toBe(id);
});

test("Testing getEmail", () => {
    const email = "Jade@email.com"
    const internTest = new Intern("Jade", 123456, email);
    expect(internTest.getEmail()).toBe(email);
});

test("Testing getRole()", () => {
    const role = "Intern"
    const internTest = new Intern("Jade", 123456, "Jade@email.com");
    expect(internTest.getRole()).toBe(role);
});

test("Testing getSchool()", () => {
    const school = "Zoo University"
    const internTest = new Intern("Jade", 123456, "Jade@email.com", school);
    expect(internTest.getSchool()).toBe(school);
});