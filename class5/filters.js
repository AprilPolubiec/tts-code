var students = [
  {name: 'John Lennon', average: 90},
  {name: 'Ringo Starr', average: 58},
  {name: 'Paul McCartney', average: 32}
]

var passingStudents = students.filter(function(student){
  return student.average > 50
})

console.log(passingStudents)