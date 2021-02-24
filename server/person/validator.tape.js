var test = require('tape')
var validator = require('./validator')

test('isValidDate() checks for valid dateOfBirth', function (assert) {
    let res = validator.isValidDate('asdaasd')
    assert.notOk(res, 'asdaasd is invalid date')
    let res2 = validator.isValidDate('03/20/1997')
    assert.ok(res2, '03/20/1997 is a valid date')
    assert.end()
})

test('isValidEmail() checks for valid email', function (assert) {
    let res = validator.isValidEmail('@gmail.com')
    assert.notOk(res, '@gmail is invalid email')
    let res2 = validator.isValidEmail('john.doe@gmail.com')
    assert.ok(res2, 'john.doe@gmail.com is valid email')
    assert.end()
})

test('isValidSSN() checks for valid SSN', function (assert) {
    let res = validator.isValidSSN('@gmail.com')
    assert.notOk(res, '@gmail is invalid SSN')
    let res2 = validator.isValidSSN('123456789')
    assert.ok(res2, '123456789 is valid SSN')
    assert.end()
})
