const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

const marks = student.marks;
const math = student.marks.math;
const chemistry = student['marks']['chemistry'];

const subject = 'physics';

const subjectMarks1 = student.marks.subject;     // not work as subject is a variable, returns undefined.
const subjectMarks2 = student.marks[subject]; // work

console.log(subjectMarks1);
console.log(subjectMarks2);