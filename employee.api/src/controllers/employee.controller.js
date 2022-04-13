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



//=>method responsible for to list all the employees: 
exports.listAllEmployees = async(req,res) =>{
  const response = await db.query('select * from employee order by salary DESC') ;  
  res.status(200).send(response.rows);
}



//=>method responsible for to list some employee searching by ID: 
exports.getEmployeeById = async(req,res) =>{
    //Usando Params 
  const employeeId = req.params.id
  //Usando Query params
//  const employeeId = req.query.id
  const response = await db.query('select * from employee where employee_id = $1',[employeeId]) ;  
  res.status(200).send(response.rows);
}

//=>method responsible for update some employee searching by ID: 
exports.updEmployeebyId = async(req,res) =>{
  const employeeId = req.params.id
  const { name, job_role, salary, birth, employee_registration} = req.body;
  const response = await db.query(
    `update employee set
      name = $1,
      job_role = $2,
      salary = $3,
      birth = $4,
      employee_registration = $5
     where employee_id = $6`,
     [name, job_role, salary, birth, employee_registration,employeeId]) ;  

     res.status(200).send({message:'EMployee updated sucessufuly',      body:{
      employee:{name, job_role, salary, birth, employee_registration}
    },
})

}

//=>method responsible for delete some employee searching by ID: 

exports.delEmployeebyId = async(req,res) =>{
  const employeeId = req.params.id
  await db.query('delete from employee where employee_id = $1',[employeeId]) ;  
  res.status(200).send({message: 'Employee FIRED successfully!' });

}