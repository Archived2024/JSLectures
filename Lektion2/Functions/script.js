// let age = 50;
// //const firstName = 'Nisse';
// var firstName; 

// if(true){
//     //let age2 = 45;
//     var age2 = 45;
//     console.log('Inne i kodblocket', age2);

//     if(true){
//         let age = 10;
//         var global = 'var';
//         console.log('Inne i andra kodeblocket', age, global, firstName);
//     }
// }

// console.log('Utanför kodblock', age, global);

// console.log(firstName);

// // let firstName = 'Nisse';
// // const firstName = 'Nisse';
// firstName = 'Nisse';

// console.log(firstName); 

//---------------------------------------------

const hej2 = function(){
    console.log('hej2');
};
const hej3 = () => console.log('hej3');

hej();
hej2();
hej3(); 

function hej(){
    console.log('hej');
};

console.log('--------------------------');

function calc(num1, num2){
    const sum = +num1 + +num2;
    console.log(sum);
    return sum; 
}

calc(2,'4');

let sum = calc(2,'4');
console.log(sum);



function calc2(num1 = 0, num2 = -1){
    const sum = +num1 + +num2;
    console.log(sum);
    //Console.WriteLine(sum);
}

calc2(3,6); 


const calc3 = (num1=1, num2=2) => num1+num2;

var sum2 = calc3();
console.log(sum2);

console.log('--------------------------');

const argumentFunc = function(num1){
    console.log(num1);
    console.log(arguments[1]);
    console.log('-----------')

    for(const arg of arguments){
        console.log(arg);
    }
}
argumentFunc(1,10, 'hej', {firstName: 'Kalle'}, [1,2,3]); 

console.log('--------------------------');

const callbackFunc =(nr1, nr2, cb)=>{
    let sum = nr1 + nr2; 
    cb(sum);
}

callbackFunc(2,3,  (sum) => console.log('Sum: ' + sum)); 

callbackFunc(5,3, function(sum){
console.log('Sum: ' + sum)
});

const test = function(sum){
    console.log('Sum: ' + sum);
};

callbackFunc(5,5, test);

const callBack2 = (numbers, cb) =>{
    const numbersWhichMeetCriteria = [];

    for(const num of numbers){
        if(cb(num)){
            numbersWhichMeetCriteria.push(num); 
        }
    }
    return numbersWhichMeetCriteria;
}

var res = callBack2([1,4,6,'hej',75,100,52,2], (num) => num < 50);
console.log(res);

console.log('--------------------------');

//Methods

const names =['Kalle', 'Sten', 'Anna']

names.forEach(fName =>{
    console.log(fName);
});

let kallesName = names[0];
console.log(kallesName.toUpperCase());

const user = {
    firstName: 'Kalle',
    lastName: 'Karlsson',
    getFullName: function(){
        console.log(this)//refererar till Objektet
        return `${this.firstName} ${this.lastName}`
    },
    getFullName2: () =>{
        console.log(this)//referar till Window
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.getFullName());
console.log(user.getFullName2());




