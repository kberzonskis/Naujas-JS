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
console.log('--23--');

 
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


console.log('------------');

const visasSarasas = (Saule +' '+ Sviecia+ ' ' + Kai +' '+Diena + ' ' +Grazi)   
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

 
   
 
 
 


 let xy = 15

 function isPrime(num) {
    if (num <= 1) return  `${num}' yra-- antrinis'`  ;
    if (num <= 3) return    `${num}''--pirminis'` ; 
    if (num % 2 === 0 || num % 3 === 0) return   `${num}' 'yra--antrinis'`;
    for (let i = 5; i * i <= num; i += 6) 
        
        {
               if (num % i === 0 || num % (i + 2) === 0) return  `${num}''yra--antrinis'`;
    }
    return `${num}' yra -- pirminis'`;
}

 
console.log(isPrime(xy))



// 8. Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas.


/*


1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą
2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną
3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę
4. Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į
ekraną išvestų žodį ‘BOOM’
5. Parašykite for ciklą, kuris isudėtų visus lyginius skaičius nuo 3 iki 18
6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.
7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano
vardas - ’ console log eilutės pradžioje
8. Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.
9. Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki
pirmo
10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės
(1, 2, 5, 10, 20, 50, 100, 200, 500)
11. Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį
Žodis, kurio reikšmė yra ‘Labas’
12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas
raidę.
13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į
consolę reikšmę
14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą
15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10
16. Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]
elementus vienas po kito nuo galo iki pradžios
17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas =
‘samivamargorP’ atskiras raides vieną po kitos
18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi
iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’
19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo
Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)
20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų
visus skaičius, kurie yra mažesni už 100
21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra
22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14]
elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą.
23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome
yra raidžių e
24. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio
Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra:
PVZ: Žodžiui Keletą būtų išvedama:
e raidė yra 2 vietoje
e raidė yra 4 vietoje
25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei
mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.
Funkcijos
1. Parašykite funkciją, kuri grąžina dviejų skaičių sumą.
2. Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą.
3. Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą.
4. Parašykite funkciją, kuri grąžina dviejų skaičių dalybą.
5. Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį.
6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas.
7. Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis.
8. Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis.
9. Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos.
10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.
11. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10.
12. Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių.
13. Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių.
14. Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi.
15. Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs.
16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10.
17. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100.
18. Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas.
19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo
skaičiaus, kurį nusiunčiate funkcijai.
20. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas,
ar žmogus pilnametis).
21. Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“.
22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.
23. Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę.
24. Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę.
25. Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“.
26. Parašykite funkciją, kuri grąžina žodžio ilgį.
27. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio
ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba
trumpesnis
28. Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi.
29. Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos
valandos (0–23).
30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi:
a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’
b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’
c. Skaičius yra nulis, išveda į console ‘esu nulis’
d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’
e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas
*/ 



//1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą

console.log('----------------------------')


let suma = 0 

for (i=5; i<=15; i++) 
    {suma = (suma + i); 

} console.log(suma);


// 2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną

let zod = 'Vakaras'
for (i=0; i<zod.length; i++) {
    let raides = zod[i]
   console.log(raides) ;
} 

// 3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

let dauginamasis = 7 
for (i=1; i<=10; i++)
{let lentele = `${dauginamasis} *  ${i} = ${dauginamasis*i}` 
;console.log(lentele)
}


/* 4. Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į
ekraną išvestų žodį ‘tiesa’ */

for (i=5; i>=0; i--) { 
   
    if (i===0)   console.log('Tiesa'); else
    console.log(i)
  

       }     




   //    5. Parašykite for ciklą, kuris sudėtų visus lyginius skaičius nuo 3 iki 18

let sumaLyginiai = 0 

for (i=4; i<=18; i+=2 ) { 
sumaLyginiai = (sumaLyginiai+i) 
;

} console.log(sumaLyginiai + ' ---- yra geri skaiciai')


// 6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.


let elementai = [5,7,8,10,12] 

for (i=0; i<elementai.length; i++ ) { 
    
   console.log(elementai[i])
   


}  

// 7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus,
//  pridėdamas ‘Manovardas - ’ console log eilutės pradžioje

