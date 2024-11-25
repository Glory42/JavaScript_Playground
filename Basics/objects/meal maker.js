const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if(typeof mealToCheck ==='string') {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if(typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if(this._meal === '' || this._price === 0) {
        return 'Meal or price was not set correctly!';
      }
      else {
        return `Today's Special is ${this._meal} for ${this._price}`;
      }
    }
  };
  
  menu._meal = '3 çeyrek döner';
  menu.price = 5;
  console.log(menu);
  console.log(menu.todaysSpecial);
  
  