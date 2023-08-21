const express = require("express");
const router = express.Router();

const { 
    getAllCosts,
    createCost,
    getCost,
    updateCost,
    deleteCost,
} = require("../src/controllers/ControllerCosts.js");


router.route('/').get(getAllCosts).post(createCost);
router.route('/:id').get(getCost);
router.route('/update/:id').post(updateCost);
router.route('/delete/:id').get(deleteCost);

module.exports = router;