"use strict";

// Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене.
// Объект, с которым вам предстоит работать
const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://d27nqrvkk22y65.cloudfront.net/cover/image/43077/big_02e49d2b92.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

const blockCar = document.getElementById("form__car");
const blockBike = document.getElementById("form__bike");

// создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    console.log(`Тип: ${this.type} Бренд: ${this.brand}`);
    return this.type + ", " + this.brand;
  }
  getPrice() {
    console.log(`Цена: ${this.price}`);
    return this.price;
  }
}

//создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
class Car extends Transport {
  doors = [];
  image = [];
  constructor(type, price, brand, doors, image) {
    super(type, price, brand, doors, image);
    this.doors = doors;
    this.image = image;
  }
  getDoorsCount() {
    if (this.type === "car") {
      console.log(`Количество дверей: ${this.doors}`);
      console.log(`Фото: ${this.image}`);

      // создаем новый элемент div
      let newDiv = document.createElement("div");
      // присваиваем ему класс
      newDiv.className = "form__car-list";

      //  создаем новый элемент img
      let newImag = document.createElement("img");
      // задаем ему параметры
      newImag.className = "img";
      newImag.src = this.image;
      newImag.alt = "car";

      // создаем новый элемент для текста Бренд
      let newBrand = document.createElement("p");
      newBrand.className = "form__car-brand";
      // заполняем текст внутри нов элемента
      newBrand.textContent = `Бренд: ${this.brand}`;

      // создаем новый элемент для текста Цена
      let newpPice = document.createElement("p");
      newpPice.className = "form__car-price";
      // заполняем текст внутри нов элемента
      newpPice.textContent = `Цена: ${this.price} руб.`;

      // создаем новый элемент для текста doors
      const newDoors = document.createElement("p");
      newDoors.className = "form__car-text";
      // заполняем текст внутри нов элемента
      newDoors.textContent = `Количество дверей: ${this.doors} шт.`;

      // кладем картинку в родителя
      newDiv.append(newImag);
      newDiv.append(newBrand);
      newDiv.append(newpPice);
      newDiv.append(newDoors);
      blockCar.append(newDiv);
    }
  }
}

// cсоздать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.
class Bike extends Transport {
  maxSpeed = [];
  image = [];
  constructor(type, price, brand, maxSpeed, image) {
    super(type, price, brand, maxSpeed, image);
    this.maxSpeed = maxSpeed;
    this.image = image;
  }

  getMaxSpeed() {
    if (this.type === "bike") {
      console.log(`Max скорость: ${this.maxSpeed}`);
      console.log(`Фото: ${this.image}`);

      // создаем новый элемент div
      let newDiv = document.createElement("div");
      // присваиваем ему класс
      newDiv.className = "form__bike-list";

      //  создаем новый элемент img
      let newImag = document.createElement("img");
      // задаем ему параметры
      newImag.className = "img";
      newImag.src = this.image;
      newImag.alt = "bike";

      // создаем новый элемент для текста Бренд
      let newBrand = document.createElement("p");
      newBrand.className = "form__car-brand";
      // заполняем текст внутри нов элемента
      newBrand.textContent = `Бренд: ${this.brand}`;

      // создаем новый элемент для текста Цена
      let newpPice = document.createElement("p");
      newpPice.className = "form__car-price";
      // заполняем текст внутри нов элемента
      newpPice.textContent = `Цена: ${this.price} руб.`;

      // создаем новый элемент для текста
      const newMaxSpeed = document.createElement("p");
      newMaxSpeed.className = "form__bike-text";
      // заполняем текст внутри нов элемента
      newMaxSpeed.textContent = `Max скорость: ${this.maxSpeed} км/ч`;

      // кладем данные в родителя
      newDiv.append(newImag);
      newDiv.append(newBrand);
      newDiv.append(newpPice);
      newDiv.append(newMaxSpeed);
      blockBike.append(newDiv);
    }
  }
}

// дастаем объекты
for (let i = 0; i < data.length; i++) {
  const transport = new Transport(data[i].type, data[i].price, data[i].brand);
  console.log(`========Typt: ${transport.type}`);
  transport.getInfo();
  transport.getPrice();

  if (transport.type === "car") {
    const car = new Car(
      data[i].type,
      data[i].price,
      data[i].brand,
      data[i].doors,
      data[i].image
    );
    car.getDoorsCount();
  } else if (transport.type === "bike") {
    const bike = new Bike(
      data[i].type,
      data[i].price,
      data[i].brand,
      data[i].maxSpeed,
      data[i].image
    );
    bike.getMaxSpeed();
  }
}
