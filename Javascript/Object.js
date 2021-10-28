//solution....
class Employee { //class
    //default constructor
    constructor(name, id, address) { //parameterized constructor
        //properties f class Employee
        this.name = name;
        this.id = id;
        this.address = address;
    }
}
const empone = new Employee("Subash Adhikari", 101, "Kalanki"); //object is created or instatiated
//accessing class properties
document.write("<pre>"); //it preserves the white spaces and new lines
document.writeln("Employee name: " + empone.name);

document.writeln("Employee id: " + empone.id);
document.writeln("Employee address: " + empone.address);

const emptwo = new Employee("Deshant", 102, "Balaju"); //one more object
//accessing class properties
document.writeln("Employee name: " + emptwo.name)
document.writeln("Employee id: " + emptwo.id);
document.writeln("Employee address: " + emptwo.address);

document.writeln("hello");
document.writeln("world");
document.write("</pre>");

