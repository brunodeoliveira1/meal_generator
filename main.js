const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains (main) {
    this._courses.mains = main;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    this._courses.desserts = dessert;
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const price = appetizer.price + main.price + dessert.price;
    return `In the menu today, we have: ${appetizer.name} for appetizer, ${main.name} as main, and we will finish with ${dessert.name} as a desser. The total price is EUR ${price}.`;
  },
};

menu.addDishToCourse ('appetizers', 'salad', 4.00);
menu.addDishToCourse ('mains', 'Spiritual Codfish', 20.00);
menu.addDishToCourse ('desserts', 'Pastel de Nata', 3.00);

menu.addDishToCourse ('appetizers', 'fries', 3.00);
menu.addDishToCourse ('mains', 'Just Codfish', 18.00);
menu.addDishToCourse ('desserts', 'Ice Cream', 8.00);

menu.addDishToCourse ('appetizers', 'codfish pastries', 3.50);
menu.addDishToCourse ('mains', 'Lamb with potatoes', 17.00);
menu.addDishToCourse ('desserts', 'Cheesecake', 5.00);

const meal = menu.generateRandomMeal();
console.log(meal);