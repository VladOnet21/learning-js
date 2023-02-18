const menu = {
  _meal: ' ',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      /**
       * removed return statement as it is not necessary here since the value
       * is already being assigned to the property.
       */
      this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      /**
       * removed return statement as it is not necessary here since the value
       * is already being assigned to the property.
       */
      this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    /**
     * changed from a function to a getter method, which allows
     * us to access the value of this method without calling it directly.
     */
    return this._meal && this._price ? `Today’s speciality is ${this._meal} for ${this._price} $` : 'Meal or price was not set correctly!';
  },
};
menu.meal = 'ciorba';
menu.price = 7;

console.log(menu.todaysSpecial);
