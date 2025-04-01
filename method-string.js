// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String




const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

console.log('Labas'); 
console.log('Labas'[0]); 
console.log('Labas'[1]); 
console.log('Labas'[2]); 
console.log('Labas'); 


const text= 'pomidoras'; 
console.log(text[0]); 
console.log([text.length -1]); 


console.log('--', text.at(0))
console.log('--', text.at(1))
console.log('--', text.at(2))

console.log('-----------'); 
console.log('--', text.at(-1))
console.log('--', text.at(-2))
console.log('--', text.at(-3))
console.log('--', text.at(-4))


// includes 

console.log('Vasara'. includes('V'))
console.log('Vasara'. includes('s'))
console.log('Vasara'. includes('g'))
console.log('Vasara'. includes('v'))
console.log('Vasara'. includes('Va'))
console.log('Vasara'. includes('Vr'))

console.log('--------Starts With---'); 
// starts With 
console.log('Pomidoras'.startsWith('a')) 
console.log('Pomidoras'.startsWith('P'))

console.log('----endsWith---'); 

// endsWith 
console.log('Pomidoras'.endsWith('a')) 
console.log('Pomidoras'.endsWith('s'))


console.log('-----indexOF');

// indexOF 

console.log('Pomidoras'.indexOf('a'))
console.log('Pomidoras'.indexOf('P'))
console.log('Pomidoras'.indexOf('r'))
console.log('Pomidoras'.indexOf('p'))
console.log('Pomidoras'.indexOf('om'))
console.log('Pomidoras'.indexOf('odrtbm'))
console.log((`---- su minusu reiskia nera--`));


console.log('-----Randa raides vietos skaiciu');

console.log('Pomidoras'.indexOf('o',1))
console.log('Pomidoras'.indexOf('o',2))




