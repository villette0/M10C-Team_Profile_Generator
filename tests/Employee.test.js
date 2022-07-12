const Employee = require('./lib/employee');

describe ('Employee', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a name, Id, and email if provided valid arguments",  () => {
          // Arrange
          const Employee = new Employee() 'Bob';
          const Id = '12';
          const email = 'bob@gmail.com' 

          // Act
          const obj = new Employee(name, Id, email);
    
          // Assert
          expect(obj.name).toEqual(name);
          expect(obj.Id).toEqual(Id);
          expect(obj.email).toEqual(email);
        });
    });
});