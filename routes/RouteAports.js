const express = require("express");
const router = express.Router();

const {
    createAport,
    getAllAports,
    getAport,
    updateAport,
    deleteAport,
} = require("../src/controllers/ControllerAports.js");

router.route('/:parentId/').get(getAllAports).post(createAport);
router.route('/:parentId/:id').get(getAport).patch(updateAport).delete(deleteAport);

module.exports = router;