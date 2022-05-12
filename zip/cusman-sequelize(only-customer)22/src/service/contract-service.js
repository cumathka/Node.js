import { Customer } from '../commons/sequelize.js';
import * as customerRepository from '../data/customer-repository.js'
import * as websiteRepository from '../data/website-repository.js'

export async function getCustomers(){
    return await customerRepository.findAll();
}

export async function getCustomer(customerId){

    // get omer from database
    // if I can pay for him
    // retrieve his childs
    // fid out his expnsnes
    // calcularte his net salary
    // call bank API to pay it eefectively
    // create a record in bank traction table for omer
    // create e pdf (salary)
    // send pdf by email
    return await customerRepository.findById(customerId); // repository pattern
}

export async function createContract(customer){
    return await customerRepository.add(customer);
}

export async function updateContract(customerId, existingCustomer){
    return await customerRepository.update(customerId, existingCustomer);
}

export async function endContractWithCustomer(customerId){
    return await customerRepository.remove(customerId);
}

export async function getWebsites(){
    return await websiteRepository.findAll();
}

export async function getWebsite(websiteId){
    return await websiteRepository.findById(websiteId);
}

export async function addNewWebsiteToCustomer(website){
    return await websiteRepository.add(website);
}

export async function updateWebsite(websiteId, existingWebsite){
    return await websiteRepository.update(websiteId, existingWebsite);
}
    
export async function deleteWebsiteFromContract(websiteId){
    return await websiteRepository.remove(websiteId);
}