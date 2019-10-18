const knexConfig = require('../../knexfile');
const knex = require('knex');
const db = knex(knexConfig.development)

function add(student) {
    return db('students')
    .insert(student);
}

function find() {
    return db('students');
}

function remove(id) {
    return db('students')
    .delete()
    .where({ id })
}

module.exports = {
    find,
    add,
    remove,
}