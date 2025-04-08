1
const ki = 2;
console.log(ki);

const ki2 = 6; 
console.log(ki2);

const ki3= 8; 
console.log(ki3);

2
const kas = "Paukstis";
console.log(kas);

const kaveikia = "skrenda"; 
console.log(kaveikia);

const kur= "pereti"; 
console.log(kur);

3
const sa1 = "7 8 9 4 5";  

console.log(sa1)

const sa2= "12 15 1 2 6";
console.log(sa2)

const sa3= "10 20 30 40 50"; 
console.log(sa3)
 
4
const saule = 'Grazi;Diena;Kai;Sviecia;Saule'; 
console.log(saule)

const Laikas = 'Laikas;Yra;Labai;brangus;Dalykas'; 
console.log(Laikas)

const darbas = 'darbas;parodo;ko;esi;vertas'
console.log (darbas)

2.1
const kis = 2;
const kis2 = 6; 
const kis3= 8; 

const sum = (kis)+(kis2)+(kis3);
console.log (sum)

2.2 
const kas1 = "Paukstis";
const kaveikia1 = "skrenda"; 
const kur1= "pereti"; 

const sak = (kas1) + ` ${(kaveikia1)} `  + (kur1) 
console.log(sak)

2.3 
 
const sa21 = "78945" 
 
 const septyni = sa21[0]
 const astuoni = sa21[1] 
 const devyni = sa21[2]
 const keturi = sa21[3]
 const penki = sa21[4]


 const verte = ((septyni - astuoni) + ((devyni - keturi) - (penki)))
 console.log(verte)

 2.4

 const saule1 = 'GraziDienaKaiSvieciaSaule'; 


 const Grazi0 = saule1[0]
 const Grazi1 = saule1[1]
 const Grazi2 = saule1[2]
 const Grazi3 = saule1[3]
 const Grazi4 = saule1[4]

const Grazi = (Grazi0+Grazi1+Grazi2+Grazi3+Grazi4)
console.log(Grazi)

const Diena0 = saule1[5]
const Diena1 = saule1[6]
const Diena2 = saule1[7]
const Diena3 = saule1[8]
const Diena4 = saule1[9]

const Diena = (Diena0+Diena1+Diena2+Diena3+Diena4)
console.log(Diena)

const Kai0 = saule1[10]
const Kai1 = saule1[11]
const Kai2 = saule1[12]

const Kai = (Kai0+Kai1+Kai2)
console.log(Kai)

const Sviecia0 = saule1[13]
const Sviecia1 = saule1[14]
const Sviecia2 = saule1[15]
const Sviecia3 = saule1[16]
const Sviecia4 = saule1[17]
const Sviecia5 = saule1[18]
const Sviecia6 = saule1[19]

const Sviecia = (Sviecia0+Sviecia1+Sviecia2+Sviecia3+Sviecia4+Sviecia5+Sviecia6);
console.log(Sviecia)

const Saule0 = saule1[20]
const Saule1 = saule1[21]
const Saule2 = saule1[22]
const Saule3 = saule1[23]
const Saule4 = saule1[24]

const Saule = (Saule0+Saule1+Saule2+Saule3+Saule4)
console.log(Saule)

const visasSarasas = ` ${Saule}, ${Sviecia}, ${Kai}, ${Diena}, ${Grazi}    `; 
console.log(visasSarasas) 



const kintantis1 = 555;
const kintantis2 = 777; 

if (kintantis2>kintantis1) {console.log('Pomidoras')} else {console.log('BandytiDarKarta') }
if (kintantis2>kintantis1) {console.log('777 yra didesnis už 555' )} else {console.log(`777 yra mazesnis už 555`)}
if (kintantis2>kintantis1) {console.log(`555 yra mazesnis už 777` )} else {console.log('777 yra mazesnis už 555')}
if (kintantis2==kintantis1) {console.log('777 yra lygus 555')} else {console.log('ne: 777 ir 555 yra nelygus skaičiai') }
if (kintantis2==kintantis1) {console.log("  'Taip' 777 yra lygus 555")} else {console.log('taip: 777 ir 555 yra nelygus skaiciai') }
if (kintantis2>=kintantis1) {console.log('777 yra didesnis skaicius už 555 "arba lygus" ')} else {console.log('ne: 777 yra mazesnis skaicius uz 555 "arba nelygus" ') }
if (kintantis1>=kintantis2) {console.log('777 yra mazesnis skaicius uz 555 "arba nelygus" ')} else {console.log('555 yra mažesnis skaicius už 777 "arba lygus" ') }





