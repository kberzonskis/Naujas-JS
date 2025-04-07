


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


 
