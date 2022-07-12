const Intern = require('../src/Intern');

describe('Intern', () => {
    const intern = new Intern("Mike", "10", "mike@gmail.com", "ASU");
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a name, Id, email, and school if provided valid arguments", () => {
            // Assert
            expect(intern.name).toEqual("Mike");
            expect(intern.Id).toEqual("10");
            expect(intern.email).toEqual("mike@gmail.com");
            expect(intern.school).toEqual("ASU");
        });
    });

    describe('getSchool function', () => {
        it("should return the school", () => {
            expect(intern.getSchool()).toEqual("ASU");
        });
    });

    describe('getRole function', () => {
        it("should return the role", () => {
            expect(intern.getRole()).toEqual("Intern");
        });
    });

});
