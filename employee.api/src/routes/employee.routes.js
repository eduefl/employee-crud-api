/** 
 * file: routes/employee.routes.js
 * description: file responsible for the routers of the API
 * date 17/03/2022 
 * author: eduardo.Flima  
 */

 const router = require('express-promise-router')();
 const employeeController = require('../controllers/employee.controller');
  
 
 // => Definindo as rotas do CRUD = 'employee'
 
 // => Rota responsavel por criar um novo 'Colaborador': (POST): localhost:3000/api/employees 
 router.post('/employees',employeeController.createEmployee);
 
 // => Rota responsavel por listar todos os colaboradores: (Get): localhost:3000/api/listallemployees
 router.get('/listallemployees',employeeController.listAllEmployees);
 
 module.exports = router;  