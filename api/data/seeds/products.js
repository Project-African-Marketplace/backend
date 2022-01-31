/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  knex('products').truncate()
  knex('category').truncate()

    
  await knex('products')
    .insert([
      { products: 'Eggs' },
    ])
  await knex('category')
    .insert([
      { category: 'Animal Products', product_id: 1}
    ])
};
