// (1) Create a Single Objects
let person = {fname:"Jim",lname:"Smith"};
console.log(person1);

// (2) Create function to Create Classes
function person(fname, lname){
    let person = {fname,lname};

    person.show = function(){
        console.log("person.fname + "- " + person.lname")
    };
    person.__proto__=role;
    return person;
}

let person2 = person("Joe","Wilson");
person2.show();
console.log(person2);

let person3 = person("George","Washington");
person3.show();
console.log(person3);

// (3) Create function to Create Classes (Instantiate)
function Person(fname, lname){
    this.fname=fname;
    this.lname=lname;

    this.show = function(){
        console.log(this.fname + "- " + this.lname);
    };
    return;
}

let person4 = new Person("Abraham","Lincoln");
person4.show();
console.log(person4);


class User{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }

    show = function(){
        console.log(this.fname + "- " + this.lname);
    };
}

let user = new User("Taylor",'Swift');
user.show();
console.log(user);
