let person1 = '{"name":"Ivanov", "age": 130}'; // JSON
let person2 = "Manual for lamers"; //Not JSON
let person=person2;
try {
    var user = JSON.parse(person);
    console.log(user.name);
    console.log(user.age);
}
catch (e) {
    console.log(e.name+":"+e.message);
}
finally {
    console.log("Went to the next step...")
}