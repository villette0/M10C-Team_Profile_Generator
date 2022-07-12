const Engineer = require('../src/Engineer');

describe('Engineer', () => {
    const engineer = new Engineer("Susan", "15", "susan@gmail.com", "@susanm");
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a name, Id, email, and github if provided valid arguments", () => {
            // Assert
            expect(engineer.name).toEqual("Susan");
            expect(engineer.Id).toEqual("15");
            expect(engineer.email).toEqual("susan@gmail.com");
            expect(engineer.github).toEqual("@susanm");
        });
    });

    describe('getGithub function', () => {
        it("should return the github", () => {
            expect(engineer.getGithub()).toEqual("@susanm");
        });
    });

    describe('getRole function', () => {
        it("should return the role", () => {
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

});

