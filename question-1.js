function findStudentById(students, id) {
  // Your code here
  //   let result = students.filter((student) => {
  //     return student.id === id;
  //   });

  //   return result[0];
  for (let student of students) {
    // console.log(student);
    if (student.id === id) {
      return student;
    }
  }
  return null;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
