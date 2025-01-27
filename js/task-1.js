const getUserNames = (users) => users.map(user => user.name);

const users = [
  { name: "Moore Hensley", age: 37 },
  { name: "Sharlene Bush", age: 34 },
  { name: "Ross Vazquez", age: 24 },
  { name: "Elma Head", age: 21 },
  { name: "Carey Barr", age: 42 },
  { name: "Blackburn Dotson", age: 45 },
  { name: "Sheree Anthony", age: 29 },
];


console.log(getUserNames(users));
