exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('username', 200).notNullable();
      users.string('password', 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable('category', (category) => {
      category.increments('category_id');
      category.string('category', 255).notNullable();
    })
    .createTable('products', (products) => {
      products.increments('product_id');
      products.string('product', 255).notNullable();
      products.string('description', 255);
      products.integer('price', 255).notNullable();
      products.integer('category_id')
              .unsigned()
              .notNullable()
              .references('category_id')
              .inTable('category')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
    })
};


exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('products')
  .dropTableIfExists('category')
  .dropTableIfExists('users')

}
