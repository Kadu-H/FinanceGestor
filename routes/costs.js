const express = require("express");
const router = express.Router();

const { 
    getAllCosts,
    createCost,
    getCost,
    updateCost,
    deleteCost,
} = require("../src/controllers/costs.js");


router.route('/').get(getAllCosts);

module.exports = router;