/** 
 * file: server.js
 * description: file responsible for all the back-end('Employee) configuration and execution
 * date 16/03/2022
 * author: eduardo.Flima  
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port,() => {
  console.log('Running Application at port...:', port)
});
