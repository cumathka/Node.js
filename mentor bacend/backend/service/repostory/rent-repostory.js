import db from "../models/sequelize.setup";


export async function getAll() { return await db.rents.findAll(); } 

export async function findById(pId) { return await db.rents.findById(pId); }

export async function create(pRent) { return await db.rents.create(pRent); }

export async function remove(pId) { return await db.rents.destroy({ where: { id: pId } }) } 

export async function update(pId, pUpdatedRent) { return await db.rents.update(pUpdatedRent, { where: { id: pId } }) } 

