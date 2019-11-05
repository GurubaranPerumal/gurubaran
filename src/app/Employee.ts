export class Employee {
    employeeId:number;
    firstName:string;
    lastName:string;
    employeeMobile:number;
    emailId:string;
    employeePassword:string;
    confirmPassword:string;

    constructor(){
        this.employeeId= 0;
        this.firstName = "";
        this.lastName = "";
        this.employeeMobile = 0;
        this.emailId ="";
        this.employeePassword ="";
        this.confirmPassword="";
    }
}
