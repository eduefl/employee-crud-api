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

  //Usando Params 
  // => Rota responsavel por listar um colaborador por ID: (Get): localhost:3000/api/getempbyid/:id
  router.get('/getempbyid/:id',employeeController.getEmployeeById);

  //Usando Query params
  //  // => Rota responsavel por listar um colaborador por ID: (Get): localhost:3000/api/getempbyid/?id=
  //  router.get('/getempbyid/',employeeController.getEmployeeById);
  //Chekar explicacao : https://pt.linkedin.com/pulse/entendendo-par%C3%A2metros-em-requisi%C3%A7%C3%B5es-de-uma-vez-por-todas-henrique

  // => Rota responsavel por atualizar um determinado colaborador por ID: (PUT): localhost:3000/api/putempbyid/:id
  router.put ('/putempbyid/:id',employeeController.updEmployeebyId);

  // => Rota responsavel por excluir um determinado colaborador por ID: (DELETE): localhost:3000/api/delempbyid/:id
  router.delete ('/delempbyid/:id',employeeController.delEmployeebyId);

 module.exports = router;  