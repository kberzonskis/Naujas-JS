/* 

IF - palyginimo salyga
Palyginimo operatoriai
- Visi >, <, <=, ==, ===,  ! =, !== (ne lygu) 
-naudotini >, <, >=, ===, !==
- nenaudotini !=, == 
*/ 

/*kodo sablonai: 
if () {ka daryti jei tenkina salyga}
if () {ka daryti jei tenkina salyga} else {}
if () {ka daryti jei tenkina salyga} else if ()
if () {ka daryti jei tenkina salyga} else if () else {}
if () {ka daryti jei tenkina salyga} else if ()

*/ 

if (4>2) { console.log ('taip, 4 yra daugiau uz 2' )}

console.log('START')



if (4>2) { console.log ('taip, 4 yra daugiau uz 2' )}
console.log('END')


console.clear

const temp = 22 
 if(temp>=18) {console.log('Silta'); } else { console.log ('Salta')}


 // je zemiau 0 -> salta
 // je zemiau 10 -> mech
 // je zemiau 22 -> silta
 // je daugiau 24 -> karsta

 const temp2= 17; 

 if (temp < 0) { console.log ('Salta');}
else if (temp2 < 10) {console.log ('mech');}
else if (temp2 <22) {console.log ('Silta');}
else {console.log ('Karsta')}


if (4>3) { console.log ('taip, 4 yra daugiau uz 2' )}
console.log('END')


const clientValue = '4';

if (4 === clientValue) {
    console.log('tenkina');
} else 
    console.log('NE-tenkina');




    /*
IF - palyginimo savyga

Palyginimo operatoriai:
- visi: >, <, >=, <=, ==, ===, !=, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if ()
if () {} else if () else {}
if () {} ... else if () ...
if () {} ... else if () ... else {}
*/

console.log('START');

if (4 > 2) {
    console.log('--- taip');
} else {
    console.log('--- ne');
}

console.log('END');

console.clear();

const tempp = -2;

if (tempp >= 18) {
    console.log('Silta 🌞');
} else {
    console.log('Salta 🥶');
}

// jei zemiau 0 -> salta
// jei zemiau 10 -> meh
// jei zemiau 22 -> silta
// jei daugiau -> karsta

const tempp2 = 22;

if (tempp2 < 0) {
    console.log('Šalta 🥶');
} else if (tempp2 < 10) {
    console.log('Meh 👀');
} else if (tempp2 < 22) {
    console.log('Šilta 🌞');
} else {
    console.log('Karšta 😎');
}

const temp3 = -55;

if (temp3 < 0) {
    console.log('Šalta 🥶');
}

if (temp3 < 10) {
    console.log('Meh 👀');
}

if (temp3 < 22) {
    console.log('Šilta 🌞');
} else {
    console.log('Karšta 😎');
}

console.clear();

const clientValuep = '4';

if (4 === clientValuep) {
    console.log('tenkina');
} else {
    console.log('NE-tenkina');
}