const express = require("express");
const router = express.Router();

const {
    createGoal,
    getAllGoals,
    getGoal,
    updateGoal,
    deleteGoal,
} = require("../src/controllers/ControllerGoals.js");

router.route('/').get(getAllGoals).post(createGoal);
router.route('/:id').get(getGoal)
router.route('/update/:id').post(updateGoal);
router.route('/delete/:id').get(deleteGoal);

module.exports = router;