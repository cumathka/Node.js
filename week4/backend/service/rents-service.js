import * as rentsRepository from "./persistency/rent-repository.js";

export async function createRent(pRent) {
  return await rentsRepository.create(pRent);
}

export async function getAllRents() {
  return await rentsRepository.getAll;
}

export async function getRentById(pId) {
  let rent = await rentsRepository.findById(pId);
  return rent;
}
export async function updateRent(pId, pUpdateRent) {
  let rent = await rentsRepository.update(pId, pUpdateRent);
  return rent;
}

export async function deleteRents(pId) {
  return await rentsRepository.remove(pId);
}
