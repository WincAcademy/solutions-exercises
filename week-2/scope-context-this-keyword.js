//Opdracht A

const car = {
  brand: "Nissan",
  getBrand: function() {
    console.log("1", this.brand);
  }
};

const getCarBrand = car.getBrand;
getCarBrand();
// De output van de console.log is undefined. This variable van de context heeft geen idee van de brand van het car object.

//Opdracht B
const car2 = {
  brand: "Nissan",
  getBrand: function() {
    console.log("2", this.brand);
  }
};

const getCarBrand2 = car2.getBrand;
console.log("2", getCarBrand2);
// output: [Function: getBrand]

const car3 = {
  brand: "Nissan",
  getBrand: function() {
    console.log("3", this.brand);
  }
};
const getCarBrand3 = car3.getBrand.bind(car);
getCarBrand3();
// output: Nissan
// Nu hebben we tegen de getBrand() functie gezegd: hey jij hoort bij het car object.

// Opdracht C
// Let op! Dit is even pseudo code, omdat er geen HTMl pagina aan is verbonden, maar stel je hebt het volgende elementin je HTML pagina:
// Om ervoor te zorgen dat je deze file nog kunt runnen in Node en geen foutmeldingen geeft, is de code even uitgecommend.
{
  /* <button id="btn" type="button">Get the car's brand</button> */
}

var car4 = {
  brand: "Nissan",
  getBrand: function() {
    console.log("4", this.brand);
  }
};

//  var el = document.getElementById("btn");
//  el.addEventListener("click", car4.getBrand.bind(car));

// Hierboven staat: Hey car.getBrand functie, ik weet dat je nu op een element Button staat, maar je hoort bij het car object, daar bind ik je nu even expliciet aan vast.

// Opdracht D

const car5 = {
  brand: "Nissan",
  getBrand: function() {
    const printBrandName = function() {
      console.log("5", this.brand);
    }.bind(this);
    return printBrandName();
  }
};
car5.getBrand(); // output: Nissan

const car6 = {
  brand: "Nissan",
  getBrand: function() {
    const self = this;
    // naast self kun je deze variable noemen zoals je wilt.
    // Je ziet ook vaak : that, _this, me, context, etc
    const printBrandName = function() {
      console.log("6", self.brand);
    };
    return printBrandName();
  }
};

car6.getBrand(); // output: Nissan

// Opdracht E
var car7 = {
  brand: "Nissan",
  getBrand: function() {
    // the arrow function keeps the scope of "this" accessible.
    const printBrandName = () => {
      // const self = this; deze regel heb je niet meer nodig.
      console.log("7", this.brand);
    };
    return printBrandName();
  }
};

car7.getBrand(); // output: Nissan
