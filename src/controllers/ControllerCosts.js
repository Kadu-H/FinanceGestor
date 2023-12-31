const Costs = require ('../models/ModelCosts.js');

const getAllCosts = async (req, res) => {
    try{
        const allCosts = await Costs.find({});
        res.status(200).render("AllCosts.ejs",{ Costs: allCosts });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createCost = async (req, res) => {
    try {
        const cost = await Costs.create(req.body);
        res.redirect("/costs");
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getCost = async (req, res) => {
    try{
        const Cost = await Costs.findById(req.params.id);
        if(!Cost){ 
            res.status(404).json({ msg: `No cost with id: ${req.params.id}` });
        }
        else{
            res.status(200).render('Cost.ejs', { Cost: Cost });
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateCost = async (req, res) => {
    try {
        const Cost = await Costs.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if(!Cost){ 
            res.status(404).json({ msg: `No cost for update with id: ${req.params.id}` });
        }
        else{
            res.status(200).redirect('/costs');
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteCost = async (req, res) => {
    try{
        const Cost = await Costs.findByIdAndDelete(req.params.id);
        if(!Cost){ 
            res.status(404).json({ msg: `No cost for delete with id: ${req.params.id}` });
        }
        else{
            res.status(200).redirect('/costs');
        }
    } catch (error){
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    getAllCosts,
    createCost,
    getCost,
    updateCost,
    deleteCost,
}