const reiksme1 = 'GeraŠirdis'
console.log(reiksme1.length)

const reiksme2 = 'SkaudiTiesa'
console.log(reiksme2.length)

if (reiksme2>reiksme1) {console.log("skaitine reiksme SkaudiTiesa yra didenė už " )} else {console.log("skaitine reiksme GeraŠirdis yra didenė už SkaudiTiesa skaitine reiksme") };


console.log('Ar vaikinas eis i pasimatyma?');
const arGrazi = true;
const arTurtinga = false;


console.log(arGrazi&&arTurtinga);



console.log('Ar vaikinas eis i pasimatyma?');
const arGrazi1 = true ;
const arTurtinga1 = false;

console.log(arGrazi1||arTurtinga1);




const sarsasN = [`Pazimys`,8,6,7 ]


const varrdas = sarsasN[0]
console.log(varrdas)


const sumasaras = sarsasN[1] + sarsasN[2] + sarsasN[3]
console.log(sumasaras)


let bePazimys = sarsasN.shift(); 
console.log(bePazimys)
console.log(sarsasN)

const reiksmesIlgis = sarsasN.length
console.log(reiksmesIlgis)

const vidurkis = sumasaras / reiksmesIlgis
console.log(vidurkis)


const minibalas = 7

if (vidurkis>=minibalas) {console.log(`ISLAIKYTA`)} else {console.log('NEISLAIKYTA' ) }



/*praktika*/ 


let a=5, b=3

let k;

k = a;
a = b;
b = k;
console.log(a+b)



 g='5'
 j='5'
 i='5'

 console.log (g+j+i)

 p= 6

 o=12
console.log(p+o)

console.log(b+p+j)

let h=2 
console.log(h/Infinity)

const b1 = `Vienguba (') kabute.`;
console.log(b1);

const b2 = `Dviguba (") kabute.`;
console.log(b2);

const b3 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(b3);

const b4 = `Backtick (\`) kabute.`;
console.log(b4)

const b5 = 'Backtick (`) kabute.';
console.log(b5)

const b6 = "Backtick (`) kabute.";
console.log(b6)


// Maryte yra viena is 4 legendiniu studentu.
const studentName = 'Maryte';
const reiksme = 4;

const student = studentName + ' yra viena/s is ' + reiksme + ' legendiniu studentu.';
const student2 = `${studentName} yra viena/s is ${reiksme}studentu.`;

console.log(student);
console.log(student2);

const demo = `Labas, ${studentName}.`;
console.log(demo);

 // Antanas turi 12 obuliu

 const vyras = 'Antanas'; 
 const skaičiai = 12 

 const sakinys = vyras +  ' turi '  + skaičiai +  ' obuoliu.';

 console.log (sakinys); 





/*

 function valiuta(e,d,d) {const rezults =  e + d 
     
     {return `${e} * ${d}  = ${rezults}`} 
 }
 console.log(sum(1.16, 6)) */ 
