import { invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
// type casting with DOM using the 'as' keyword
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// class invoice imported from invoice.ts
// const invOne = new invoice('mario', 'work on the mario website', 250);
// const invTwo = new invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne, invTwo);
// let invoices: invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// interfaces
// interface isPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: isPerson = {
//   name: 'shaun',
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log('I spent', amount);
//     return amount;
//   },
// };
// // interfaces with classes
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumping work', 20);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'omar', age: 31 });
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourseName: 'person',
    data: { name: 'Omar' },
};
const docFour = {
    uid: 2,
    resourseName: 'shoppingList',
    data: ['apple', 'tomato']
};
console.log(docThree, docFour);
// ENUMS 
