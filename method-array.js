


const list = []
console.log(list) 

list.push(10)
console.log(list)

list.push(8)
console.log(list)

list.push(2)
console.log(list)

list.push(4)
console.log(list)

list.push(4,5,6)
console.log(list)


const numbers = [10,2,8,4,6]; 

// sugeneruoti sarasa kurio skaiciai butu dvigubai didesni 

const doubleNumbers = [0]; 

for (let i = 0; i < numbers.length; i++) {const number = numbers[i]; 
    doubleNumbers.push(number*2)} 
    console.log(doubleNumbers)









const n1= [1,11,111]
const n2 = [2,22,222,2222]
const n12 = []

// const n12 [1,11,111,2,22,222,2222] norimas rezultatas 

for (let i = 0; i < n1.length; i++) {n12.push(n1[i]);}

for (let i = 0; i < n2.length; i++) {n12.push(n2[i]);}

console.log(n12);



const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSize = [];
const nameFirstLetters = [];
const upperCaseNames = [];
 
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log('---', name, name.length);
 
    nameSize.push(name.length);
    nameFirstLetters.push(name[0]);
    upperCaseNames.push(name.toUpperCase());
}
 
const numbers2 = [10, 2, 8, 4, 6]
console.log(numbers2);

numbers2.push(9)
console.log(numbers2)

const g1 =  numbers2.pop()
const g2 = numbers2.pop();
console.log(numbers2,g1,g2) 

numbers2.unshift(1); 
numbers2.unshift(2); 
numbers2.unshift(3); 
console.log(numbers2);

const g3 = numbers2.shift()
const g4 = numbers2.shift() 
console.log(numbers2,g3,g4)


const tiesa = [11,22,33,44,55]; 
console.log(tiesa.includes(5));
console.log(tiesa.includes(55));

console.log(tiesa.indexOf(5));
console.log(tiesa.indexOf(55)); 

const texts = ['burokelis', 'baklazanas','cesnakas']
// reikalingi produktai: a, b, c. 

const products = `reikalingi produktai: ${texts.join(',')}. `; 
console.log(products);  


 
console.clear()

const g = [5,7,10,8,12]; 
/* const k2 = [10,14,20,16,24] */ 

const k2 = []
for (const n of g){k2.push(n*2)}
console.log(k2);

function triple(n) {return n*3}
const k3 = g.map(triple); 
console.log(k3);


const quadro = n => n*4
const k4=g.map(quadro); 
console.log(k4);


const k5=g.map(n=>n*5); 
console.log(k5);

const k6=g.map(n=>n*6); 
console.log(k6);


// MAP su tekstais  
const dict = ['bulve', 'morka', 'svogunas'];
const dict2 = dict.map(w => w[0])
console.log(dict2);
 
const dict3 = dict.map(w => w.length)
console.log(dict3);


const people = [{name: 'Saulius', age: 55}, 
                 { name: 'Jonas', age:  20}]

  const people100 = people.map(person=> `${person.name} liko ${100-person.age}metai`); 
  console.log(people100);
                

  const peopleNames= people.map(person=> person.name); 
  console.log(peopleNames);
  const peopleAges= people.map(person=> person.age); 
  console.log(peopleAges);
                

  const peoplemarried = people.map(person => person.isMarried = true)
  console.log(peoplemarried);
  

  // filter

  const p = [5,7,8,10,12]
  const p5 = []; 

  for (const n of p) { if (n>5) {p5.push(n); }}
  console.log(p5);


  const p6 =p.filter(n => n >8); 
  console.log(p6);
  
  const p7 =p.filter(n => n >7); 
  console.log(p7);
  
  
 
const p8 = p.filter(n => n > 2 && n < 8);
console.log(p8);
 
const texts5 = ['labas', '', 'rytas', '', 'Lietuva'];
const texts5Updated = texts5.filter(t => t.length > 0);
console.log(texts5Updated);
 
const texts5Updated2 = texts5.filter(t => t);
console.log(texts5Updated2);
 