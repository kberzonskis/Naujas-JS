

//   push ir concat alternatyva

const a5 = [5,55,555]
const a7 = [7,77,777]
const a8 = [8,88,888]
  
const a1 = a5.concat(a5)
console.log(a1);

const a2 = [...a1,...a7]
console.log(a2);

const a3 = [...a8,...a5,...a7]
console.log(a3);


const a4 = [...a3,...a2,]
console.log(a4);


// [12,10,555]
const b1 = [12,10,555,...a7]
console.log(b1);


console.log('*************');

const obj1 = {name: 'Shapira'}
const obj2= {age: 55 }
const obj3 = {isMarried: true} 

const obj = {...obj1,...obj2,...obj3}
console.log(obj);

const raktai = {c: 2}
const raktai1 = {c1: 3}
const raktai2 = {c2: 4}

const raktai12 = {...raktai,...raktai1,...raktai2 }
console.log(raktai12);


console.log('************');


const raktaia = {c: 2}
const raktaia1 = {c1: 6}
const raktaia2 = {c2: 4, a:5}

const raktaia12 = {...raktaia,...raktaia1,...raktaia2 }
console.log(raktaia12);

const rak = {f: 6,...raktai12,c1:5, }
console.log(rak);


console.log('--***********---'); 

const mat = [7,5,8,10,12]
const [ first, second,...rest] = mat
console.log(first);
console.log(second);
console.log(rest);


console.log('--*************--'); 

const namai = ['Johananas', 'Mirjam', 'Kefa','Aron']
const v1 = namai[0]; 
const v2 = namai[1]; 
const v3 = namai.slice(2); 

console.log(v1);
console.log(v2);
console.log(v3);

const [y,x,n,...F] = namai
console.log(y);
console.log(x);
console.log(n);

console.log('----FFF----');
console.log(F); 

// F nebeturi paskutinio elemento. F surenka likusius narius



/*
const namai2 = ['Johana', 'Aron', 'Kefa']
const (h,...f1) = namai2
console.log[h];  // F nebeturi paskutinio elemento. F surenka likusius narius


console.log('--**********---');  */ 


const pers = { vardas: 'Kefa',
    age: 55, 
    isMarried: true
}; 
const {vardas,age, ...p1} = pers 
console.log(vardas);
console.log(age);
console.log(p1);


const students =[ {name:'Kefa', age:23},
                 {name:'Aron', age:25},
                {name:'Mirjam', age:50},
                {name:'Sauius', age:36} ]; 

// for in per masyva, for of per objekta)


    for (let i =0; i <students.length; i++) { 
        const student = students [i]; 
        const name = student.name; 
        const age = student.age; 
        const result = `studentui vardu ${name}, yra ${age} metai. ` 
        console.log(result);
        
    
    }  
    




 


/*

    const numbers = [ [2], [222], [555,55], [777,7], [2], [8]]; 

    // padaryti cikla kurio skaicius yra Q ir dar yra W papildomu skaiciu 
for (const listnumbers  of numbers) {}
console.log(listnumbers);


*/


console.log('--**********---')


const studentss = [
    { name: 'Jayras', age: 99 },
    { name: 'Mirjam', age: 88 },
    { name: 'Kefa', age: 77 },
    { name: 'Chana', age: 66 },
];

for (let i = 0; i < studentss.length; i++) {
    const { name, age } = studentss[i];
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}

console.log('------------------');

for (const student of studentss) {
    const { name, age } = student;
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}

console.log('------------------');

for (const { name, age } of students) {
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}



const numbers = [
    [0],
    [1, 11],
    [2, 22, 222],
    [3, 33, 333, 3333],
    [4],
    [5],
    [6],
];

// Pirmas skaicius yra X ir dar yra Y papildomu skaiciu.

for (const [first, ...rest] of numbers) {
    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaiciu.`;
    console.log(result);
} 
/*

Math.min(1)
Math.min(2,3,4,5)


function min(...list) {return a;} 
console.log(...list);


console.log(min(1));
console.log(min(1,2,3));
console.log(min(-1,-2,-3));
console.log(min(-1,-2,-3));

*/


const pip = [2,3,4];
console.log(Math.min(...pip));
console.log(Math.max(1,2,3));
console.log(Math.max(...pip)); 





// 1) uzvirinti vandeni 
// 2) uzpilti vandeni
// 3) ideti cukraus
// 4) ismaisyti cukru

/* 

console.log(min(1));
console.log(min(1, 2, 3));
console.log(min(-1, -2, -3));
console.log(min(-1, -2, -3, -2, -3, -2, -3, -2, -3, -2));

console.log(Math.min(1));
console.log(Math.min(1, 2, 3));
console.log(Math.min(-1, -2, -3));
console.log(Math.min(-1, -2, -3, -2, -3, -2, -3, -2, -3, -2));

const ddd = [1, 2, 3];
console.log(Math.min(...ddd));
console.log(Math.min(1, 2, 3));
console.log(Math.max(...ddd));

// ...ddd = 1, 2, 3
const f = [...ddd];
console.log(f);

console.log(ddd);
console.log(...ddd);
console.log(1, 2, 3);  */ 