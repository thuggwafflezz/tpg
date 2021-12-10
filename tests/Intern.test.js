const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

    describe('Intern', () => {
        describe('is a subclass of Employee', () => {
            it('should be a an instance of Employee', () => {
                const a = Employee
                const b = Intern
                
                expect(b.prototype instanceof a).toEqual(true)
            })
        })
        describe('constructor', () => {
            it('should return an object with parent properties name, id, email and new properties role, and schoo', () => {
                const obj = new Intern ('mike', '3', 'email@email', 'intern', 'someSchool')
                //parent properties
                expect('name' in obj).toEqual(true)
                expect('id' in obj).toEqual(true)
                expect('email' in obj).toEqual(true)
                
                //prototype properties
                expect('role' in obj).toEqual(true)
                expect('school' in obj).toEqual(true)
            })
        })

        describe('getSchool', () => {
            it('should return value of school property of the obj created by new intern', () => {
                const kate = new Intern('kate', '3', 'kate@email.com', 'Intern', 'Sierra')

                expect(kate.getSchool() === 'Sierra').toEqual(true)
            })
        })
    })