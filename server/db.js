const { Pool } = require('pg');
const pool = new Pool({
  user: 'root',
  password: 'root',
  host: 'postgres',
});
module.exports = pool;