/*
 Užduotys su IF ir sąrašais(array)
 1. Patikrinkite, ar sąraše yra tam tikras skaičius.
 a. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.
 2. Patikrinkite, ar masyvas tuščias.
 a. Pavyzdys: Patikrinkite, ar sąrašas [] yra tuščias.
 3. Nustatyti, ar sąraše yra teigiamas skaičius.
 a. Pavyzdys: Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių.
 4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai.
 a. Pavyzdys: Patikrinkite, ar [2, 4, 6] yra tik lyginiai skaičiai.
 5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas.
 a. Pavyzdys: Patikrinkite, ar kuris nors skaičius sąraše [3, 5, -2] yra neigiamas.
 6. Patikrinkite, ar pirmas skaičius sąraše yra didesnis už paskutinį.
 a. Pavyzdys: Patikrinkite, ar pirmas skaičius sąraše [1, 3, 5] yra didesnis už
 paskutinį.
 7. Patikrinkite, ar sąrašo ilgis didesnis už 5.
 a. Pavyzdys: Patikrinkite, ar sąrašo [1, 2, 3, 4, 5, 6] ilgis yra didesnis nei 5.
 8. Patikrinkite, ar sąraše yra tik teksto tipo kintamieji
 a. Pavyzdys: Patikrinkite, ar [„obuolys“, ‚bananas‘, „vyšnia“] yra tik tekstai.
 9. Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10.
 a. Pavyzdys: Patikrinkite, ar didžiausias skaičius sąraše [2, 5, 12, 4] yra didesnis
 nei 10.
 10. Patikrinkite, ar masyve yra daugiau nei 3 to paties skaičiaus elementai.
 a. Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau nei 3 skaičiaus 2
 elementus.
 Užduotys su IF
 1. Patikrinkite, ar skaičius teigiamas.
 a. Pavyzdys: Patikrinkite, ar skaičius = 3 yra teigiamas.
 2. Patikrinkite, ar skaičius dalijasi iš 5.
 a. Pavyzdys: Pavyzdys: Patikrinkite, ar skaičius = 15 dalijasi iš 5.
 3. Patikrinkite, ar teksto tipo kintamajame yra daugiau nei 5 simboliai.
 a. Pavyzdys: Patikrinkite, ar eilutėje str = 'hello' yra daugiau nei 5 simboliai.
 4. Patikrinkite, ar asmuo turi teisę balsuoti (amžius didesnis arba lygus 18 metų).
 a. Pavyzdys: Patikrinkite, ar asmuo turi teisę balsuoti, jei jo amžius = 20 metų.
 5. Patikrinkite, ar asmuo yra paauglys (nuo 13 iki 19 metų).
 a. Pavyzdys: Patikrinkite, ar amžius = 15 metų atitinka paauglio amžių..
 6. Patikrinkite, ar skaičius yra nelyginis.
 a. Pavyzdys: Patikrinkite, ar skaičius = 7 yra nelyginis.
 7. Patikrinkite, ar eilutė lygi "JavaScript".
 a. Pavyzdys: Patikrinkite, teksto kintamasis = "JavaScript" yra lygus "JavaScript".
 8. Patikrinkite, ar skaičius yra nuo 10 iki 20 (imtinai).
 a. Pavyzdys: Patikrinkite, ar skaičius = 15 yra tarp 10 ir 20.
 9. Patikrinkite, ar skaičius yra didesnis arba lygus 100.
 a. Pavyzdys: Patikrinkite, ar skaičius = 150 yra didesnis arba lygus 100


/* Užduotys su funkcijomis
1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas.
2. Sukurkite funkciją skaičiaus kvadratui apskaičiuoti.
3. Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį.

4. Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“.
5. Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis.
6. Sukurkite funkciją, kuri į console išvestų priešingą reikšmę (jei skaičius teigiamas,
išvestų neigiamą, jei yra gaunamas žodis tai žodį turi parašyti atvirkčiai. Apsibrėžkite
kokio ilgio žodis turi būti gaunamas! ar 4, ar 5 ar kiek raidžių! imkite vieną
variantą kolkas)
7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.
a. Padaryti su sąrašo (array) tipo kintamuoju
b. Padaryti su keliais skaičių tipo kintamaisiais
8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.
9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'.
10. Sukurkite funkciją trijų skaičių vidurkiui rasti.
11. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį.
12. Sukurkite funkciją dviem eilutėms sujungti.
13. Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai */ 

1. 
const ad = 4 
function skaicius(abc)

{
    if (abc<0) 
        {return 'neigiamas skaicius';} 
    else {return 'teigiamas'} 
    } 

    
console.log(skaicius(ad)) 


/*1.*/ 
const adv= 8 
function skaicius(abc)

