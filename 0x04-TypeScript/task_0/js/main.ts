// Interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
  
// Create two student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  location: "New York",
};
  
const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 30,
  location: "London",
};
  
// Array of students
const studentsList: Student[] = [student1, student2];
  
// Render the table using Vanilla JavaScript
const table = document.createElement("table");
document.body.appendChild(table);
  
// Populate table with student data
studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});
