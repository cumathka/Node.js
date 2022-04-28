import express from "express";
const router = express.Router();
import * as SERVICE from "../services/rentService.js";
router
    .delete("/:id", (req, res) => {
    let movieId = req.params.id;
    SERVICE.deleteRent(movieId);
    res.status(200).send(`${movieId} has been deleted`);
})
    .get("/", (req, res) => {
    const rents = SERVICE.getRents();
    res.json(rents);
})
    .get("/:id", (req, res) => {
    const rentId = req.params.id;
    const person = SERVICE.getRentByID(rentId);
    // console.log(person)
    res.json(person);
})
    .put("/:id", (req, res) => {
    const rentId = req.params.id;
    let updatedRent = req.body;
    const editRent = SERVICE.editRent(rentId, updatedRent);
    // console.log(editRent)
    return res.send(editRent);
})
    .post("/", (req, res) => {
    let newRent = req.body;
    const rent = SERVICE.postRent(newRent);
    res.status(200).send(rent);
});
export default router;
