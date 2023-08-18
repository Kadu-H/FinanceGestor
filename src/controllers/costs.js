const getAllCosts = (req, res) => {
    res.send("get all costs");
}

const createCost = (req, res) => {
    res.send("adding cost");
}

const getCost = (req, res) => {
    res.send("getcost");
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