/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  knex('users').truncate();
  knex('products').truncate();
  knex('category').truncate();

  await knex('users')
    .insert([
      { username: "winnie", password: "1234", role_name: 'owner' }
    ])

  await knex('category')
    .insert([
      { category: 'Animal Products' },
      { category: 'Beans' },
      { category: 'Cereals - Maize' },
      { category: 'Cereals - Other' },
      { category: 'Cereals - Rice' },
      { category: 'Fruits' },
      { category: 'Other' },
      { category: 'Peas' },
      { category: 'Roots & Tubers' },
      { category: 'Seeds & Nuts' },
      { category: 'Vegetables' },
    ]);
  await knex('products')
    .insert([
      { product: 'Eggs', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Exotic Eggs', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Local Eggs', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Milk', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Nile Perch', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Processed Honey', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Tilapia', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Unprocessed Honey', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Beef', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Goat Meat', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Pork', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Exotic Chicken', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Local Chicken', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Turkey', category_id: 1, description: 'fresh', price: 5 },
      { product: 'Agwedde Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Beans (K132)', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Beans Canadian', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Beans Mwitemania', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Beans Rosecoco', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Black Beans (Dolichos)', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Dolichos (Njahi)', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Green Gram', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Kidney Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Mixed Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Mwezi Moja', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Nambale Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Old Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Red Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Soya Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'White Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Yellow Beans', category_id: 2, description: 'fresh', price: 5 },
      { product: 'Dry Maize', category_id: 3, description: 'fresh', price: 5 },
      { product: 'Green Maize', category_id: 3, description: 'fresh', price: 5 },
      { product: 'Maize', category_id: 3, description: 'fresh', price: 5 },
      { product: 'Maize Bran', category_id: 3, description: 'fresh', price: 5 },
      { product: 'Maize Flour', category_id: 3, description: 'fresh', price: 5 },
      { product: 'Barley', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Bulrush Millet', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Finger Millet', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Millet Flour', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Millet Grain', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Pearl Millet', category_id: 4, description: 'fresh', price: 5 },
      { product: 'White Millet', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Red Sorghum', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Sorghum', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Sorghum Flour', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Sorghum Grain', category_id: 4, description: 'fresh', price: 5 },
      { product: 'White Sorghum', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Wheat', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Wheat Bran', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Wheat Flour', category_id: 4, description: 'fresh', price: 5 },
      { product: 'Imported Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Kahama Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Kayiso Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Kilombero Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Mbeya Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Morogoro Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Paddy Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Rice Bran', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Super Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Unprocessed/Husked Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Upland Rice', category_id: 5, description: 'fresh', price: 5 },
      { product: 'Avocado', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Apple Bananas', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Cavendish (Bogoya)', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Cooking Bananas', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Ripe Bananas', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Passion Fruits', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Lemons', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Limes', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Mangoes Local', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Mangoes Ngowe', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Oranges', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Pawpaw', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Pineapples', category_id: 6, description: 'fresh', price: 5 },
      { product: 'Coffee (Arabica)', category_id: 7, description: 'fresh', price: 5 },
      { product: 'Coffee (Robusta)', category_id: 7, description: 'fresh', price: 5 },
      { product: 'Unprocessed Cotton', category_id: 7, description: 'fresh', price: 5 },
      { product: 'Unprocessed Tea', category_id: 7, description: 'fresh', price: 5 },
      { product: 'Tobacco', category_id: 7, description: 'fresh', price: 5 },
      { product: 'Unprocessed Vanilla', category_id: 7, description: 'fresh', price: 5 },
      { product: 'Chic Pea', category_id: 8, description: 'fresh', price: 5 },
      { product: 'Cowpeas', category_id: 8, description: 'fresh', price: 5 },
      { product: 'Dry Peas', category_id: 8, description: 'fresh', price: 5 },
      { product: 'Fresh Peas', category_id: 8, description: 'fresh', price: 5 },
      { product: 'Green Peas', category_id: 8, description: 'fresh', price: 5 },
      { product: 'Peas', category_id: 8, description: 'fresh', price: 5 },
      { product: 'Pigeon Peas', category_id: 8, description: 'fresh', price: 5 },
      { product: 'Cassava Chips', category_id: 9, description: 'fresh', price: 5 },
      { product: 'Cassava Flour', category_id: 9, description: 'fresh', price: 5 },
      { product: 'Cassava Fresh', category_id: 9, description: 'fresh', price: 5 },
      { product: 'Dry Fermented Cassava', category_id: 9, description: 'fresh', price: 5 },
      { product: 'Sun Dried Cassava', category_id: 9, description: 'fresh', price: 5 },
      { product: 'Red Irish Potatoes', category_id: 9, description: 'fresh', price: 5 },
      { product: 'Round Potatoes', category_id: 9, description: 'fresh', price: 5 },
      { product: 'Sweet Potatoes', category_id: 9, description: 'fresh', price: 5 },
      { product: 'White Fleshes Sweet Potatoes', category_id: 9, description: 'fresh', price: 5 },
      { product: 'White Irish Potatoes', category_id: 9, description: 'fresh', price: 5 },
      { product: 'Ground Nuts', category_id: 10, description: 'fresh', price: 5 },
      { product: 'Groundnuts', category_id: 10, description: 'fresh', price: 5 },
      { product: 'Simsim', category_id: 10, description: 'fresh', price: 5 },
      { product: 'Sunflower Seed', category_id: 10, description: 'fresh', price: 5 },
      { product: 'Sunflower Seed Cake', category_id: 10, description: 'fresh', price: 5 },
      { product: 'Brinjal/Eggplant', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Cabbages', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Capsicums', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Carrots', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Cauliflower', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Chillies', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Cucumber', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Ginger', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Kales', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Lettuce', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Onions Dry', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Spring Onions', category_id: 11, description: 'fresh', price: 5 },
      { product: 'Tomatoes', category_id: 11, description: 'fresh', price: 5 },
    ]);
};
