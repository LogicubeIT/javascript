// what are objects?

const car = {
  // key: value
  name: "ertiga",
  model: "HYBRID",
  color: "silver",
  yom: "2019",
  price: "1030000",
  mileage: 22,
  forSale: false,
};

console.log(car.model)

const person = {
  name: "John",
  age: 30,
  city: "New York",
  height: "",
  weight: "",
  gender: "",
};

const cricketPlayer = {
  name: "Virat",
  age: 30,
  city: "Mumbai",
  height: "",
  weight: "",
  gender: "",
  trainingInstitute: "delhi",
  teamName: "India",
  matchPlayed: 100,
  matchWon: 50,
  matchLost: 50,
  highestScore: 200,
  noOfCenturies: 100,
  avgRunsPerMatch: 90,
  avgWicketsPerMatch: 5,
  teamRole: "member",
};

// how to access an object: objectname.<propertyname>
// "chaining method" to access values from an object
console.log(cricketPlayer.trainingInstitute);

// "string method" to access values from an object

console.log(cricketPlayer["avgWicketsPerMatch"]);

console.log("type of variable car:", typeof car.mileage);

const cars = [
  {
    // key: value
    name: "ertiga",
    model: "HYBRID",
    color: "silver",
    yom: "2019",
    price: "1030000",
    mileage: 22,
    forSale: false,
  },
  {
    // key: value
    name: "hondacity",
    model: "PETROL",
    color: "silver",
    yom: "2020",
    price: "1030000",
    mileage: 20,
    forSale: true,
  }
];

const arrayOfStrings = ['abc', 'def', 'ghi', 'jkl']

console.log('cars',cars)
console.log('first value from an array of cars:',cars[1].model)