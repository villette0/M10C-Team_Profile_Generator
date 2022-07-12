const Manager = require('../src/Manager');

describe('Manager', () => {
    const manager = new Manager("Arthur", "22", "arthur@gmail.com", "707");
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a name, Id, email, and office number if provided valid arguments", () => {
            // Assert
            expect(manager.name).toEqual("Arthur");
            expect(manager.Id).toEqual("22");
            expect(manager.email).toEqual("arthur@gmail.com");
            expect(manager.officeNumber).toEqual("707");
        });
    });

    describe('getRole function', () => {
        it("should return the role", () => {
            expect(manager.getRole()).toEqual("Manager");
        });
    });

});
