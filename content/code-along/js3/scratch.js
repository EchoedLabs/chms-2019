const namesOfPeople = ['Ahmad', 'John', 'Lily'];

const males = [];
const females = [];
for(const name of namesOfPeople){
  if(name === "Ahmad"){
    males.push(name);
  }

  if(name === 'John'){
    males.push(name);
  }

  if(name === 'Lily'){
    females.push(name);
  }
}

console.log(`You have ${males.length} male students`);
console.log(`You have ${females.length} female students`);

