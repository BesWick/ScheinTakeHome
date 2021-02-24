const validator = require('./validator')

// person object strucutre
// person {
//     firstName:               string
//     lastName:                string
//     dateOfBirth:             string
//     emailAddress:            stromg
//     socialSecurityNumber:    int
// }

let personArr = [] // array of objects, each representing a person

//check if there's already a person asssociated with the given SSN in the dataset
function checkSSNExist(ssn) {
    for (let i = 0; i < personArr.length; i++) {
        if (personArr[i].socialSecurityNumber == ssn) return true
    }
    return false
}

function getAll() {
    return personArr
}

function getPerson(ssn, callback) {
    if (checkSSNExist(ssn)) {
        let res = personArr.find((ele) => ele.socialSecurityNumber == ssn)
        callback(null, res)
    } else {
        callback(`Error: No Person with SSN:${ssn} exist`, [])
    }
}

//add or updates person object in personArr array
function addPerson(person, update_ssn, callback) {
    const [isValid, err] = validator.isValidPersonFields(person)
    if (!isValid) {
        callback(err, validator.examplePerson)
    } else if (checkSSNExist(person.socialSecurityNumber)) {
        if (update_ssn == null) {
            callback(
                `Error: Person With SSN ${person.socialSecurityNumber} Already Exist:`,
            )
        } else {
            let obj = personArr.find((ele, i) => {
                if ((ele.socialSecurityNumber = update_ssn)) {
                    personArr[i].firstName = person.firstName
                    personArr[i].lastName = person.lastName
                    personArr[i].dateOfBirth = person.dateOfBirth
                    personArr[i].emailAddress = person.emailAddress
                }
                return ele
            })
            callback(null, obj)
        }
    } else {
        if (update_ssn == null) {
            personArr.push(person)
            callback(null, person)
        } else {
            callback(`Error: Person with SSN:${update_ssn} doesn't exist`)
        }
    }
}

function deletePerson(ssn, callback) {
    if (!checkSSNExist(ssn)) {
        callback(`Error: Person with SSN:${ssn} doesn't exist`)
    } else {
        personArr.find((ele, i) => {
            if (ele.socialSecurityNumber == ssn) {
                personArr.splice(i, 1)
                callback(null)
            }
        })
    }
}

module.exports = {
    checkSSNExist,
    getAll,
    addPerson,
    getPerson,
    deletePerson,
}
