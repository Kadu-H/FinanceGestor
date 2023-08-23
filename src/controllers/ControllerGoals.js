const modelGoals = require("../models/ModelGoals.js");

const getAllGoals = async (req, res) => {
    try{
        const allGoals = await modelGoals.find({});
        res.status(200).json(allGoals)
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const createGoal = async (req, res) => {
    try{
        const goal = await modelGoals.create(req.body);
        console.log(goal);
        res.status(200).json({goal});
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

module.exports = {
    createGoal,
    getAllGoals,
}