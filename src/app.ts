// console.log("Hello");
// const anchor = document.querySelector('a');
// console.log(anchor?.href);
import { ListTemplate } from './classes/ListTemplate.js';
import {Invoice} from './classes/invoice.js';
import {payment} from './classes/payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Shreyas", "Web work", 250);
// docTwo = new payment("Rushi", "App work", 300);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

//------------------------------**-----------------------------**---------------------------

// const invOne = new Invoice('Shreyas','website work',300);
// const invTwo = new Invoice('Rushi','app work',400);

// // console.log(invOne,invTwo);

// let Invoices: Invoice[] = [];
// Invoices.push(invOne);
// Invoices.push(invTwo);

// // console.log(Invoices);
// Invoices.forEach(inv =>{
//     console.log(inv.format());
// });


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list templete instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event) =>{
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc);  

    list.render(doc, type.value, 'end');
})

