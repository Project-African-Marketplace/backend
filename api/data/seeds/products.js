/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  knex('products').truncate()
  knex('category').truncate()

    
  await knex('category')
    .insert([
      { category: 'Animal Products'},
      { category: 'Beans'},
      { category: 'Cereals - Maize'},
      { category: 'Cereals - Other'},
      { category: 'Cereals - Rice'},
      { category: 'Fruits'},
      { category: 'Other'},
      { category: 'Peas'},
      { category: 'Roots & Tubers'},
      { category: 'Seeds & Nuts'},
      { category: 'Vegetables'},
     
    ])
  await knex('products')
    .insert([
      { products: 'Eggs' , category_id: 1},
      { products: 'Local Eggs' , category_id: 1},
    ])
};
