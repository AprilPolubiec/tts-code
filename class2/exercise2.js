var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: ['Assaf', 'Shane'],
  students: [
    {
      name: 'Steve',
      computer: {
        OS: 'Linux',
        type: 'laptop'
      }
    },
    {
      name: 'Katy',
      computer: {
        OS: 'OSX',
        type: 'macbook'
      }
    },
    {
      name: 'Chuck',
      computer: {
        OS: 'OSX',
        type: 'macbook'
      }
    }
  ],
  preReqs: {
    skills: ['html', 'css', 'git'],
    equipment: {
      laptop: true,
      OSOptions: ['linux', 'osx']
    }
  }
}

var course_name = course.name
var second_teacher = course.teachers[1]
var first_student = course.students[0].name
var katys_computer = course.students[1].computer.type
var prereq_equipment = course.preReqs.equipment
var second_os_option = prereq_equipment.OSOptions[1]
var os_options = prereq_equipment.OSOptions.join(' or ')
var osx_students = []
course.students.forEach(function(student, index) {
  if (student.computer.OS === 'OSX') {
    osx_students.push(student)
  }
})

console.log(osx_students)
