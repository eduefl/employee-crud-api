/** 
 * file: config/database.js
 * description: file responsible for the conection strings
 * date 17/03/2022 
 * author: eduardo.Flima  
 */

 const { Pool } = require('pg') 
 const dotenv = require('dotenv');

 dotenv.config();
 
 // pools will use environment variables
 // for connection information
 const pool = new Pool({
   connectionString: process.env.DATABASE_URL

 });
 pool.on('connect',()=>
 {
   console.log('Database successfully conected ')
 } );

 pool.on('error',(err,client)=>{
  console.log('Dunexpected error in the conection ',err)
  process.exit(-1);

 });
 
 module.exports = {
   query: (text, params) => pool.query(text,params),
 };