let vardai = ['Kefa', 'Johananas', 'Mirjam'] 
for (i=0; i<=2; i++) { 
    const vardu = `Mano vardas ${vardai[i]}`
    console.log(vardu);

 } 
console.log('-----------');


 let vardaii = ['Kefa', 'Johananas', 'Mirjam'] 
 for (i=0; i<=2; i++) { 
   
     console.log(`Mano vardas ${vardaii[i]}`);
 
  } 
  console.log('-----------');
 
  let vardaiii = ['Kefa', 'Johananas', 'Mirjam'] 
  for (i=0; i<vardaiii.length; i++) { 
    
      console.log(`Mano vardas ${vardaiii[i]}`);
  
   } 
  

  // 8. Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.

  let sarasas =  [7, 5, 8, 10, 12]
  let sumos = 0
  for (i = 0; i<5; i++) 
   {
    sumos += sarasas[i]};

    console.log(sumos)
        
         
   // 9. Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki pirmo
   
   
    
    let sar =  [7, 5, 8, 10, 12]
    for (i=sar.length-1; i>=0; i--) {  
   
   console.log(sar[i]);
    }          
    
    

/* 10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės 
() */ 


let pinigai = [1, 2, 5, 10, 20, 30, 100, 200,300, 500]

for (i=1; i<=pinigai.length; i++)
     {if (i===5 || i===10 || i===20 || i===50 || i===100 || i===200 || i===500) 
        
        console.log(i)
        } 
     


       /* 11. Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį
        Žodis, kurio reikšmė yra ‘Labas’ */

        let String = ['L','a','b','a','s'];  
        let labass = ''
        for (i = 0; i<String.length; i++) { 
        labass +=  String[i] 
      }  console.log(labass); 



        
      // 12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas
      // raidę. 
            
let pit = 'Programavimas'
for (let i = 0; i<pit.length; i++) {
   
   console.log(pit[i]) } 

   // 13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į
  //  consolę reikšmę


  let sumss = 1
 for (i=2; i<= 10; i++)
    
      {  sumss = sumss  * i; 
      }  console.log(sumss);
      
 



   //   14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą
console.log(`-----14---------`);


let skai = 30 
let sum32 = 0
for (let i = 1; i <=30 ; i+=2) {

sum32 += i

  
  
 
}
console.log(sum32);
  


console.log(`----14------------`);


 //   14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą

let sum32y = 0

for (let i = 0; i <=30 ; i++) { if (i%2==!0)
sum32y+=i
  
;}




console.log(sum32y);







   

// 15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10



      for (let i=20; i>=10; i--){ console.log(i)
       } 



   /*    16. Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai  [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]
elementus vienas po kito nuo galo iki pradžios
*/ 



const Sabal = ['s','a','b','a','L'];  

for (let i=Sabal.length-1; i>=0; i--) { console.log(Sabal[i])
 
}; 


/*
17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas =
 atskiras raides vieną po kitos */ 

const ZodisAtbulai = 'samivamargorP' 

for (let i=0; i<ZodisAtbulai.length; i++) {console.log(ZodisAtbulai[i])
 }



 // 18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi
// iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’ 

for (i = 0; i<=100; i++) {if (i%7===0) console.log('Lucky'); else console.log(i);
}
 

/* 19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo
Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16) */ 

let dvigubinti = [2,3,6,8]

for (let i=0; i<dvigubinti.length; i++) { console.log(dvigubinti[i] * 2)
    
    
    
    } 



    
let dvigubint = [2,3,6,9]
let sandauga = 0
for (let i=0; i<dvigubinti.length; i++) {
    
    sandauga = (dvigubint[i] * 2) 
 
  console.log(sandauga);
    
    } 
    
    

 /*   20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių išvestų
visus skaičius, kurie yra mažesni už 100 */ 


const DaugSkaiciu = [2, 14, 10, 1000, 503, 8, 0]  

for (i=0; i<DaugSkaiciu.length; i++) { if (DaugSkaiciu[i]<100)  console.log(DaugSkaiciu[i]);
}


console.log('21-------------');


// 21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra

let zz = 'pavasaris'
let rz = zz.toString(zz);
console.log(rz);
console.log('22-------------');
let zo2 = rz.split('')
console.log(zo2);
let Acount = ''
for (i=0; i<zo2.length; i++) { if (zo2[i]=== 'a') Acount++
    
} console.log(Acount); 

