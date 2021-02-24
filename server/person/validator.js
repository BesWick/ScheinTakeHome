//example Person Object to send to user if validation fails
const examplePerson = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '03/20/1997',
    emailAddress: 'john.doe@gmail.com',
    socialSecurityNumber: '123456789',
}

function isValidPersonFields(person) {
    const {
        firstName,
        lastName,
        dateOfBirth,
        emailAddress,
        socialSecurityNumber,
    } = person
    if (
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        !emailAddress ||
        !socialSecurityNumber
    ) {
        return [false, 'missing fields']
    }

    //validate email
    if (!isValidEmail(emailAddress.toString())) {
        return [false, 'invalid email']
    }

    //valiidate dateOfBirth = "mm/dd/yyyy"
    if (!isValidDate(dateOfBirth.toString())) {
        return [false, 'invalid dateOfBirth']
    }
    //validate SocialSecurityNumber "xxx-xx-xxxx" or "xxxxxxxxx"
    if (!isValidSSN(socialSecurityNumber.toString())) {
        return [false, 'invalid SSN']
    }

    return [true, null]
}

function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false

    // Parse the date parts to integers
    var parts = dateString.split('/')
    var day = parseInt(parts[1], 10)
    var month = parseInt(parts[0], 10)
    var year = parseInt(parts[2], 10)

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12) return false

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1]
}

function isValidEmail(email) {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegexp.test(email)
}

function isValidSSN(ssn) {
    const ssnRegexp = /^\d{3}-?\d{2}-?\d{4}$/
    const nineRegexp = /^\d{9}$/
    return ssnRegexp.test(ssn) || nineRegexp.test(ssn)
}

module.exports = {
    examplePerson,
    isValidPersonFields,
    isValidEmail,
    isValidDate,
    isValidSSN,
}
