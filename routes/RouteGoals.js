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
router.route('/:id').get(getGoal).patch(updateGoal).delete(deleteGoal);

module.exports = router;