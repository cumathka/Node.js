import {Customer} from '../commons/sequelize.js';



export async function findAll(){
    return await Customer.findAll();
}

export async function findById(pId){
    return await Customer.findByPk(pId);
}

export async function add(pObj){
    await Customer.create(pObj);
}

export async function update(pId, pObj){

    return await Customer.update(pObj, {
        where: {id: pId}
      });
}

export async function remove(pId){
    return await Customer.destroy({
        where: {id: pId}
      });
}

export async function calculateOrderTotals(){
    return await db.query(`
        select 
            c.customerName,
            c.country,
            o.orderDate,
            o.orderNumber,
            o.status,
            od.priceEach,
            od.quantityOrdered,
            (od.priceEach * od.quantityOrdered) as total
        from 
            customers c
            join orders o on
                (c.customerNumber = o.customerNumber)
            join orderdetails od on
                (o.orderNumber = od.orderNumber)
        where 
            c.country = 'USA'
            and c.creditLimit > 40000
            and 
            (
            o.orderDate between '2003-01-01' and '2003-06-30'
                or
            o.orderDate between '2004-01-01' and '2004-06-30'	 
            )
        order by 
            o.orderDate
    `);
}