console.log('-------------');

/*
22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14]
elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą. */ 

let PridėsiuSkaičių = [2, 8, 88, 14]

for (let index = 0; index < PridėsiuSkaičių.length; index++) {
    const element = PridėsiuSkaičių[index] + 2;
    console.log(element);
    
}

console.log('-------23------');

/*
23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje 
yra raidžių e
*/ 
 let eCount= 0
let fd = 'Nebeprisikiškiakopūstėliaudavome' 
for (let i = 0; i < fd.length; i++) {
  
    if (fd[i]==='e') eCount++     
    
} console.log(eCount);

console.log('------24-------');
/*
24. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio
Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra:
PVZ: Žodžiui Keletą būtų išvedama:
e raidė yra 2 vietoje
e raidė yra 4 vietoje */ 


let Counter = 'Nebeprisikiškiakopūstėliaudavome'
let targetLetter = 'e'
for (let i = 0; i < Counter.length; i++) {
  
    if (Counter.charAt(i)===targetLetter) 
        
   console.log(`${targetLetter}` + ' yra pozicijoje ' + i); }
    
   console.log('------25-------');

/*25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei
mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.
*/



let Lobis = 150;
for (let i = 20; i >= 15; i--){
   Lobis = Lobis - i
    console.log(Lobis);
}








// 1. Parašykite funkciją, kuri grąžina dviejų skaičių sumą.
let am=3
let bm=2 
function sumoss(a,b) { 
 
let rezult =0 
 rezult = a+b  
 return rezult

}; console.log(sumoss(am,bm))

/*
2. Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą. */

let v12 = 15 
let v11 = 23

function jim(a,b) { 
let rezult = 0 
rezult = a-b 
return [rezult-15];


} console.log(jim(v12,v11));


/* 3. Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą. */ 
let vg = 98 
let gv =89

function Jimj(a,b) { 
let rezult = 0 
rezult = a*b 
return {rezult}

} console.log(Jimj(vg,gv));

/*Funkcijos 


6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas.

*/ 
let go = -1

function Jimy(dib) { if (dib>0) return 'tegiamas'; else return 'neigiamas'} 
console.log(Jimy(go));

// 10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100   
let zyp = 99 
function zy(simtas)
{ if (simtas===100) return  `skaicius lygus 100`; else return `skaicius nera lygus 100`} 
console.log(zy(zyp));




function zy(simtas){ 
 let zyp = 100

if (zyp===100) return  `skaicius lygus 100`; else return `skaicius nera lygus 100`;   
 } console.log(zy())


// 16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10. 

function vy() {

if (zyp>0&&zyp<=10) return 'yra tarp skaiciu'; else return 'nera tarp skaiciu'

} console.log(vy());


// 27. Parašykite funkciją, 
// kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio ilgio. 
// Ilgas žodis yra 7 simbolių ilgio arba didesnis, 
// o trumpas yra 6 simbolių ilgio arba trumpesnis 


let df = 'kl'
function sugrazina(s) {

  if (s.length>=7) return 'Ilgas'; else if (s.length<=6&&s.length>3) return 'trumpas'; else return 'per trumpas'

} console.log(sugrazina(df));



// 29. Parašykite funkciją, kuri grąžina „Sviesos metas“ arba „Tamsos metas“, priklausomai nuo perduotos valandos (0–23). 
function dienaNaktis() {
let sk = 6
if (sk>=7&&sk<=23) return 'Sviesos metas'; else return 'Tamsos metas'

}console.log(dienaNaktis());


/* 30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi: 
a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’ 
b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’ 
c. Skaičius yra nulis, išveda į console ‘esu nulis’ 
d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’ 
e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas */

let skd = 60



function patikrinti() {

if (skd>0) console.log('teigiamas');  
if (skd<0)  console.log('neigiamas');
; 
if (skd===0) console.log('nulis');
if (skd>100) console.log('didžiulis skaičius');
if (skd<100) console.log('mazesnis uz 100');
if (skd>50) return ('didesnis 50');



} console.log(patikrinti(sk))

// Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“
let zot = 'Arbata'
function firstSymbolis(zot) {if (zot.charAt('A') === 'A') return true; else return false} 

