const getAllCosts = (req, res) => {
    res.send("get all costs");
}

const createCost = (req, res) => {
    res.json(req.body);
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