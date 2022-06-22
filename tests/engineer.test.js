const Engineer = require("../lib/engineer");

test("Able to create new engineer", () => {
    const engineerTest = new Engineer();
    expect(typeof(engineerTest)).toBe("object");
});

test("Name tester", () => {
    const name = "Jason"
    const engineerTest = new Engineer(name);
    expect(engineerTest.name).toBe(name);
});

test("ID tester", () => {
    const id = 1234
    const engineerTest = new Engineer("Jason", id);
    expect(engineerTest.id).toBe(id);
});

test("Email tester", () => {
    const email = "Jason@email.com"
    const engineerTest = new Engineer("Jason", 1234, email);
    expect(engineerTest.email).toBe(email);
});

test("Github tester", () => {
    const gitHub = "jason1234"
    const engineerTest = new Engineer("Jason", 1234, "Jason@email.com", gitHub);
    expect(engineerTest.gitHub).toBe(gitHub);
});

test("Testing getName()", () => {
    const name = "Jason"
    const engineerTest = new Engineer(name);
    expect(engineerTest.getName()).toBe(name);
});

test("Testing getId", () => {
    const id = 1234
    const engineerTest = new Engineer("Jason", id);
    expect(engineerTest.getId()).toBe(id);
});

test("Testing getEmail", () => {
    const email = "Jason@email.com"
    const engineerTest = new Engineer("Jason", 1234, email);
    expect(engineerTest.getEmail()).toBe(email);
});

test("Testing getRole()", () => {
    const role = "Engineer"
    const engineerTest = new Engineer("Jason", 1234, "Jason@email.com");
    expect(engineerTest.getRole()).toBe(role);
});

test("Testing getGitHub()", () => {
    const github = "jason1234"
    const engineerTest = new Engineer("Jason", 1234, "Jason@email.com", github);
    expect(engineerTest.getGitHub()).toBe(github);
});