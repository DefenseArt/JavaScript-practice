function print(person) {
    if (person === undefined || person === null) {
      console.log('person이 없네요');
      return;
    }
    console.log(person.name);
  }
  
  const person = null;
  print(person);

//Falsy 한 값
  console.log(!undefined);
  console.log(!null);
  console.log(!0);
  console.log(!'');
  console.log(!NaN);

//Truthy한 값
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{ value: 1 });
