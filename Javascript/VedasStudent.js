class Student {
    students =[]; //empty array
    constructor(id, name , address, email){  // constructor of a class student
        this.id = id;
        this.name = name;
        this.address =address;
        this.email = email;
    }
    addStudent(){ //method of a class student
        const id = prompt("Enter ID:");
        const name =promt("Enter Name:");
        const address = prompt("Enter Address:");
        const email = prompt("Enter Email:");
        const student = new student(id, name , address, email);
        this.student.push(student); //student object added in array

    }

    displayInfo(){
        document.write("<h3>Students</h3>");
        const list = document.createElement("ul");//creates ul tag element
        for(const student of this.students){
            list.innerHTML+= `<li><b>ID: </b>${student.id}</li>`;
            list.innerHTML+= `<li><b>Student: </b>${student.name}</li>`;
            list.innerHTML+= `<li><b>Address: </b>${student.address}</li><br>`;
            list.innerHTML+= `<li><b>Email: </b>${student.email}</li><br>`;


        }
        document.body.appendChild(list); //it adds ul to body
    }
}

const stobj = new Student(111,"Subash","Dhapakhel","Subbu@gmail.com");
document.write("<ul>");
document.write("<li>");
stobj.addStudent();
stobj.displayInfo();
