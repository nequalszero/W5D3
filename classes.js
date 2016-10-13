function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courseList = [];
}

function Course(name, department, numCredits, days, timeBlock) {
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.days = days;
  this.timeBlock = timeBlock;
  this.enrolledStudents = [];
}

Course.prototype.students = function () {
  return this.enrolledStudents;
}

Course.prototype.addStudent = function (student) {
  student.enroll(this);
}

Course.prototype.conflictsWith = function(course2) {
  let that = this;
  function dayConflict () {
    that.days.forEach( (day) => {
      if (course2.days.includes(day)) {
        return true;
      }
    })
  }

  timeConflict = (course2.timeBlock === this.timeBlock);
  if (dayConflict() && timeConflict) {
    return true;
  } else {
    return false;
  }
}

Student.prototype.name = function () {
  return `${this.fname} ${this.lname}`;
}

Student.prototype.courses = function () {
  return this.courseList;
}

Student.prototype.enroll = function (course) {
  let that = this;
  let hasConflicts = function() {
    that.courseList.forEach( (enrolledCourse) =>{
      if (course.conflictsWith(enrolledCourse)) {
        throw "Course conflict!!!!!!!!!!!!!!!!!!!"
        return true;
      }
    })
  }
  if (!hasConflicts()) {
    this.courseList.push(course);
    course.enrolledStudents.push(this);
  }
}

Student.prototype.courseLoad = function () {
  let courseHash = {};
  this.courses().forEach( (course) => {
    if (Object.keys(courseHash).includes(course.department)) {
      courseHash[course.department] += course.numCredits;
    } else {
      courseHash[course.department] = course.numCredits;
    }
  })
  return courseHash;
}

const stud = new Student("lew","hitley");
const course = new Course("calc", "math", 4, ["mon", "wed", "fri"], 4);
const course1 = new Course("basic algebra", "math", 5, ["mon", "thu"], 4);
stud.enroll(course);
// console.log(stud.courseLoad());
// console.log(course.students());
stud.enroll(course1);
console.log(stud.courseLoad());
console.log(course1.students());
