const Costs = require ('../models/ModelCosts.js');

const getAllCosts = (req, res) => {
    res.send("get all costs");
}

const createCost = async (req, res) => {
    const cost = await Costs.create(req.body);
    res.status(201).json({ cost });
}

const getCost = (req, res) => {
    res.json({ id: req.params.id });
}

const updateCost = (req, res) => {
    res.send("update cost");
}

const deleteCost = (req, res) => {
    res.send("delete cost");
}

module.exports = {
    getAllCosts,
    createCost,
    getCost,
    updateCost,
    deleteCost,
}