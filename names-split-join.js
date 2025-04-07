/* 
funkcija gauna sakini, kuris atrodo taip: 

funkcijos darbas istaisyti teisingai perrasytus vardus. */ 




// 1.  atsiskirti  vardus
// 2.  konvertuojame teksta i mazasias raides
// 3.  issikaidyti individualius vardus i masyva 
// 4. Kiekviena varda pakeiciame i didziaja raide 
// 5. Ciklas eina per vardus:
// a) paima pirma raide,
// b) ja padidina ir 
// c) apjungia i galutini teisingai uzrasyta varda 

console.log(correctSentence ( 'Studentai klaseje: jonas, Maryte, peTRas, ONA ')); 

function correctSentence(text) {
const parts = text.split (':'); 
const names = parts[1]
.slice(0,-1)
.toLowerCase()
.split(',')

console.log(parts);
console.log(names);

for (let i=0; i < names.leght; i++){ 
    const name = names[i]; 

    const firstLetter = name[0].toupperCase(); 
    const restName = name.slice(1); 
    console.log((name, '---', firstLetter+ restName));
    

    const newName = firstLetter+restName; 
    names[i] = newName
}

    return parts [0] + ':' + names.join(',')+ ",";
} 





/*
Funkcija gauna sakini, kuris atrodo taip:
pvz.: "Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA."
Funkcijos darbas yra grazinti teisingai perrasyta sakini.
T.y. reikia istaisyti vardu rasyma.
pvz.: "Siuo metu klaseje yra: Jonas, Maryte, Petras, Ona."
*/

/*
- atsiskiriame vardus is originalaus teksto
- konvertuojame teksta i mazasias raides
- issiskaidyti individualius vardus i masyva
- ciklas eina per individualius vardus ir:
    - pasiima pirma raide
    - ja padydina
    - apjungia i galutini normalu varda
- pagaminame galutini reikiama sakini 

*/ 

console.log(correctSentence ( "Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA.")); 
function correctSentence(text) {
    const parts = text.split(': ');
    const names = parts[1]
        .slice(0, -1)
        .toLowerCase()
        .split(', ');

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstLetter = name[0].toUpperCase();
        const restName = name.slice(1);

        const newName = firstLetter + restName;
        names[i] = newName;
    }

    return parts[0] + ': ' + names.join(', ') + '.';
}













const c1 = [1, 11]
const c2 = [2,22]
const c3 = [3,33] 
const c4 = [4,44]

const c12 = c1.concat(c2)
console.log(c12);

const c43 = c3.concat(c4)
console.log(c43);

const c321 = c1.concat(c2,c3,c4)
console.log(c321);

const c4321 = c1.concat(c2,c3,c4,)

console.log('--------------');


/* pasalina dali teksto*/ 
const h = [11,22,33,44,55]
console.log(h); 

h.splice(1,2); 
console.log(h);




