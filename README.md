# TODOLIST CLIENT

+ pnpm install
+ pnpm run dev
+ http://127.0.0.1:5173/


# TODOLIST SERVER
+ pnpm install
+ create your own db.js like 
```
const Pool = require('pg').Pool
const pool = new Pool({
  user:"xxxx",
  password:"xxxxx",
  host:"localhost",
  port:5432,
  database:"xxxx"
})
module.exports = pool;
```
+ pnpm run dev

