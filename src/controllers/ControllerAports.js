const modelAports = require("../models/ModelAport.js");

const getAllAports = async (req, res) => {
    try{
        const allAports = await modelAports.find({ parentId: req.params.parentId });
        res.status(200).json({allAports});
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const createAport = async (req, res) => {
    try{
        const info = {
            aport: req.body.aport,
            parentId: req.params.parentId,
        }
        const aport = await modelAports.create(info);
        res.status(200).json({aport});
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const getAport = async (req, res) => {
    try{
        const aport = await modelAports.findOne({ _id: req.params.id, parentId: req.params.parentId });
        if(!aport){
            res.status(404).json({ msg:`No aport with id ${req.params.id}` });
        } else{
            res.status(200).json(aport);
        }
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const updateAport = async (req, res) => {
    try{
        const aport = await modelAports.findOneAndUpdate({ parentId: req.params.parentId, _id: req.params.id }, req.body );
        if(!aport){
            res.status(404).json({ msg:`No aport with id ${req.params.id}` });
        } else{
            res.status(200).json({aport});
        }
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

const deleteAport = async (req, res) => {
    try{
        const aport = await modelAports.findOneAndDelete({ _id: req.params.id, parentId: req.params.parentId });
        if(!aport){
            res.status(404).json({ msg:`No goal with id ${req.params.id}` });
        } else{
            res.status(200).json({aport});
        }
    } catch(error){
        res.status(500).json({ msg:error });
    }
}

module.exports = {
    createAport,
    getAllAports,
    getAport,
    updateAport,
    deleteAport,
}