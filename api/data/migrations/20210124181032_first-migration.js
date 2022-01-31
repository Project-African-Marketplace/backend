exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('username', 200).notNullable();
      users.string('password', 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable('Products', (products) => {
      products.increments('product_id');
      products.string('products', 255).notNullable();
    })
    .createTable('Category', (category) => {
      category.increments('category_id');
      category.string('category', 255).notNullable();
      category.integer('product_id')
        .unsigned()
        .notNullable()
        .references('product_id')
        .inTable('Products')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('Category')
    .dropTableIfExists('Products')
    .dropTableIfExists('users');
};