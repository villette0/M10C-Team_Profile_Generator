const Employee = require('../src/Employee');

describe('Employee', () => {  
  const employee = new Employee("Bob", "12", "bob@gmail.com");
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a name, Id, and email if provided valid arguments",  () => {
          // Assert
          expect(employee.name).toEqual("Bob");
          expect(employee.Id).toEqual("12");
          expect(employee.email).toEqual("bob@gmail.com");
        });
    });
    
    describe('getName function', () => {
      it("should return the name",  () => {
        expect(employee.getName()).toEqual("Bob");
      });
    });

    describe('getId function', () => {
      it("should return the Id",  () => {
        expect(employee.getId()).toEqual("12");
      });
    });

    describe('getEmail function', () => {
      it("should return the email",  () => {
        expect(employee.getEmail()).toEqual("bob@gmail.com");
      });
    });

});

