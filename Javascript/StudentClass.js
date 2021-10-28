//WAP which contains the information of three students
//attributes or properties are 
//stname,stroll,stcollege,stcontact, stemail.
//Display the information by using the concept of class, object and constructor


class Student{ //class
    //default constructor
    constructor(stname, stroll,stcollege,stcontact,stemail) { //parameterized constructor
        //properties f class Employee
        this.stname = stname;
        this.stroll= stroll;
        this.stcollege = stcollege;
        this.stcontact = stcontact;
        this.stemail = stemail;
    }
}
const Stuone = new Student("Subash Adhikari", 1, "Vedas",98789478332,"subash@gmail.com"); //object is created or instatiated
//accessing class properties
document.write("<pre>"); //it preserves the white spaces and new lines
document.writeln("Employee stname: " + Stuone.stname);

document.writeln("Employee stroll: " + Stuone.stroll);
document.writeln("Employee stcollege: " + Stuone.stcollege);
document.writeln("Employee stcontact: " + Stuone.stcontact);
document.writeln("Employee stemail: " + Stuone.stemail);



const Stutwo = new Student("Sujan", 2, "Aberdeen",93738927389,"rajesh@hmail.com");
document.writeln("Employee stroll: " + Stutwo.stroll);
document.writeln("Employee stcollege: " +Stutwo.stcollege);
document.writeln("Employee stcontact: " + Stutwo.stcontact);
document.writeln("Employee stemail: " + Stutwo.stemail);



const Stuthree= new Student("Raju", 3, "Prasants college",73836737566,"raju@gmail.com");
document.writeln("Employee stname: " + Stuthree.stname);

document.writeln("Employee stroll: " + Stuthree.stroll);
document.writeln("Employee stcollege: " + Stuthree.stcollege);
document.writeln("Employee stcontact: " +Stuthree.stcontact);
document.writeln("Employee stemail: " + Stuthree.stemail);




document.writeln("hello");
document.writeln("world");

document.write("</pre>");
