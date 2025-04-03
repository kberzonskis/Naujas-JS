


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
 
