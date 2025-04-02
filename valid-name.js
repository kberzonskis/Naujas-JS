function validName(name) { let firstletterName = name[0].toUpperCase(); 
    const restletters = name.slice(1).toLowerCase();
let properName = ""
return properName + restletters 
}


console.log(validName('jonas'), '-->', 'Jonas') 
console.log(validName('MAryte'), '-->', 'Maryte') 
console.log(validName('jonAS'), '-->', 'Jonas') 




