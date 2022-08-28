export class Car {
    #brand = null;
    #model = null;
    #yearOfManufacturing = null;
    #maxSpeed = null;
    #maxFuelVolume = null;
    #fuelConsumption = null;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;
  
    set brand(value) {
      if (value && value.length <= 50) {
        this.#brand = value;
      } else {
        throw new Error('Недопустимый диапазон значений');
      }
    }
  
    get brand() {
      return this.#brand;
    }
  
    set model(value) {
      if (value && value.length <= 50) {
        this.#model = value;
      } else {
        throw new Error('Недопустимый диапазон значений');
      }
    }
  
    get model() {
      return this.#model;
    }
  
    set yearOfManufacturing(value) {
      const currentYear = new Date().getFullYear();
  
      if (1900 <= value <= currentYear) {
        this.#yearOfManufacturing = value;
      } else {
        throw new Error('Недопустимый диапазон значений');
      }
    }
  
    get yearOfManufacturing() {
      return this.#yearOfManufacturing;
    }
  
    set maxSpeed(value) {
      if (100 <= value && value < 300) {
        this.#maxSpeed = value;
      } else {
        throw new Error('Недопустимый диапазон значений');
      }
    }
  
    get maxSpeed() {
      return `${this.#maxSpeed} km/h`;
    }
  
    set maxFuelVolume(value) {
      if (5 <= value && value <= 20) {
        this.#maxFuelVolume = value;
      } else {
        throw new Error('Недопустимый диапазон значений');
      }
    }
  
    get maxFuelVolume() {
      return `${this.#maxFuelVolume} l`;
    }
  
    set fuelConsumption(value) {
      this.#fuelConsumption = (value / 100) * 100;
    }
  
    get fuelConsumption() {
      return `${this.#fuelConsumption} l/100km`;
    }
  
    get currentFuelVolume() {
      return `${this.#currentFuelVolume} l`;
    }
  
    get isStarted() {
      return this.#isStarted;
    }
  
    get mileage() {
      return `${this.#mileage} km`;
    }
  
    start() {
      if (this.#isStarted) {
        throw new Error('Машина уже заведена');
      } else {
        return (this.#isStarted = true);
      }
    }
  
    shutDownEngine() {
      if (!this.#isStarted) {
        throw new Error('Машина ещё не заведена');
      } else {
        return (this.#isStarted = false);
      }
    }
  
    fillUpGasTank(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Неверное количество топлива для заправки');
      } else {
        this.#currentFuelVolume += amount;
  
        if (this.#maxFuelVolume < this.#currentFuelVolume) {
          throw new Error('Топливный бак переполнен');
        }
  
        return this.#currentFuelVolume;
      }
    }
  
    drive(speed, amountOfHours) {
      if (typeof speed !== 'number' || speed <= 0) {
        throw new Error('Неверная скорость');
      } else if (typeof amountOfHours !== 'number' || amountOfHours <= 0) {
        throw new Error('Неверное количество часов');
      } else if (speed > this.#maxSpeed) {
        throw new Error( 'Машина не может ехать так быстро');
      } else if (this.#isStarted === false) {
        throw new Error( 'Машина должна быть заведена, чтобы ехать');
      } else if ((speed * amountOfHours) / this.#fuelConsumption > this.#currentFuelVolume) {
        throw new Error('Недостаточно топлива');
      }
  
      this.#currentFuelVolume -= (speed * amountOfHours) / this.#fuelConsumption;
      
      this.#mileage += speed * amountOfHours;
    }
  }