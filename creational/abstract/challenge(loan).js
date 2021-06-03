function HomeLoan(amount, duration) {
  this.amount = amount;
  this.interest = 0.08;
  this.duration = duration;
  this.calculateInterest = function () {
    return this.amount * this.interest * this.duration;
  };
}

function StudentLoan(amount, duration) {
  this.amount = amount;
  this.interest = 0.03;
  this.duration = duration;
  this.calculateInterest = function () {
    return this.amount * this.interest * this.duration;
  };
}

function PersonalLoan(amount, duration) {
  this.amount = amount;
  this.interest = 0.05;
  this.duration = duration;
  this.calculateInterest = function () {
    return this.amount * this.interest * this.duration;
  };
}

function Loans() {
  this.getloan = function (type, amount, duration) {
    let loan;
    switch (type) {
      case "home":
        loan = new HomeLoan(amount, duration);
        break;
      case "student":
        loan = new StudentLoan(amount, duration);
        break;
      case "personal":
        loan = new PersonalLoan(amount, duration);
        break;
      default:
        loan = null;
        break;
    }
    return loan;
  };
}

const loan = new Loans();

const homeLoan = loan.getloan("home", 3200, 5);
console.log(homeLoan.calculateInterest());

const studentLoan = loan.getloan("student", 1800, 4);
console.log(studentLoan.calculateInterest());

const personalLoan = loan.getloan("personal", 1200, 2);
console.log(personalLoan.calculateInterest());
