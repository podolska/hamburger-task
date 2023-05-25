export default class Hamburger {
    constructor() {
        this._size = { title: 'small', price: 50, calories: 20 };
        this._additive = [];
    };

    get size() {
        return this._size;
    };

    set size(a) {
        this._size = a;
    };

    get filling() {
        return this._filling;
    };

    set filling(a) {
        this._filling = a;
    };

    get additive() {
        return this._additive;
    };

    set additive(arr) {
        this._additive = arr;
    };

    getCalories() {
        const { calories: sizeCalories } = this.size;
        const fillCalories = this.filling ? this.filling.calories : 0;
        let addCalories = 0;
        if (this.additive.length !== 0) {
            addCalories = this.additive.reduce((acc, el) => acc += el.calories, 0);
        };
        return sizeCalories + fillCalories + addCalories;
    };

    getPrice() {
        const { price: sizePrice } = this.size;
        const fillPrice = this.filling ? this.filling.price : 0;
        let addPrice = 0;
        if (this.additive) {
            addPrice = this.additive.reduce((acc, el) => acc += el.price, 0);
        };
        return sizePrice + fillPrice + addPrice;
    };
};
