import { Employeedetail } from "./Employee";



var EmployeeInfo:Employeedetail[]=[];

//creating emplouyee
EmployeeInfo.push(new Employeedetail("manoj","cse",30000));
EmployeeInfo.push(new Employeedetail("janu","it",29000));
EmployeeInfo.push(new Employeedetail("srinidhi","cse",30000));
EmployeeInfo.push(new Employeedetail("janani","it",29000));
EmployeeInfo.push(new Employeedetail("rahul","cse",30000));
EmployeeInfo.push(new Employeedetail("deepika","it",29000));
EmployeeInfo.push(new Employeedetail("diwaker","cse",30000));
EmployeeInfo.push(new Employeedetail("jeevitha","it",29000));


//fetching the employee based on department

EmployeeInfo.filter(e=>e.department==="it").forEach(e => console.log(e));

var totalSalary=0;
totalSalary=EmployeeInfo.reduce((sum,e)=> sum+e.salary,0);

console.log(`Total Salary is ${totalSalary}`);