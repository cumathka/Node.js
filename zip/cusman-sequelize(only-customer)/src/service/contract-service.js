import { movie_properties } from '../commons/sequelize.js';
import * as moviesRepository from '../data/movies-repository.js'


export async function getCustomers(){
    return await moviesRepository.findAll();
}

export async function getCustomer(movie_id){

    // get omer from database
    // if I can pay for him
    // retrieve his childs
    // fid out his expnsnes
    // calcularte his net salary
    // call bank API to pay it eefectively
    // create a record in bank traction table for omer
    // create e pdf (salary)
    // send pdf by email
    return await moviesRepository.findById(movie_id); // repository pattern
}

export async function createContract(movie_properties){
    return await moviesRepository.add(movie_properties);
}

export async function updateContract(movie_id, existingCustomer){
    return await moviesRepository.update(movie_id, existingCustomer);
}

export async function endContractWithCustomer(movie_id){
    return await moviesRepository.remove(movie_id);
}

