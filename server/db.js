const { Pool } = require('pg');
let pool;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  pool = new Pool({
    user: 'masahiro',
    password: 'dhywj123',
    host: 'localhost',
    port: 5432,
    database: 'todolist',
  });
} else {
  pool = new Pool({
    user: 'root',
    password: 'root',
    host: 'postgrel',
  });
}
module.exports = pool;
