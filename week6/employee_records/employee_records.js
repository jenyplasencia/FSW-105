
function Employee(name, jobtitle, salary){
    this.name = name
    this.jobtitle = jobtitle
    this.salary = salary
    this.status = "full time"
 
    Employee.prototype.printEmployeeForm = function(){
        console.log("Name:" + " " + this.name)
        console.log("Job Title:" + " " + this.jobtitle )
        console.log("Salry:"  + " " +  this.salary)
        console.log("Status:"+ " " + this.status )
        console.log("*****************************")}  
      
}
Employee.prototype.status = "full Time";




 var employeeOne = new Employee( "Bob", "V School Instructor", "$3000/hour");
 employeeOne.status = "contractor";
 employeeOne.printEmployeeForm();
 
 var employeeTwo = new Employee( "Cindy", "Principal", "4000/hour");
 employeeTwo.printEmployeeForm()
 
 var employeeThree = new Employee( "Parker", "Manager", "$2500/hour");
 employeeThree.printEmployeeForm()
 
 let employees = [];  
 
    employees.push(employeeOne.name + "," + employeeOne.jobtitle + "," + employeeOne.salary + "," + employeeOne.status).value;
    employees.push(employeeTwo.name + "," + employeeTwo.jobtitle + "," + employeeTwo.salary + "," + employeeTwo.status).value;
    employees.push(employeeThree.name + "," + employeeThree.jobtitle + "," + employeeThree.salary + "," + employeeThree.status).value;
    
    console.log(employees)



