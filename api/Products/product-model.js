const db = require('../data/db-config');

function getCategory(){
  return db('category')
}

//select
// p.product_id, p.products,c.category
// from products as p
// join category as c
//   on p.category_id = c.category_id
// where p.category_id = 2;
// /GET endpoint category
// select *
// from category;

async function getProducts(id) {
  const response = await db('products as p')
    .join('category as c', 'p.category_id', 'c.category_id')
    .select('p.*', 'c.category')
    .where('p.category_id', id)
    .orderBy('p.product_id');
  return response;
}


async function addProduct(product){
    
  const {category_id} = await db('category as c')
  .where('category', product.category)
  .first()
  
  delete product.category;
  const newProduct = {
      ...product,
      category_id: category_id,
  } 
  
  const [response] = await db('products')
  .insert(newProduct,['product_id','product','description','price','category_id'])
  return response 
}

async function insertProduct(id,changes){
  await db('products as p')
    .where('product_id',id)
    .update(changes)

  return db('products as p')
    .where('product_id',id)
}


module.exports = {
  getProducts,
  addProduct,
  getCategory,
  insertProduct
};