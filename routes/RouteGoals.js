const express = require("express");
const router = express.Router();

const {
    createGoal,
    getAllGoals,
    getGoal,
    updateGoal,
    deleteGoal,
} = require("../src/controllers/ControllerGoals.js");

const {
    deleteAport,
    createAport,
} = require("../src/controllers/ControllerAports.js")

router.route('/').get(getAllGoals).post(createGoal);
router.route('/:id').get(getGoal)
router.route('/update/:id').post(updateGoal);
router.route('/delete/:id').get(deleteGoal);
router.route('/createAport/:parentId').post(createAport);
router.route('/delete/:parentId/:id').get(deleteAport);

module.exports = router;