console.log(firstSymbolis(zot));
console.log(firstSymbolis('Bgap'));












/* 22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.



function faktorial(params) { 

for (i=6; i>=1; i--) 

k=a
console.log((i)) 
} ;  console.log((i)) 


*/
/*

function countLetter(word, letter) {
let count = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCace() === letter.toLowerCace()) {
    count++;
  }
}
return count;
}
console.log(countLetter('kakavinukas', 'k'));


*/
/*

function countLettr(word, letter) {
  let count =0;
 for (let i = 0; i < word.length; i++) {
   if (word[i].toLowerCase() === letter.toLowerCase()) {
      count++;
  }
  }
  return count;
}

console.log(countLettr("Ananasas", 's'));












//1 uzd1. Parašykite funkciją, kuri išvestų skaičiaus faktorialą


// function  factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }

// console.log(factorial(5));



//2 uzd Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba sakinyje
//2 uzd Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba sakinyje
//   function countLetter(word, letter) {
//       let count =0;
//       for (let i = 0; i < word.length; i++) {
//         if (word[i].toLowerCase() === letter.toLowerCase()) {
//            count++;
//         }
//       }
//       return count;
//     }

//     console.log(countLetter("Ananasas", 'A'));




// //11 Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda „A“ raide
// function vardaiSuA(vardai) {
//   return vardai.filter(v => v.startsWith('A'));
// }

// console.log(vardaiSuA(['Tomas', 'Andrius', 'Augustė', 'Justas']))




//12  Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą
//  
/* function rastiPasikartojanti(masyvas) {
for (let i = 0; i < masyvas.length; i++) {
  for (let j = i+1; j < masyvas.length; j++) {
    if (masyvas[i] === masyvas[j]) {
      return masyvas[i];
    }
  }
}

return "neradau";
}


console.log(rastiPasikartojanti([1, 0, 2, 4, 3, 0])) */


//13 13. Sukurk funkciją, kuri grąžins visus duoto sąrašo skaičius, kurie yra tarp dviejų nurodytų reikšmių:  ([2, 5, 36, 8, 15, 6] masyvui nurodžius 5 20 intervalą, bus grąžinama [5, 8, 15,6] )

//   function tarpReiksmiu(masyvas, nuo, iki) {
//     let rezultatas = [];
//     for (let i = 0; i < masyvas.length; i++) {
//       if (masyvas[i] >= nuo && masyvas[i] <= iki) {
//         rezultatas = masyvas[i];
//       }
//     }
//   }
//   console.log(tarpReiksmiu);




//14 . Parašykite funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose yra raidė e
//   function zodziaiSuE(zodziai) {
//     let rezultatas = [];
//     for (let i = 0; i < zodziai.length; i++) {
//       if (zodziai.includes("e")) {
//         rezultatas.push(zodziai);
//       }
//     }
//     return rezultatas;
//   }

//   console.log(["taip", 'ne', 'gerai', 'blogai'])



//15 parasykite funkciją, kuri ieškotų masyve vienetų ir dvejetų. Pamačiusi vienetą funkcija turi parašyti 'vienas vargas', o suradusi 2, turi parašyti 'du gaideliai'

//   function viensdu(num)
//   {
//     for(let i = 0; i < num.length; i++)
//     {
//         let atsakymas 
//         if(num[i]===1)
//             atsakymas = "vienas vargas";
//             return atsakymas;
//         if(num[i]===2)
//             atsakymas ="du gaideliai";
//             return atsakymas;
//     }
//   }

//   console.log(viensdu([2, 2, 1, 5, 1, 2]));

/*
String text = "test string";
char firstSymbol = text[0];

/*

4. Parašykite funkciją, kuri grąžina dviejų skaičių dalybą. 
5. Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį. 
6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas. 
7. Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis. 
8. Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis. 
9. Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos. 
10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.
11. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10. 
12. Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių. 
13. Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių. 
14. Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi. 
15. Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs. 
16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10. 
17. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100. 
18. Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas. 
19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo skaičiaus, kurį nusiunčiate funkcijai. 
20. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas, ar žmogus pilnametis). 
21. Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“. 
22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai. 
23. Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę. 
24. Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę. 
25. Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“. 
26. Parašykite funkciją, kuri grąžina žodžio ilgį. 
27. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba trumpesnis 
28. Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi. 
29. Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos valandos (0–23). 
30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi: 
a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’ 
b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’ 
c. Skaičius yra nulis, išveda į console ‘esu nulis’ 
d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’ 
e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas */


