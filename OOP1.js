//class =Data+Function
//class=Characteristics + Behaviours
var Student = /** @class */ (function () {
    //Behaviours
    function Student(N, M, A, C) {
        console.log("Inside constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log("Name of student :" + this.Name);
        console.log("Name of student :" + this.Marks);
        console.log("Name of student :" + this.Age);
        console.log("Name of student :" + this.City);
    };
    return Student;
}());
var Obj352 = new Student("Komal", 98, 21, "Ahamednagar");
var Obj482 = new Student("Kiti", 90, 28, "Pune");
Obj352.Display();
Obj482.Display();
