https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

console.log(Number.MAX_SAFE_INTEGER) 
console.log(Number.MIN_SAFE_INTEGER) 


// Ar tiesa?
console.log(isFinite(true))
console.log(isFinite(true),Number.isFinite(true), )
console.log(isFinite('sgrer'))
console.log(isFinite(NaN))
console.log(isFinite(Infinity))
console.log(isFinite(1))
console.log(isFinite({}))
console.log(isFinite([]))



// Ar yra sveikasis skaicius
console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(5)); 
 


console.log('Nan--------');


// is NaN

console.log(Number.isNaN(5));
console.log(Number.isNaN(3.14));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(NaN),isNaN(NaN))
console.log(Number.isNaN('adsfd'),isNaN('adsfd')); 
console.log(Number.isNaN(NaN),isNaN(NaN))

console.log('------------');

// teksto konstravimas

const userInput = '22'; 

const date = userInput +5 
console.log(date);


let userInput1 = '22'; 

const dater = userInput * 5 
console.log(dater);

// su daugyba veikia 

// kai norisi sudeti
let userInput2 = '22'; 

const dater2 = parseInt(userInput2) + 5 
console.log(dater2);

console.log('------------');

console.log(parseInt('-55'))
console.log(parseInt('-55,55'))
console.log(parseInt('222Labas'))
console.log(parseInt('Labas-55')) 

console.log('------------');

console.log(parseFloat('444')) 
console.log(parseFloat('44,4')) 
console.log(parseFloat('-44')) 
console.log(parseFloat('44,4')) 
console.log(parseFloat('-44,4')) 
 
console.log('------------');


console.log(parseFloat('55.66Labas')) 
console.log(parseFloat('labas44,4')) 
console.log(parseFloat('-44,4')) 
console.log(parseFloat('--44,4')) 
console.log(parseFloat('5-5')) 
console.log('------------');

const fa = 12.356
console.log(fa);
console.log(typeof fa);
console.log(typeof typeof fa);
console.log(typeof 'number');



console.log(typeof 'number');

console.log(3.15.toFixed(0));
console.log(3.15.toFixed(1));
console.log(3.15.toFixed(2));
console.log(3.15.toFixed(3));
console.log(3.15.toFixed(4));
console.log(3.15.toFixed(5));
console.log(3.15.toFixed(6));
