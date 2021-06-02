let instance = null;
class Printer {
  constructor(pages) {
    this.display = function () {
      console.log(
        `You are connected to the printer. You want to print ${pages} pages.`
      );
    };
  }

  static getInstance(numOfpages) {
    if (!instance) {
      instance = new Printer(numOfpages);
    }
    return instance;
  }
}

const obj1 = Printer.getInstance(2);
console.log(obj1);
obj1.display();
const obj2 = Printer.getInstance(3);
console.log(obj2);
obj2.display();
console.log(obj2 === obj1);
