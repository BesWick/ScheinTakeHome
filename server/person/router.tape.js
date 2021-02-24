var app = require('../test-app')
var test = require('tape')

test('GET /api/person should send JSON list', function (assert) {
    app.get('/api/person')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(assert.end)
})

test('POST /api/person with invalid person object should send 400', function (assert) {
    app.post('/api/person')
        .send({ name: 'Barbara Doe' })
        .expect(400)
        .expect('Content-Type', /json/)
        .end(assert.end)
})

test('POST /api/person with valid person object should return 201 + person', function (assert) {
    app.post('/api/person')
        .send({
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: '03/20/1997',
            emailAddress: 'john.doe@gmail.com',
            socialSecurityNumber: '123456789',
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            let expected = {
                firstName: 'John',
                lastName: 'Doe',
                dateOfBirth: '03/20/1997',
                emailAddress: 'john.doe@gmail.com',
                socialSecurityNumber: '123456789',
            }
            assert.error(err, 'No error')
            assert.same(expected, res.body, 'Recieved Person Object')
            assert.end()
        })
})

test('DELETE /api/person:ssn should return 200 with Success Message', function (assert) {
    app.post('/api/person')
        .send({
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: '03/20/1997',
            emailAddress: 'john.doe@gmail.com',
            socialSecurityNumber: '123456789',
        })
        .end(function () {
            app.delete('/api/person/123456789')
                .expect(200)
                .end(function (err, res) {
                    let expected =
                        'Success: Deleted Person with SSN = 123456789'
                    assert.error(err, 'No error')
                    assert.same(expected, res.body, 'Person Deleted')
                    assert.end()
                })
        })
})
