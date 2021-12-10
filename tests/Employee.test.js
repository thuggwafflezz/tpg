const Employee = require('../lib/Employee')

    describe("Employee", () => {
        describe("constructor", () => {
            it('should return an object containing a name, id, and email property when called with the new keyword', () => {
                const obj = new Employee('mike', '4', 'some@email')

                expect('name' in obj).toEqual(true)
                expect('id' in obj).toEqual(true)
                expect('email' in obj).toEqual(true)
            })
        })
        describe("name", () => {
            it('should return the value named in the constructor function', () =>{
                const mike = new Employee('mike', '4', 'some@email')

                expect(mike.getName() === 'mike').toEqual(true)
            })
        })
        describe("id", () => {
            it('should return the value named in the constructor function', () =>{
                const mike = new Employee('mike', '4', 'some@email')

                expect(mike.getId() === '4').toEqual(true)
            })
        })
        describe("email", () => {
            it('should return the value named in the constructor function', () =>{
                const mike = new Employee('mike', '4', 'some@email')

                expect(mike.getEmail() === 'some@email').toEqual(true)
            })
        })
        describe("getEmployeeDetails", () => {
            it('should return an object with that contains an object with properties name, id, email, whos value matches the input', () =>{
                const mike = new Employee('mike', '4', 'some@email')
                const mikeDetails = mike.getEmployeeDetails()

                expect(mikeDetails.name === 'mike').toEqual(true)
            })
        })
    })