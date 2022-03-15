/** 
 * file: routes/index.js
 * description: file responsible for the api calling on back-end side 
 * date 16/03/2022 
 * author: eduardo.Flima  
 */

const express = require('express');

const router  = express.Router()

router.get('/api' ,(req,res)=>{
   res.status(200).send({
     success: 'true', 
     message: 'Welcome to api node.js + postgreeeSQL + azure ;=)',
     version: '1.0.0'
   });
});


module.exports = router;