/*
1. Parašykite funkciją, kuri išvestų skaičiaus faktorialą 
2. Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba 
sakinyje 


4. Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas 
5. Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje 
6. Sukurk funkciją, kuri visus tarpus tekste pakeičia pabraukimais (underscore) 
7. Sukurk funkciją, kuri padvigubina visus skaičius masyve 
8. Sukurk funkciją, kuri suranda ilgiausią žodį sakinyje 
9. Funkcija, kuri išrikiuoja žodžius pagal ilgį didėjančia tvarka 
10. Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7 
11. Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda „A“ raide 
12. Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą 
13. Sukurk funkciją, kuri grąžins visus duoto sąrašo skaičius, kurie yra tarp dviejų nurodytų 
reikšmių ([2, 5, 36, 8, 15, 6] masyvui nurodžius 5 20 intervalą, bus grąžinama [5, 8, 15, 
6] ) 
14. Parašykite funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose 
yra raidė e
*/  

/*
5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas.
a. Pavyzdys: Patikrinkite, ar kuris nors skaičius sąraše [3, 5, -2] yra neigiamas.

*/ /*
console.log('--8888--');



let ski = [3, 5, -3] 
function minusinis(r) {

let hasNegative = (r => r < 0)

for (hasNegative.i=0; i<r.length; i++)
if (r[i]<0) 
  return true 
else return false
} 
       
       console.log(minusinis(ski
       ));




/* 15 parasykite funkciją, kuri ieškotų masyve vienetų ir dvejetų. Pamačiusi vienetą funkcija turi parašyti 'vienas vargas', o suradusi 2, turi parašyti 'du gaideliai'

//   function viensdu(num)
//   {
//     for(let i = 0; i < num.length; i++)
//     {
//         let atsakymas 
//         if(num[i]===1)
//             atsakymas = "vienas vargas";
//             return atsakymas;
//         if(num[i]===2)
//             atsakymas ="du gaideliai";
//             return atsakymas;
//     }
//   }

//   console.log(viensdu([2, 2, 1, 5, 1, 2]))*/

/*

let arr = [12, 34, 13, -1, -4, 45, -55, -66];

for (let i = 0; i < arr.length; i++) {
if (arr[i] < 0) console.log(true); else return (false);

}  */


console.log('--5--');


let arr = [12, 34, 13, -1, -4, 45, -55, -66];

// For loop to print negative numbers

for (let i = 0; i < arr.length; i++) 

{
if (arr[i] < 0) console.log(true); else console.log( false);
 
         

} 







