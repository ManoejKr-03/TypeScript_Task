"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var EmployeeInfo = [];
//creating emplouyee
EmployeeInfo.push(new Employee_1.Employeedetail("manoj", "cse", 30000));
EmployeeInfo.push(new Employee_1.Employeedetail("janu", "it", 29000));
EmployeeInfo.push(new Employee_1.Employeedetail("srinidhi", "cse", 30000));
EmployeeInfo.push(new Employee_1.Employeedetail("janani", "it", 29000));
EmployeeInfo.push(new Employee_1.Employeedetail("rahul", "cse", 30000));
EmployeeInfo.push(new Employee_1.Employeedetail("deepika", "it", 29000));
EmployeeInfo.push(new Employee_1.Employeedetail("diwaker", "cse", 30000));
EmployeeInfo.push(new Employee_1.Employeedetail("jeevitha", "it", 29000));
//fetching the employee based on department
EmployeeInfo.filter(function (e) { return e.department === "it"; }).forEach(function (e) { return console.log(e); });
var totalSalary = 0;
totalSalary = EmployeeInfo.reduce(function (sum, e) { return sum + e.salary; }, 0);
console.log("Total Salary is ".concat(totalSalary));
