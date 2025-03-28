
function stringReverse (text) { let rezult = ''; 
 
    for (let i = text.length - 1; i>=0; i-- ) { rezult +=text[i]}
    
    return rezult} 
    
    console.log (stringReverse('abc')); 
    console.log (stringReverse('sula')); 
    console.log (stringReverse('sudek')); 
    console.log (stringReverse('uzu')); 
    console.log (stringReverse('sachmatai')); 
    
    /***/ - 2 
    
    
    function stringReverse (text) { let rezult = ''; 
     
        for (let i = 0;  i< text.length; i++)  {rezult += text[text.length - i]} 
        
        return rezult;}
    
    console.log (stringReverse('abc')); 
    console.log (stringReverse('sula')); 
    console.log (stringReverse('sudek')); 
    console.log (stringReverse('uzu')); 
    console.log (stringReverse('sachmatai')); 




