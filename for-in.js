const prson = { name: 'Saulius', 
    age: 55, 
    isMarried: true, 
     

}; 


console.log(prson['age']);
console.log(prson['isMarried']);
console.log(prson['name']);



/*

const key = Object.keys(person)
for (const key in person){console.log(person[key]);
}

*/



// for-in dirba tik su objektais

const person ={
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
 
const keys = Object.keys(person);
console.log(keys);
 
for (const key of keys) {
    console.log(person[key]);
}
 


for (const key in person) {
    console.log(person[key]);
}


const text = 'papajus';
const symbols = {};

for (const s of text) {
    if (symbols[s]) {
        symbols[s]++;
    } else {
        symbols[s] = 1;
    }
}
console.log(symbols);

let max = 0;
for (const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}
console.log(max);

const maxSymbols = [];
for (const s in symbols) {
    if (symbols[s] === max) {
        maxSymbols.push(s);
    }
}
console.log(maxSymbols);