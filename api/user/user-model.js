const db = require("../data/db-config")

function getAllUsers() { return db('users') }

async function insertUser(user) {
    // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
    // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
    const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'role_name', 'password'])
    return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

function getUserBy(filter) {
    return db('users').where(filter).first()
}


db('product').join()
module.exports = {
    getAllUsers,
    insertUser,
    getUserBy,
}