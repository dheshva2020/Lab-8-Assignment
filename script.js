//part 1 student object creation
const student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science"
};
//part 2 function to display student info
function displayStudentInfo(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Major: ${student.major}`);
}
//part 3 invoking the function
displayStudentInfo(student);
//part 4 object to JSON string creation
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
