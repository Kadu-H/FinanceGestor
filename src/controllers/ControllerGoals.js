const modelGoals = require("../models/ModelGoals.js");
const modelAports = require("../models/ModelAport.js");

const getAllGoals = async (req, res) => {
    try{
        const allGoals = await modelGoals.find({});
        res.status(200).render("AllGoals.ejs", { Goals: allGoals });
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const createGoal = async (req, res) => {
    try{
        const goal = await modelGoals.create(req.body);
        res.status(200).redirect('/goals');
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const getGoal = async (req, res) => {
    try{
        const goal = await modelGoals.findById(req.params.id);
        const allAports = await modelAports.find({ parentId: req.params.id });
        if(!goal){
            res.status(404).json({ msg:`No goal with id ${req.params.id}` });
        } else{
            res.status(200).render("Goal.ejs", { Goal: goal, Aports: allAports });
        }
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const updateGoal = async (req, res) => {
    try{
        const goal = await modelGoals.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators:true });
        if(!goal){
            res.status(404).json({ msg:`No goal with id ${req.params.id}` });
        } else{
            res.status(200).redirect("/goals");
        }
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const deleteGoal = async (req, res) => {
    try{
        console.log("deletado");
        const goal = await modelGoals.findByIdAndDelete(req.params.id);
        if(!goal){
            res.status(404).json({ msg:`No goal with id ${req.params.id}` });
        } else{
            console.log("deletado");
            res.status(200).redirect("/goals");
        }
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

module.exports = {
    createGoal,
    getAllGoals,
    getGoal,
    updateGoal,
    deleteGoal,
}