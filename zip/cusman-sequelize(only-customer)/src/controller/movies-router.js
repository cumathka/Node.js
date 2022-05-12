import express from 'express';
const router = express.Router();

import * as contractService from '../service/contract-service.js';


router.get("/", async (req, res)=>{
    const list = await contractService.getCustomers();
    res.status(200).send(list);
})

router.get("/:id", async (req, res)=>{
    const movie_id = req.params.id;
    const movie_properties = await contractService.getCustomer(movie_id);
    res.status(200).send(movie_properties);
})

router.post("/", async (req, res)=>{
    const movie_properties = req.body;
    const newCustomer = await contractService.createContract(movie_properties);
    res.status(201).send(newCustomer);
})

router.put("/:id", async (req, res)=>{
    const movie_id = req.params.id;
    const existingCustomer = req.body;
    const updatedCustomer = await contractService.updateContract(movie_id, existingCustomer);
    
    res.status(200).send(updatedCustomer);
})

router.delete("/:id", async (req, res)=>{
    const movie_id = req.params.id;
    await contractService.endContractWithCustomer(movie_id);
    res.status(200).send(null);
})


export {router};