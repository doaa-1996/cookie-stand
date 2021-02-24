'use strict';

let timeArray = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
function Salmon(name, minNumberOfCustomers, maxNumberOfCustomers, avgNumberOfCookiesPerCustomer) {
  this.name = name;
  this.minNumberOfCustomers = minNumberOfCustomers;
  this.maxNumberOfCustomers = maxNumberOfCustomers;
  this.avgNumberOfCookiesPerCustomer = avgNumberOfCookiesPerCustomer;
  this.numberOfCustomers = [];
  this.salesArray = [];
  this.total = 0;
}


Salmon.prototype.gitNum = function () {
  for (let j = 0; j < timeArray.length; j++) {
    this.numberOfCustomers.push(generateRandomNumber(this.minNumberOfCustomers, this.maxNumberOfCustomers));
    console.log(this.numberOfCustomers);
  }
};


Salmon.prototype.gitCookiesEachHour = function () {
  for (let i = 0; i < timeArray.length; i++) {
    this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.avgNumberOfCookiesPerCustomer));
    this.total = this.total + this.salesArray[i];
  }
};



function createTebleHeader() {
  const parent = document.getElementById('sales');
  const tableElement = document.createElement('table');
  parent.appendChild(tableElement);
  const tr1Element = document.createElement('tr');
  tableElement.appendChild(tr1Element);
  const th5Element = document.createElement('th');
  tr1Element.appendChild(th5Element);
  th5Element.textContent = '   ';
  for (let k = 0; k < timeArray.length; k++) {
    const th1Element = document.createElement('th');
    tr1Element.appendChild(th1Element);
    th1Element.textContent = timeArray[k];
  }
  const th6Element = document.createElement('th');
  tr1Element.appendChild(th6Element);
  th6Element.textContent = 'Daily total of branch';
}






Salmon.prototype.render = function () {
  const table = document.getElementsByTagName('table')[0];
  const tr1Element = document.createElement('tr');
  table.appendChild(tr1Element);
  const td3Element = document.createElement('td');
  tr1Element.appendChild(td3Element);
  td3Element.textContent = this.name;
  for (let f = 0; f < this.salesArray.length; f++) {
    const td1Element = document.createElement('td');
    tr1Element.appendChild(td1Element);
    td1Element.textContent = this.salesArray[f];
  }
  const td1Element = document.createElement('td');
  tr1Element.appendChild(td1Element);
  td1Element.textContent = this.total;
};









function createTableFooter(locations) {
  const table = document.getElementsByTagName('table')[0];
  const tr1Element = document.createElement('tr');
  table.appendChild(tr1Element);
  let sum = 0;
  const th4Element = document.createElement('th');
  tr1Element.appendChild(th4Element);
  th4Element.textContent = 'total';
  for (let k = 0; k < timeArray.length; k++) {
    const th1Element = document.createElement('th');
    tr1Element.appendChild(th1Element);
    let totalOfTotal = 0;
    for (let t = 0; t < locations.length; t++) {
      totalOfTotal += locations[t].salesArray[k];
    }
    th1Element.textContent = totalOfTotal;
  }
  for (let s = 0; s < locations.length; s++) {
    sum += locations[s].total;
  }
  const th2Element = document.createElement('th');
  tr1Element.appendChild(th2Element);
  th2Element.textContent = sum;


}




const Seattle = new Salmon('Seattle', 23, 65, 6.3);
const Tokyo = new Salmon('Tokyo', 3, 24, 1.2);
const Dubai = new Salmon('Dubai', 11, 38, 7.3);
const Paris = new Salmon('Paris', 20, 38, 2.3);
const Lima = new Salmon('Lima', 2, 16, 4.6);
let objects = [Seattle, Tokyo, Dubai, Paris, Lima];
createTebleHeader();
Seattle.gitNum();
Seattle.gitCookiesEachHour();
console.log(Seattle);
Seattle.render();
Tokyo.gitNum();
Tokyo.gitCookiesEachHour();
console.log(Tokyo);
Tokyo.render();
Dubai.gitNum();
Dubai.gitCookiesEachHour();
console.log(Dubai);
Dubai.render();
Paris.gitNum();
Paris.gitCookiesEachHour();
console.log(Paris);
Paris.render();
Lima.gitNum();
Lima.gitCookiesEachHour();
console.log(Lima);
Lima.render();
createTableFooter(objects);




function generateRandomNumber(minNumberOfCustomers, maxNumberOfCustomers) {
  return Math.floor(Math.random() * (maxNumberOfCustomers - minNumberOfCustomers + 1) + minNumberOfCustomers);
}



const formElement = document.getElementById('addingNewBranch');
formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const branchname = event.target.branch_name.value;
  const branchminNumberOfCustomers = event.target.min_num_of_customers.value;
  const branchmaxNumberOfCustomers = event.target.max_num_of_customers.value;
  const branchavgNumberOfCookiesPerCustomer = event.target.avg_num_of_cookies_per_customer.value;


  const branch = new Salmon(branchname, branchminNumberOfCustomers, branchmaxNumberOfCustomers, branchavgNumberOfCookiesPerCustomer);
  formElement.reset();
  objects.push(branch);
  branch.gitNum();
  branch.gitCookiesEachHour();
  document.querySelector( 'table tr:last-child' ).remove();
  branch.render();
  createTableFooter(objects);


  console.log(branch.allbranch);

});






















































































