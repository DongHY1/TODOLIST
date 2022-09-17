const { Pool } = require('pg');
let pool;
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    user: 'root',
    password: 'root',
    host: 'postgrel',
  });
} else {
  pool = new Pool({
    user: 'masahiro',
    password: 'dhywj123',
    host: 'localhost',
    port: 5432,
    database: 'todolist',
  });
}
module.exports = pool;
