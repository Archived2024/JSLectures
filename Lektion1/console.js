// console.log('This is log');
// console.warn('This is a warning');
// console.error('This is error');

var age = 36; //Global, undvik

//console.log(age);
//age = 'Kalle'; 

//console.log(age); 

//let age2 = 36;
const age3 = 36; 

// console.log(age2);
// console.log(age3); 

// if(age3 == '36') //true (== jämför värde)

// if(age3 === '36') //false (=== jämför värde och typ)


if(age3 === 36){
    let age2 = 35; //Lokal variabel
    console.log(age);
    console.log(age2);
    var firstName = 'Kalle'; //Global variabel
}

//console.log(age2);
console.log(age, firstName, age3); 