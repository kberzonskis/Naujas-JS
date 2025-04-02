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



// repeat 

console.log('a');
console.log('aaaaaaaaaaaaaaaaa');
console.log('aa'  );
const symbol = 'labas'
const megaSymbol = symbol.repeat(5)
console.log(symbol)
console.log(megaSymbol)


// replace 

const summer = 'vasara'.replace('a','-') 
console.log(summer) 
const summer2 = 'vasara'.replace('a','-').replace('a','-')
console.log(summer2) 


const cloud = 'debeselis'.replace('e', '***')
console.log(cloud);
const cloudy = 'debeselis'.replace('sel', '***')
console.log(cloudy
);
const cloudys = 'debeselis'.replace('sel', '*'.repeat(5))
console.log(cloudys
);


// to Uppercase 
console.log('labas'.toUpperCase());

console.log('LABAS, 8G8G5T'.toLowerCase());

// slice 
console.log('pomidoras'.slice());
console.log('pomidoras'.slice(5));
console.log('pomidoras'.slice(0,3));
console.log('pomidoras'.slice(0,6));
console.log('pomidoras'.slice(4,6));
console.log('pomidoras'.slice(-2));
console.log('pomidoras'.slice(0,-2));

// trim 

console.log(`"${'pomidoras'.trim()}"`);  
console.log(`"${'pomidoras            '.trim()}"`);  
console.log(`"${'     pomidoras        '.trim()}"`);  
console.log(`"${'     pomidoras        '.trimEnd()}"`);  
console.log(`"${'     pomidoras        '.trimStart()}"`);  

// split 

const t1 = "zodis"; 
const t1Parts = t1.split()
const t1Parts2 = t1.split('o')
const t1Parts3 = t1.split('d')
console.log(t1Parts)
console.log(t1Parts2)
console.log(t1Parts3)

const t2 = 'kultivatorius' 
const t2Parts = t2.split('t') 
console.log(t2Parts);

console.log('ana'.split('a'));
console.log('vasara'.split('a'));


// charCodeAt 

console.log('a'.charCodeAt(0))
console.log('A'.charCodeAt(0))
if ('a' < 'A') {console.log('daugiau')}

else {console.log('maziau')}

console.log('A'+ 'a'.charCodeAt(0))