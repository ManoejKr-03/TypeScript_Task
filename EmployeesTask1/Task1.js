//creating the employee class
var Employee = /** @class */ (function () {
    function Employee(EmployeeId, name) {
        this.EmployeeId = EmployeeId;
        this.name = name;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("EmployeeId ".concat(this.EmployeeId, " , Name ").concat(this.name));
    };
    return Employee;
}());
var EmployeeDetails = [];
//adding the employee in the array of element
EmployeeDetails.push(new Employee(1, "manoj"));
EmployeeDetails.push(new Employee(1, "janu"));
//Displaying the employee details from array
EmployeeDetails.forEach(function (e) { return console.log(e); });
