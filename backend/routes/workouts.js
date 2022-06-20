const express = require('express');

const router = express.Router()


//Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//Get single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//Post a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'PATCH a workout'})
})

module.exports = router;