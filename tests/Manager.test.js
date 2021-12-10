const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

    describe('Manager', () => {
        describe('subclass of Employee', () => {
            it('should be a subclass of the Employee class', () => {
                const a = Manager
                const b = Employee

                expect(a.prototype instanceof b).toEqual(true)
            })
        })
        describe('constructor', () => {
            it('should return and object with parent properties name, id, email and new sublcass properties role, and officeNumber', () => {
                const obj = new Manager ('spongeBob', '1', 'sponge@bob.com', 'Manager', '01' )

                //parent properties
                expect('name' in obj).toEqual(true)
                expect('id' in obj).toEqual(true)
                expect('email' in obj).toEqual(true)
                //properties
                expect('officeNumber' in obj).toEqual(true)
                expect('role' in obj).toEqual(true)
            })
        })
        describe('getOfficeNumber', () => {
            it('should return the value of the property officeNumber for the Manager obj', () => {
                const jared = new Manager ('Jared', '4', 'jared@email.com', 'Manager', '01')

                expect(jared.getOfficeNumber() === '01').toEqual(true)
            })
        })
    })