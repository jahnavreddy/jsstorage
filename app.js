const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};



localStorage.setItem('firstName', 'Rajat');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', 25);
localStorage.setItem('country', 'USA');
localStorage.setItem('state', 'CA');
console.log(localStorage);


console.log('First Name:', localStorage.getItem('firstName'));
console.log('Last Name:', localStorage.getItem('lastName'));
console.log('Age:', localStorage.getItem('age'));
console.log('Country:', localStorage.getItem('country'));
console.log('State:', localStorage.getItem('state'));


localStorage.removeItem('state');
console.log(localStorage);

localStorage.clear();
console.log(localStorage);

const jsonString = JSON.stringify(user);
console.log(jsonString);

