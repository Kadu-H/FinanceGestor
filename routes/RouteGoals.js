const express = require("express");
const router = express.Router();

const {
    createGoal,
    getAllGoals,
} = require("../src/controllers/ControllerGoals.js");

router.route('/').get(getAllGoals).post(createGoal);

module.exports = router;