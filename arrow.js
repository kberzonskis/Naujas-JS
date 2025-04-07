const n1 = 7 
const n2 = 5 

function sum(a,b) { return a+b
    
 }
 console.log(`${n1}+${n2}=${sum(n1,n2)}`);
 

 // kintamajam priskiriama anonimine funkcija 

 const minus = function sum(a,b) { return a-b
    
 }
 console.log(`${n1}-${n2}=${sum(n1,n2)}`);

 // rodykline funkcija

 const multi = (a,b) => {return a*b}

 console.log(`${n1}*${n2}=${sum(n1,n2)}`);


 // 3a ta pati funcija jei logikos bloke yra tik viena salyga galima nerasyti {return}

const div = (a,b) => a/b;   
console.log(`${n1} / ${n2}=${sum(n1,n2)}`);

// 3b arrow jei parameetru bloke yra tik 1parametras, tai galima nerasyti skliaustu 

/*  * / 



// 3b) arrow function
// jei paramtetru bloke yra TIK 1 parametras
// tai galima nerasyti ()

*/ 
const sqr = a => a * a;
console.log(`${n1} * ${n1} = ${sqr(n1)}`);
console.log(`${n2} * ${n2} = ${sqr(n2)}`);








// funkcija grazina vardo pirma raide



function firstLetter(name) { return name[0]
    
}
console.log(firstLetter('jonas'));
 




/* funkcija grazina pataisyta varda  

function correctName(namies) {const first = namies[0].toUppercase()
    const rest = namies.slice(1). loLowercase(); 
    return namies[0].toUppercase()+namies.slice(1)
    
} console.log(correctName('jonas'))


*/
/*
// Funkcija grazina vardo pirma raide
const firstLetter = name => name[0]
console.log(firstLetter('Jonas'));
console.log(firstLetter('Maryte'));
 */ 
// Funkcija grazina pataisyta varda
const correctName = name => name[0].toUpperCase() + name.slice(1).toLowerCase();
console.log(correctName('jonas'));
console.log(correctName('Maryte'));
console.log(correctName('peTRas'));
console.log(correctName('ONA'));
 
//Funkcija grazina atbulini teksta
const reverseString = text => text.split('').reverse().join('');
console.log(reverseString('labas'));
console.log(reverseString('sedek'));



