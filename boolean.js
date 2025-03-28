/* Boolean - logine reiksme 
-True
-false

Loginiai operatoriai: 
&& - and (ir) prioritetinis kaip daugybos
|| - or (arba) */ 

const isEven = true; 
const isOdd = false; 

console.log (true && true); 
console.log (true && false); 
console.log (false && true); 
console.log (false && false); 

console.log ('||--------'); 
console.log (true || false); 
console.log (false || true); 
console.log (true || false); 
console.log (false || false);


console.log('Ar mergina eis i pasimatyma'); 
const arGrazus = true
const arTurtingas = true

console.log(arGrazus && arTurtingas); 


console.log('Ar mergina eis i pasimatyma'); 
const arGrazi = true
const arTurtinga = false

console.log(arGrazi || arTurtinga); 



//: surasyti visas imanomas kombinacijas su end ir arba kai yra naudojamos 4 boolien reiksmes? 
"Kiek gavosi kombinaciju?"  // 

const studentName = 'Maryte';
const amount = 4;

// Maryte yra viena is 4 legendiniu studentu.

const student = studentName + ' yra viena/s is ' + amount + ' legendiniu studentu.';
const student2 = `${studentName} yra viena/s is ${amount} legendiniu studentu.`;

console.log(student);
console.log(student2);

const demo = `Labas, ${studentName}.`;
console.log(demo);


