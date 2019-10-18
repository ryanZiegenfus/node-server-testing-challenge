
exports.up = function(knex) {
    return knex.schema.createTable('students', tbl => {
        tbl.increments()
        tbl.string("first_name", 128)
        tbl.string("class", 128)
      })

      .createTable('teachers', tbl => {
        tbl.increments()
        tbl.string("first_name", 128)
        tbl.string("class", 128)
      })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('student')
    .dropTableIfExists('students')
    .dropTableIfExists('teachers')

};
