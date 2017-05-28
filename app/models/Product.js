const AVAILABLE_COLORS = Object.freeze([
  'RED',
  'GREEN',
  'BLUE',
]);

class Product {
  static get AVAILABLE_COLORS() {
    return AVAILABLE_COLORS;
  }
  constructor({ name, color }) {
    this.name = name;
    this.color = color;
  }
  get isValid() {
    return AVAILABLE_COLORS.indexOf(this.color) !== -1
      && typeof this.name === 'string'
      && this.name.length >= 4 && this.name.length <= 8;
  }
  get asObject() {
    return !this.isValid ? null : {
      name: this.name,
      color: this.color,
    };
  }
}

export default Product;
