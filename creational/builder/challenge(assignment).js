function Assignment() {
  this.make = function (builder) {
    builder.step1();
    builder.step2();
    builder.step3();
    builder.step4();
    return builder.get();
  };
}

function AssignmentBuilder(subject, level, dueDate) {
  this.assignment = null;
  this.step1 = function () {
    this.assignment = new Task();
  };

  this.step2 = function () {
    this.assignment.addSubject(subject);
  };

  this.step3 = function () {
    this.assignment.addLevel(level);
  };

  this.step4 = function () {
    this.assignment.addDuedate(dueDate);
  };

  this.get = function () {
    return this.assignment;
  };
}

function Task() {
  this.subject = null;
  this.level = null;
  this.dueDate = null;

  this.addSubject = function (subject) {
    this.subject = subject;
  };

  this.addLevel = function (level) {
    this.level = level;
  };

  this.addDuedate = function (dueDate) {
    this.dueDate = dueDate;
  };

  this.announcement = function () {
    console.log(
      `Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`
    );
  };
}

const assignment = new Assignment();
const assignmentBuilder = new AssignmentBuilder(
  "Math",
  "Hard",
  "12th June, 2020"
);
const mathAssignment = assignment.make(assignmentBuilder);
mathAssignment.announcement();