{
    if (abc<0) 
        {return 'neigiamas skaicius';}  
    else  {return 'teigiamas'} 
    } 

    
console.log(skaicius(adv))  

/*2.*  Sukurkite funkciją skaičiaus kvadratui apskaičiuoti. */ 


const d = 2
 function kvadratas(abs) { return abs**2} 
 console.log(kvadratas(d))


/*3 Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį.
*/ 

const z = 2 
const r = 3 
function didesnis(a,b) { if (a>b) {return (a)} else if (a<b) {return (b)} }
console.log(didesnis(z,r))

/*4. Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“.*
  
const Java = [JavaScript] 

function zodis([DJ]) { if [ZodiJava] return  ${"yra zodis JavaScript" } else return  ${"nera zodzio JavaScript" } 
    
}
 

/


/*
7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.*/ 

const kr1 = 5 
const kr2 = 9 

function plotas(q,w) {const sum = (q * w); {return sum} }

    

console.log(plotas(kr1,kr2))


/* b. Padaryti su keliais skaičių tipo kintamaisiais*/ 


const kr12 = [2, 36]
console.log(kr12[1]);


function plotas(q,w) {const sum = (q * w); {return sum} }
console.log(plotas(kr12[0],kr12[1]))

/* 1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas. */ 
const ar = 2
const po = ar % 1; 
console.log(po)

// 8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.

let dalmuo = 3 
let bskaicius = 9.9
const dalyba = bskaicius/dalmuo;
console.log(dalyba);


function Ardalijasi3(dali) {  if (dali%1===0 ) {return ("dalijasi")}   else {return ("nesidalija")} }
    
console.log(Ardalijasi3(dalyba))




let dalmuo1 = 3 
let bskaicius2 = 15
const dalyba2 = bskaicius/dalmuo;



function Ardalijasi3(da,al) { let hum = da/al; if (hum%1===0 ) {return ("dalijasi")}   else {return ("nesidalija")} }
    
console.log(Ardalijasi3(bskaicius2,dalmuo1))




// 9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'. 

console.log('Vasara'. includes('V'))

/*

let  pavasaris 

function Raides(Zodziai) { if (Zodziai.includes('a')) {return "yra a"} else {return "nera a"}
     
}

console.log(Raides(pavasaris)); */




      const zodis = "raduo";
     let raidez = 'a';
        
     
     function raidziupatikra(betkokszodis, betkokiaraide) {
            

        if (betkokszodis.indexOf(betkokiaraide) != -1) {return ("yra raide 'A'")
} 
         else {return ("Žodis neturi raidės a");
        }} 

       console.log(raidziupatikra(zodis, raidez))


console.clear()


       const text1 = 'rbata';
const firstSymbol1 = text1[0];

function raide (TTT) {
    

    
    if ( "a" === text1[0]) {
        return (`prasideda 'a'`);
    }
    else  {
        return(`neprasideda 'a'`);
       
    }
}

console.log(raide(text1));



/* 1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą.
2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą.
3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.
4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.
5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.).
6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.).
7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).
8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.).
9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).
10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.
11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5.
12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.
13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!".
Sunkesnės užduotys:
1. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris
dalijasi iš 4, reikia pakeisti žodžiu „Fizz“.
2. Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz",
skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz".
3. Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje.
4. Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite
"Even", o prie kiekvieno nelyginio - "Odd".
5. Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę.
6. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie dalijasi iš 2
arba 3.
7. Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte
pranešimą.
8. Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas.
9. Išspausdinkite visų lyginių skaičių nuo 1 iki 100 sumą */ 


1. 
for (let i = 1; i<= 10; i++) {console.log(i)} 

2. 
for (let i =10; i >=0  ; i--) {console.log(i)}

console.log(`----------`)

3. //Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.
for (let i =2; i <=20  ; i+=2) {console.log(i)}

console.log(`----------`)

4. // Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.
for (let i =2; i <=20  ; i+=3) { console.log(i)}


5. // Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.). 


for (let i =1; i <=10  ; i++) {console.log(i*i)}
for (let i =1; i <=10  ; i++) {console.log(i*i*i)}


7. // Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).
let sk = 7

for (let i =1; i <=10  ; i++) {console.log(sk*i)}

// 8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.). 

 let zx = "*"
for (let i =1; i < zx ; i++) {console.log(zx)}


console.log(`----------`)

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++) {
    const s = `Studento vardas yra ${names[i]}.`;
    console.log(s);
}


let namies = '';
for (let s = 1;  s <=5; s++) 
 {namies = namies + '*'
 console.log(namies);
}
   





const marks = [10, 2, 8, 4, 6];

let sumz = 0;
sumz += marks[0];
sumz += marks[1];
sumz += marks[2];
sumz += marks[3];
sumz += marks[4];
console.log(sumz);

let sum2 = 0;

for (let i = 0; i < marks.length; i++) {
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i];
}

console.log(sum2);

// 9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).


for (let i = 5; i>=1; i--) {
    let strngB = "";
    for (let n = i; n >=1; n--) {
        strngB = strngB + "*";
    }
    console.log(strngB);
}
 



// 10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.



 for (let i=0; i<50; i++) 
    
    {if (i%3===0) {console.log(i)}} 

  

   
 
       
  for (let i=1; i<=50; i++) {if (i%5===0) console.log(i)}

console.log("----------------");

// Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.
for (let i = 0; i < 100; i++) {  if (i%3===0 && i%5===0) console.log(i)
} 

// Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!".
for (let i = 0; i <5 ; i++) {console.log('hello, World')}


////////////////////////////////////////*///////// 
// /* 1. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, 
// kurisdalijasi iš 4, reikia pakeisti žodžiu „Fizz“. */

console.log("----------------");


for (let i = 1; i <=100; i++)  if (i%4===0) 
     {console.log('fizz')}  else {(
console.log(i))}; 

console.log("----------------");



// 2. Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz", 
// skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz".






for (let i = 1; i<= 100; i++) {
    if(i%3 === 0) 
        {console.log("Fizz")}  
    
    if (i%5 === 0) 
        {console.log("Buzz")} 
       
     if (i%3 === 0 && i%5 ===0) 
        {console.log("FizzBuzz")}

     if (i%3 !== 0 && i%5 !==0){console.log(i)}

     
}
/*
3. Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje.
*/ 
/*

for (let i = 0; i <= 10; i++) {
    let n  = n1+n2  
    
    
}*/
 
/*
5. Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę. 77

*/ 
  let ji = 77 
 for (i = 1; i <= 10; i++) {
 console.log(`${i} * 77 = ${77 * i}`)
   
 }



 /* 4 Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite
 "Even", o prie kiekvieno nelyginio - "Odd". */ 


 let Skait = 20
for (i = 1; i <= 20; i++)
    if (i%2===0) {console.log("Even")}
    else if (i%2!==0)  {console.log("odd")}  



   
   /* 6. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie dalijasi iš 2
    arba 3. */


    for (i=1; i<=30; i++) {

        if (i%2===0) {console.log(i)} 
       else  if (i%3===0) {console.log(i)}

    }
        


    for (i=1; i<=30; i++) 

        if (i%2===0 && i%3===0) {console.log(i)} 
        

/* 7. Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte
pranešimą. */ 

const pirminis = [3,4,5,6,8]

/*9. Išspausdinkite visų lyginių skaičių nuo 1 iki 100 sumą */ 


let sums = 0

for ( i = 2; i<=100; i+=2) {

sums = (sums+i)}

console.log(sums)





/*
 public class SumNatural ( public static void main(String() args) 
 ( int num = 100, sum = 0; 
    for(int i = 1; i <= num; ++i)
         ( // sum = sum + i; sum += i; ) 
        System.out.println("Sum = " + sum); 

*/ 
/*
7. Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte
pranešimą.
*/
// && i/nn>2
//  if ()



let nn = 2 


 for (i=1; i<=15; i++)
  
    
if (i%2===0 || i%3===0)


{console.log(`${i }` +'--antrinis'  )}
 else {console.log(`${i}`+ ' -- pirminis')} 

 
   


    
     