/*
    public static void main(String args[]){
        String string = ("You are awesome honey");
        for (int i = 0 ; i<string.length() ; i++)
        if (string.charAt(i) == 'o')
        System.out.println(i);...







       /*

    public class LetterCounter {
        public static void main(String[] args) {
            String inputString = "Hello, World!";
            char targetLetter = 'o';
            
            int count = 0;
            List<Integer> positions = new ArrayList<>();
            
            for (int i = 0; i < inputString.length(); i++) {
                if (inputString.charAt(i) == targetLetter) {
                    count++;
                    ;
                }
            }
            
            System.out.println("The letter '" + targetLetter + "' appears " + count + " times.");
            System.out.println("Positions: " + positions);
        }
    }


/*


    public static void showLetterPositions(String str) {
        for (int i = 0; i < str.length(); i++) {
            char letter = str.charAt(i);
            int position = i + 1; // Position is 1-based
            System.out.println("Letter: " + letter + " Position: " + position);
        }
    }
}





/*
let commas = 0;
for( i = 0; i < helloWorld.length(); i++) {
  if(helloWorld.charAt(i) == ',') commas++;
}
System.out.println(helloWorld + " has " + commas + " commas!");...







/*
console.log(zo[0]);

const text= 'pomidoras'; 
console.log(text[0]); 
console.log([text.length -1]); 




const textu = 'papajus';
const symbols = [];

for ( i of textu) {
    if (symbols[i]) {
        symbols[i]++;
    } else {
        symbols[i] = 1;
    }
}
console.log(symbols); *


/*
    public static void main(String args[]){
        String string = ("You are awesome honey");
        for (int i = 0 ; i<string.length() ; i++)
        if (string.charAt(i) == 'o')
        System.out.println(i);...







       /*

    public class LetterCounter {
        public static void main(String[] args) {
            String inputString = "Hello, World!";
            char targetLetter = 'o';
            
            int count = 0;
            List<Integer> positions = new ArrayList<>();
            
            for (int i = 0; i < inputString.length(); i++) {
                if (inputString.charAt(i) == targetLetter) {
                    count++;
                    ;
                }
            }
            
            System.out.println("The letter '" + targetLetter + "' appears " + count + " times.");
            System.out.println("Positions: " + positions);
        }
    }


/*


    public static void showLetterPositions(String str) {
        for (int i = 0; i < str.length(); i++) {
            char letter = str.charAt(i);
            int position = i + 1; // Position is 1-based
            System.out.println("Letter: " + letter + " Position: " + position);
        }
    }
}





/*
let commas = 0;
for( i = 0; i < helloWorld.length(); i++) {
  if(helloWorld.charAt(i) == ',') commas++;
}
System.out.println(helloWorld + " has " + commas + " commas!");...







/*
console.log(zo[0]);

const text= 'pomidoras'; 
console.log(text[0]); 
console.log([text.length -1]); 




const textu = 'papajus';
const symbols = [];

for ( i of textu) {
    if (symbols[i]) {
        symbols[i]++;
    } else {
        symbols[i] = 1;
    }
}
console.log(symbols); */


const ars = [2,3,6,8,4,5,7,9,10]
const ars2 =[2,8,6,7,4,5,7,8,9]

   for  (i=0; i<ars.length; i++) {
    let element = ars[i] + ars2[i];
    
    console.log(element);
   }



/*
   let ski = [3, 5, -3] 
function minusinis(r) {

let hasNegative = (r => r < 0)

for (hasNegative.i=0; i<r.length; i++)
if (r[i]<0) 
  return true 
else return false
} 
       
       console.log(minusinis(ski
       ));
*/
console.clear()
console.clear()

console.log('---31---');

let day =  [1,1,1,1,1,1,1]
let arry = [1,1,1,1,1,1,1]
let sumasx = 0
let elemen = 0

for (let i = 0; i < 2; i++) {
    for ( n = 0; n < arry.length; n++) {
        
        
  elemen += arry[n]+day[i];
  console.log('---36---');
  
   console.log(arry[n]);
   
   
     
}
    } console.log(elemen) 
  
  

    
   


    console.log('---33---');
let element =0
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <=array.length; i++) {
    
    console.log('---0---');
   
}


//● Parašykite funkciją, kuri grąžina visų sveikų skaičių nuo 1 iki n kvadratų sumą.
const kvadrat = [1,2,3,4,5,6,7,8,9,10]
let kvsum = 0 

for (let i = 0; i < kvadrat.length; i++) { 
    kvsum += kvadrat[i] ** 2; 
    console.log(kvadrat[i] ** 2);
} console.log(kvsum);

/* Parašykite funkciją, kuri patikrina, ar du žodžiai yra anagramos.* */

const anagram = (word1, word2) => {
    const sortedWord1 = word1.toLowerCase().split('').sort().join('');
    const sortedWord2 = word2.toLowerCase().split('').sort().join('');
    return sortedWord1 === sortedWord2;
}
console.log(anagram('Listen', 'silent')); 
console.log(anagram('savi', 'siva'));
console.log(anagram('Hello', 'World'));




/* ● Parašykite funkciją, kuri pašalina dublikatus iš masyvo. */
const arrys = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const removeDuplicates = (arrys) => { 
    return [...new Set(arrys)];
}

console.log(removeDuplicates(arrys)); // [1, 2, 3, 4, 5]


const artte = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

function removeDuplicates() {
    const uniqueArray = []; 
    for (let i = 0; i < uniqueArray.length; i++) {
        if (!uniqueArray.includes(uniqueArray[i])) {
            uniqueArray.push(uniqueArray[i]);
        }
    }
}
console.log(removeDuplicates(artte)); // [1, 2, 3, 4, 5]



