const { Pool } = require('pg');
console.log(process.env.NODE_ENV);
// if you use pnpm run dev
// const pool = new Pool({
//   user: 'masahiro',
//   password: 'dhywj123',
//   host: 'localhost',
//   port: 5432,
//   database: 'todolist',
// });
const pool = new Pool({
  user: 'root',
  password: 'root',
  host: 'postgres',
});
module.exports = pool;
