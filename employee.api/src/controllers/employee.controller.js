/** 
 * file: controllers/employee.controller.js
 * description: file responsible for the LOGIC  of the entyties employee
 * date 17/03/2022 
 * author: eduardo.Flima  
 */

const db  = require('../config/database');


//=>method responsible for to create a new employee

exports.createEmployee  = async(req,res) =>{
  const { name, job_role, salary, birth, employee_registration} = req.body;
  const{rows} = await db.query(
    "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
     [name, job_role, salary, birth, employee_registration] 
  );
    res.status(201).send({
      message: 'Employee added successfully!',
      body:{
        employee:{name, job_role, salary, birth, employee_registration}
      },
    });
};



//=>method responsible for to list all the empoyees: 
exports.listAllEmployees = async(req,res) =>{
  const response = await db.query('select * from employee order by salary DESC') ;  
  res.status(200).send(response.rows);
}
