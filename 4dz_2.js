class Calculator {
  constructor(x, y) {
    if (!x || !Number.isInteger(x) || !y || !Number.isInteger(y) || !isFinite(x) || !isFinite(y) || arguments.length != 2) {
      throw new Error("Values are empty or not a number. Enter valid values");
    }

    this.x = x;
    this.y = y;
  }

  setX(valueX) {
    if (!valueX || !Number.isInteger(valueX) || !isFinite(valueX)) {
      throw new Error("Value X is empty or not a number. Enter valid number X");
    }

    this.x = valueX;
  }

  setY(valueY) {
    if (!valueY || !Number.isInteger(valueY) || !isFinite(valueY)) {
      throw new Error("Value Y is empty or not a number. Enter valid number Y");
    }

    this.y = valueY;
  }

  logSum(x = this.x, y = this.y) {
    if (!isFinite(x) || !isFinite(y)) {
      throw new Error("Enter valid numbers");
    }

    return x + y;
  }

  logMul(x = this.x, y = this.y) {
    if (!isFinite(x) || !isFinite(y)) {
      throw new Error("Enter valid numbers");
    }

    return x * y;
  }

  logSub(x = this.x, y = this.y) {
    if (!isFinite(x) || !isFinite(y)) {
      throw new Error("Enter valid numbers");
    }

    return x - y;
  }

  logDiv(x = this.x, y = this.y) {
    if (!isFinite(x) || !isFinite(y) || !y) {
      throw new Error("Second number is null or not finite! Enter valid number Y");
    }

    return x / y;
  }
}
