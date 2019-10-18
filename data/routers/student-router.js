const express = require('express');
const helmet = require('helmet');
const Students = require('../models/students-model');
const router = express.Router();

router.use(helmet());
router.use(express.json());

router.get('/', (req, res) => {
    Students.find()
    .then(students => {
        res.status(200).json({ students })
    })
    .catch(error => {
        res.status(500).json(error.message)
    });
})

router.post('/', (req, res) => {
    Students.add(req.body)
        .then(student => {
            console.log(student)
            console.log(res.type)
            res.status(201).json({student})
        })
        .catch(error => {
            res.status(500).json(error.message)
        });
})

router.delete('/:id', (req, res) => {
    Students.remove(req.params.id)
        .then(student => {
            res.status(200).json(student)
        })
        .catch(error => {
            res.status(500).json(error.message)
        });
})

module.exports = router;