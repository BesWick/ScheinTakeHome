var router = require('express').Router()
var people = require('./person-model')

function getAll(req, res) {
    res.status(200).json(people.getAll())
}

function getPerson(req, res) {
    const { ssn } = req.params
    people.getPerson(ssn, (err, person) => {
        if (err) {
            res.status(500).json(err)
            return
        }
        res.status(200).json(person)
    })
}

function addPerson(req, res) {
    people.addPerson(req.body, null, (err, result) => {
        if (err) {
            res.status(400).json({ err, ExanplePOSTBody: result })
            return
        }
        res.status(201).json(result)
    })
}

function updatePerson(req, res) {
    const { ssn } = req.params
    people.addPerson(req.body, ssn, (err, result) => {
        if (err) {
            res.status(500).json(err)
            return
        }
        res.status(200).json(result)
    })
}

function deletePerson(req, res) {
    const { ssn } = req.params
    people.deletePerson(ssn, (err) => {
        if (err) {
            res.status(500).json(err)
            return
        }
        res.status(200).json('Success: Deleted Person with SSN = ' + ssn)
    })
}

router.get('/person', getAll)
router.get('/person/:ssn', getPerson)
router.post('/person', addPerson)
router.put('/person/:ssn', updatePerson)
router.delete('/person/:ssn', deletePerson)

module.exports = router
