// sumazinti kieki, supaprastinti

const mark = [7,5,10,12] 
let sum = 0 
for (const n of mark){ sum+=n;
} console.log(sum)

// 7+5+10+12
const sum2 = mark.reduce((total,n) =>total +n); 
console.log(sum2)


// 7-5-10-12
const sum3= mark.reduce((total,n) =>total -n); 
console.log(sum3)

console.log('-------');


// 0+7+5+10+12
const sum21 = mark.reduce((total,n) =>total +n,0); 
console.log(sum21)

// 0-7-5-10-12
const sum31= mark.reduce((total,n) =>total -n,0); 
console.log(sum31)
console.log('-------');


// 10+7+5+10+12
const sum211 = mark.reduce((total,n) =>total +n,10); 
console.log(sum211)

// 10-7-5-10-12
const sum311= mark.reduce((total,n) =>total -n,10); 
console.log(sum311)


// 10*7*5*10*12
const sum3111= mark.reduce((total,n) =>total *n,10); 
console.log(sum3111)



const name = ['Petras', 'Cahananijas', 'Juozapas', 'Mirjam']
let ar = ''; 
for (const names of name ) { ar +=names[0] +'.';}
console.log(ar);


const ar1 = name.reduce((total,names) => total + names [0] + '.', ''); 
console.log(ar1);





