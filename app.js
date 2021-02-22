'use strict';

let total = 0;

const Seattle = {
  name:'Seattle',
  minNumberOfCustomer: 2,
  maxNumberOfCustomer: 16,
  averageNumberOfCookiespurchased: 4.6,
  timeArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.timeArray.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer));
      console.log(this.numberOfCustomers);

    }
  },

  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.timeArray.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.averageNumberOfCookiespurchased));
      total = total + this.salesArray[i];
    }

    const parent = document.getElementById('sales');

    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;


    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let d = 0; d < this.timeArray.length; d++) {

      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);

      liElement.textContent = `${this.timeArray[d]}: ${this.salesArray[d]} cookies.`;
    }

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    liElement.textContent = `Total : ${total} cookies.`;

  }

};

Seattle.gitNum();
Seattle.gitCookiesEachHour();

const Tokyo = {
  name:'Tokyo',
  minNumberOfCustomer: 2,
  maxNumberOfCustomer: 16,
  averageNumberOfCookiespurchased: 4.6,
  timeArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.timeArray.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer));
      console.log(this.numberOfCustomers);

    }
  },

  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.timeArray.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.averageNumberOfCookiespurchased));
      total = total + this.salesArray[i];
    }

    const parent = document.getElementById('sales');

    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;

    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let d = 0; d < this.timeArray.length; d++) {

      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);

      liElement.textContent = `${this.timeArray[d]}: ${this.salesArray[d]} cookies.`;
    }

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    liElement.textContent = `Total : ${total} cookies.`;

  }

};

Tokyo.gitNum();
Tokyo.gitCookiesEachHour();





const Dubai = {
  name:'Dubai',
  minNumberOfCustomer: 2,
  maxNumberOfCustomer: 16,
  averageNumberOfCookiespurchased: 4.6,
  timeArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.timeArray.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer));
      console.log(this.numberOfCustomers);

    }
  },

  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.timeArray.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.averageNumberOfCookiespurchased));
      total = total + this.salesArray[i];
    }

    const parent = document.getElementById('sales');

    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;

    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let d = 0; d < this.timeArray.length; d++) {

      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);

      liElement.textContent = `${this.timeArray[d]}: ${this.salesArray[d]} cookies.`;
    }

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    liElement.textContent = `Total : ${total} cookies.`;

  }

};

Dubai.gitNum();
Dubai.gitCookiesEachHour();


const Paris = {
  name:'Paris',
  minNumberOfCustomer: 2,
  maxNumberOfCustomer: 16,
  averageNumberOfCookiespurchased: 4.6,
  timeArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.timeArray.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer));
      console.log(this.numberOfCustomers);

    }
  },

  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.timeArray.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.averageNumberOfCookiespurchased));
      total = total + this.salesArray[i];
    }

    const parent = document.getElementById('sales');
    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;

    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let d = 0; d < this.timeArray.length; d++) {

      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);

      liElement.textContent = `${this.timeArray[d]}: ${this.salesArray[d]} cookies.`;
    }

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    liElement.textContent = `Total : ${total} cookies.`;

  }

};

Paris.gitNum();
Paris.gitCookiesEachHour();




const Lima = {
  name:'Lima',
  minNumberOfCustomer: 2,
  maxNumberOfCustomer: 16,
  averageNumberOfCookiespurchased: 4.6,
  timeArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.timeArray.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer));
      console.log(this.numberOfCustomers);

    }
  },

  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.timeArray.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.averageNumberOfCookiespurchased));
      total = total + this.salesArray[i];
    }

    const parent = document.getElementById('sales');
    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;

    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let d = 0; d < this.timeArray.length; d++) {

      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);

      liElement.textContent = `${this.timeArray[d]}: ${this.salesArray[d]} cookies.`;
    }

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    liElement.textContent = `Total : ${total} cookies.`;

  }

};

Lima.gitNum();
Lima.gitCookiesEachHour();




function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

