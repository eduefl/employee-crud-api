/** 
 * file: config/database.js
 * description: file responsible for the conection strings
 * date 17/03/2022 
 * author: eduardo.Flima  
 */

 const { Pool } = require('pg') 
 const dotenv = require('dotenv ');
const { text } = require('express');
 
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
   query: (text, params) => pool.query(text,params)
 }

//  pool.query('SELECT NOW()', (err, res) => {
//    console.log(err, res)
//    pool.end()
//  })
//  // you can also use async/await
//  const res = await pool.query('SELECT NOW()')
//  await pool.end()
//  // clients will also use environment variables
//  // for connection information
//  const client = new Client()
//  await client.connect()
//  const res = await client.query('SELECT NOW()')
//  await client.end()