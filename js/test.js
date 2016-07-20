var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

var lastNameIndex = friends.length - 1;

console.log("Last Name " + friends[lastNameIndex].toString());

console.log(friends.sort());

var friends2 = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var friends2Array = friends2.split(',');

console.log(friends2Array.sort().reverse());