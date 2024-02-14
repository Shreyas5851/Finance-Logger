// let nme:string = "Shreyas";
// console.log(nme);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input =>{
    console.log(input);
});

const area = (side:number) => {
    return Math.pow(side,2);
}

console.log(area(4));

let names = ['shreyas', 'rushikesh', 'gaurav'];
names.push("Tejas");
console.log(names);

let num = [10,20,30];
num.push(40);
num[0] = 50;
console.log(num);

let mix =  ['shreyas', 10, 'rushikesh', 30];
mix.push('gaurav');
mix.push(40);
console.log(mix);

let student = {
    nme: 'Ram',
    marks: 8.5,
    age: 20,

};

console.log(student.age);

console.log("working");

let agreet = () => {
    console.log('hello, again');
}

const add = (a:number, b:number) => {
    return a + b;
}
console.log(add(10,20));

let greet: (a:string, b:string) => void;

greet = (name:string, greeting:string) =>{
    console.log(`${name} says ${greeting}`);
}

greet('Shreyas', 'Welcome');

let calc: (a:number,b:number,c:string) => number;
calc = (num1:number, num2: number, action:string) =>{
    if(action === "add"){
        return num1 + num2;
    }else if(action === "minus"){
        return num1 - num2;
    }else if(action === "multiply"){
        return num1 * num2;
    }else{
        return num1 / num2;
    }
}

let result = calc(5,6,"multiply");
console.log(result);    

let logdetails: (obj: {name:string, age:number}) => void;

logdetails = (test: {name:string, age:number}) => {
    console.log(`${test.name} is ${test.age} years old`);
}
let shreyas = {
    name: "Shreyas",
    age: 21
};
logdetails(shreyas)

