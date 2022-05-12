import {movie_properties} from '../commons/sequelize.js';



export async function findAll(){
    return await movie_properties.findAll();
}

export async function findById(pId){
    return await movie_properties.findByPk(pId);
}

export async function add(pObj){
    await movie_properties.create(pObj);
}

export async function update(pId, pObj){

    return await movie_properties.update(pObj, {
        where: {id: pId}
      });
}

export async function remove(pId){
    return await movie_properties.destroy({
        where: {id: pId}
      });
}

export async function calculateOrderTotals(){
    return await db.query(`
        select * from movie_properties
    `);
}



