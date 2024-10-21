
//creating the employee class

class Employeee{
    EmployeeId:number;
    name:string;

    constructor(EmployeeId:number, name:string)
    {
        this.EmployeeId = EmployeeId;
        this.name =name;
    }

      displayEmployee() : void{
        console.log(`EmployeeId ${this.EmployeeId} , Name ${this.name}`);
    }
    
}

const EmployeeDetailss: Employeee[]=[];

//adding the employee in the array of element

EmployeeDetailss.push(new Employeee(1,"manoj"));
EmployeeDetailss.push(new Employeee(1,"janu"));


//Displaying the employee details from array

EmployeeDetailss.forEach(e => console.log(e));