/*● Parašykite funkciją, kuri grąžina pirmą pasikartojantį elementą masyve. */ 







const t2 = 'kultivatorius' 
const t2Parts = t2.split('') 
console.log(t2Parts);

const Parts3 = t2Parts.join('')
console.log(Parts3);

 
/*
/* ●  

● Parašykite funkciją, kuri patikrina, ar skaičius yra pirminis. 
/* Parašykite funkciją, kuri patikrina, ar du žodžiai yra anagramos. */
/*
● Parašykite funkciją, kuri grąžina skaičiaus faktorialą. 
● Parašykite funkciją, kuri patikrina, ar žodis yra palindromas (skaitomas vienodai iš 
abiejų pusių). 
● Parašykite funkciją, kuri grąžina dažniausiai pasikartojantį elementą masyve. 
● Parašykite funkciją, kuri grąžina n-tą Fibonacci sekos narį. 
● Parašykite funkciją, kuri sukeičia kiekvieną gretimą masyvo porą (jeigu pora 
neegzistuoja, paskutinis lieka nepakitęs). Pvz: masyvo [1234] elementai turėtų pasikeisti 
į [2143] 
● Parašykite funkciją, kuri grąžina masyvą tik su lyginiais skaičiais. 
● Parašykite funkciją, kuri grąžina didžiausią skaičių masyve. 
● Parašykite funkciją, kuri apskaičiuoja vidurkį masyvo elementų. 
● Parašykite funkciją, kuri grąžina masyvą, kuriame kiekvienas elementas yra 
padaugintas iš 2. 
● Parašykite funkciją, kuri iš duoto teksto paverčia pirmą raidę kiekviename žodyje į 
didžiąją. 
● Parašykite funkciją, kuri suskaičiuoja balsių kiekį tekste. 
● Parašykite funkciją, kuri apverčia masyvą nenaudodama .reverse(). 
● Parašykite funkciją, kuri patikrina, ar masyvas yra simetriškas (vienodas iš abiejų galų). 
● Parašykite funkciją, kuri sukuria atsitiktinį sveiką skaičių tarp min ir max (imtinai). 
● Parašykite funkciją, kuri patikrina, ar visi masyvo elementai yra unikalūs. 
● Parašykite funkciją, kuri grąžina true, jei masyvas yra nuolat didėjantis. Pvz: masyvas 
[1 4 6] bus true, o masyvas [ 1 2 4 1] bus false 
● Parašykite funkciją, kuri grąžina žodžių kiekį sakinyje. 
● Parašykite funkciją, kuri surūšiuoja masyvą mažėjančia tvarka. 
● Parašykite funkciją, kuri pakeičia visus simbolius string'e į žvaigždutes, išskyrus 
paskutinius 4. 
● Parašykite funkciją, kuri apskaičiuoja skirtumą tarp dviejų datų dienomis. 
● Parašykite funkciją, kuri konvertuoja pirmąją raidę į mažąją, jei ji buvo didžioji. 
● Parašykite funkciją, kuri suskaičiuoja, kiek duotame tekste žodžių yra bent 5 simbolių 
ilgio. 
● Parašykite funkciją, kuri grąžina visus skaičius nuo start iki end kaip masyvą. 
● Parašykite funkciją, kuri randa antrą didžiausią skaičių masyve. 
● Parašykite funkciją, kuri paverčia sekundes į formatą hh:mm:ss. 
● Parašykite funkciją, kuri skaičiuoja, kiek kartų duotas simbolis pasikartoja string'e. 
● Parašykite funkciją, kuri iš objektų masyvo išfiltruoja tik tuos, kurių reikšmė aktyvus: 
true. 
● Parašykite funkciją, kuri sugrąžina true, jei masyve yra bent viena neigiama reikšmė. 
● Parašykite funkciją, kuri konvertuoja tekstą į „slug“ formą: mažosios raidės ir - vietoj 
tarpų. 
● Parašykite funkciją, kuri patikrina, ar string'as baigiasi nurodytu tekstu. 
● Parašykite funkciją, kuri apskaičiuoja visų teigiamų skaičių sumą masyve. 

*/