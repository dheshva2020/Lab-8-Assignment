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
//part 5 JSON string to object conversion
const parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent);
//part 6 function to update student major
function updateStudentMajor(student, newMajor) {
    student.major = newMajor;
}
//part 7 invoking the update function
updateStudentMajor(student, "Mathematics");
displayStudentInfo(student);
//part 8 array of student objects creation
const students = [
    { name: "Alice Smith", age: 22, major: "Biology" },
    { name: "Bob Johnson", age: 21, major: "History" },
    { name: "Charlie Brown", age: 23, major: "Physics" }
];
//part 9 function to display all students info
function displayAllStudentsInfo(students) {
    students.forEach(student => {
        displayStudentInfo(student);
        console.log('---');
    }
    );
}
//part 10 invoking the function to display all students
displayAllStudentsInfo(students);
//part 11 function to add a new student
function addStudent(students, newStudent) {
    students.push(newStudent);
}