// 'use strict';
// const timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// function SalmonCookies(name, minNumberOfCustomersNumberOfCustomers, maxNumberOfCustomersNumberOfCustomers, averageNumberOfCookiesPerCustomer) {
//   this.name = name;
//   this.minNumberOfCustomersNumberOfCustomers = minNumberOfCustomersNumberOfCustomers;
//   this.maxNumberOfCustomersNumberOfCustomers = maxNumberOfCustomersNumberOfCustomers;
//   this.averageNumberOfCookiesPerCustomer = averageNumberOfCookiesPerCustomer;
//   this.numberOfCustomers = [];
//   this.salesArray = [];
//   this.total=0;
// }


// SalmonCookies.prototype.getNumberOfCustomers = function () {
//   for (let j = 0; j < timeArray.length; j++) {
//     this.numberOfCustomers.push(generateRandomNumber(this.minNumberOfCustomersNumberOfCustomers, this.maxNumberOfCustomersNumberOfCustomers));
//     console.log(this.numberOfCustomers);

//   }
// };



// SalmonCookies.prototype.render= function () {
//   for (let i = 0; i <timeArray.length; i++) {
//     this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.averageNumberOfCookiesPerCustomer));
//     this.total=this.total+this.salesArray[i];

//   }

// };



// SalmonCookies.prototype.render=function()
// {
//   const table=document.getElementsByTagName('table')[0];
//   const tr1Element = document.createElement('tr');
//   table.appendChild(tr1Element);
//   const td3Element = document.createElement('td');
//   tr1Element.appendChild(td3Element);
//   td3Element.textContent=this.name;
//   for(let f=0; f<this.salesArray.length; f++)
//   {
//     const td1Element = document.createElement('td');
//     tr1Element.appendChild(td1Element);
//     td1Element.textContent=this.salesArray[f];
//   }
//   const td1Element = document.createElement('td');
//   tr1Element.appendChild(td1Element);
//   td1Element.textContent=this.total;
// };

// function createTebleHeader()
// {
//   const parent = document.getElementById('sales');
//   const tableElement = document.createElement('table');
//   parent.appendChild(tableElement);
//   const tr1Element = document.createElement('tr');
//   tableElement.appendChild(tr1Element);
//   const th5Element = document.createElement('th');
//   tr1Element.appendChild(th5Element);
//   th5Element.textContent='   ';
//   for(let k=0 ; k < timeArray.length ;k++)
//   {
//     const th1Element = document.createElement('th');
//     tr1Element.appendChild(th1Element);
//     th1Element.textContent = timeArray[k];
//   }
//   const th6Element = document.createElement('th');
//   tr1Element.appendChild(th6Element);
//   th6Element.textContent='Daily Location Total';
// }
// function createTableFooter(locations )
// {
//   const table=document.getElementsByTagName('table')[0];
//   const tr1Element = document.createElement('tr');
//   table.appendChild(tr1Element);
//   let sum=0;
//   const th4Element = document.createElement('th');
//   tr1Element.appendChild(th4Element);
//   th4Element.textContent='total';
//   for(let k=0 ; k < timeArray.length ;k++)
//   {
//     const th1Element = document.createElement('th');
//     tr1Element.appendChild(th1Element);
//     let totalOfTotal=0;
//     for(let t=0; t < locations.length ; t++)
//     {
//       totalOfTotal+=locations[t].salesArray[k];
//       sum += locations[t].total;
//     }
//     th1Element.textContent=totalOfTotal;
//   }
//   const th2Element = document.createElement('th');
//   tr1Element.appendChild(th2Element);
//   th2Element.textContent=sum;
// }






// const seattle = new SalmonCookies('seattle', 23, 65, 603);
// const Tokyo = new SalmonCookies('Tokyo', 23, 65, 603);
// const Dubai = new SalmonCookies('Dubai', 23, 65, 603);
// const Paris = new SalmonCookies('Paris', 23, 65, 603);
// const Lima = new SalmonCookies('Lima', 23, 65, 603);
// let object=[seattle,Tokyo,Dubai,Paris,Lima];


// createTebleHeader();









// seattle.getNumberOfCustomers();
// seattle.render();

// Tokyo.getNumberOfCustomers();
// Tokyo.render();

// Dubai.getNumberOfCustomers();
// Dubai.render();
// Paris.getNumberOfCustomers();
// Paris.render();
// Lima.getNumberOfCustomers();
// Lima.render();









// function generateRandomNumber(minNumberOfCustomers, maxNumberOfCustomers) {
//   return Math.floor(Math.random() * (maxNumberOfCustomers - minNumberOfCustomers + 1) + minNumberOfCustomers);
// }



// createTableFooter(object);




