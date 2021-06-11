import mongoose from 'mongoose';
import express from 'express';
import DocMessage from '../models/docMessage.js';
import MongooseCache from 'mongoose-redis';
const cache = MongooseCache(mongoose, "redis://127.0.0.1:6379");

export const getDocs = async (req, res) => {
   try{
        const docMessages = await DocMessage.find().cache(50);
        res.status(200).json(docMessages);
   }catch(error){
        res.status(404).json({message: error.message});
   }
}

export const getExpiringDocs = async (req, res) => {
    try{
         const docMessages = await DocMessage.find({ days_to_notify : { $lt: 30 } }).cache(1000);
         res.status(200).json(docMessages);
    }catch(error){
         res.status(404).json({message: error.message});
    }
 }

export const createDoc = async (req, res) => {
    const document = req.body;
    const newDocument = new DocMessage(document);
    console.log("created new doc") 
    try {
        await newDocument.save();
        res.status(201).json(newDocument);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateDoc = async (req, res) => {
    const { id } = req.params;
    const { title, description, expirationDate, selectedFile, notificationDate } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateDoc = { title, description, expirationDate, selectedFile, notificationDate , _id: id };

    await DocMessage.findByIdAndUpdate(id, updateDoc, { new: true }).cache(200);

    res.json(updateDoc);
}

export const deleteDoc = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doc with id: ${id}`);

    await DocMessage.findByIdAndRemove(id).cache(200);

    res.json({ message: "Docs deleted successfully." });
}