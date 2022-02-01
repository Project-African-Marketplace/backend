const db = require('../data/db-config')

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
        .insert(newProduct,['product_id','products','description','price','category_id'])
    return response 
}

module.exports = {
    addProduct
}