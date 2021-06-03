//MODEL
class Model {
  constructor() {
    this.model = { name: "Stuart" };
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notifyObservers(attrName, newVal) {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i](attrName, newVal);
    }
  }
  getCurrentName(nameKey) {
    console.log(this.model[nameKey]);
    return this.model[nameKey];
  }

  setNameValue(nameKey, value) {
    this.model[nameKey] = value;
    this.notifyObservers(nameKey, value);
  }
}

//VIEWMODEL
class ViewModel {
  constructor(model) {
    this.bind = function (viewElement, modelElement) {
      viewElement.value = model.getCurrentName(modelElement);
      model.subscribe(function (attrName, newValue) {
        document.getElementsByName(attrName).forEach(function (elem) {
          elem.value = newValue.toUpperCase();
        });
      });
      viewElement.addEventListener("input", function () {
        model.setNameValue(viewElement.name, viewElement.value);
      });
    };
  }
}

//VIEW
const nameInput = document.getElementById("name");
const nameCopy = document.getElementById("nameCopy");
const model = new Model();
const viewModel = new ViewModel(model);
viewModel.bind(nameInput, "name");
viewModel.bind(nameCopy, "name");
