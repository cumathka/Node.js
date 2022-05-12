import db from './sequelize-setup.js'

export async function getAll(){
    return await db.movies.findALL();
}

export async function findById(pid){
    return await db.movies.findById(pid);
}

export async function create (pMovie){
    return await db.movies.create (pMovie);
}

export async function remove (pId){
    return await db.movies.destroy (pId)({
        where :{ id: pId}
    })
}

export async function update (pId){
    return await db.movies.update(pId,pUpdatedMovie) ({
        where :{ id: pId}
        }
    )
}