// const colors = []

// colors.push('black');
// colors.push('white');
// colors.unshift('red');

// console.log(colors);

// for (i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log(i);


// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     register(){
//         console.log(this.username+' is now registered');
//     }
// }

// let boby = new User('bobby', 'bobby@gmail.com', '12345');

// boby.register();

// class Member extends User{
//     constructor(username, email, password, memberPackage){
//         super(username, email, password);
//         this.Package = memberPackage;
//     }

//     getPackage(){
//         console.log(this.username+' is subscribed to '+this.Package+' package');
//     }

// }

// let mike = new Member('mike', 'mike@gmail.com', '12345', 'standard');

// mike.getPackage();
// mike.register();


// const name = 'dj';

// function makeUpperCase(text){
//     return text.toUpperCase();
// }

// let template = 
// `<h1>${makeUpperCase('Hello')}, ${name}</h1>
// <p>This is a simple template in JavaScript</P>`;

// document.getElementById('template').innerHTML = template;


let theString = 'Hello, my name is Dj and I love JavaScript';

// startsWith()
// endsWith()
// includes()

// console.log(theString.startsWith('Hello'));
// console.log(theString.endsWith('JavaScript'));
// console.log(theString.includes('love'));

// console.log(Number.isFinite(0));
// console.log(Number.isNaN('string'));

// Hex
// console.log(0xFF);
// Binary
// console.log(0b101011);
// octal
// console.log(0o543);

// function wish(greeting = 'Hello World') {
//     console.log(greeting);
// }

// wish('Hi');

// let args1 = [1, 2, 3];
// let args2 = [4, 5, 6];

// function test() {
//     console.log(args1+','+args2);
// }

// test(...args1, ...args2);


// let myArray = [10, 20, 30, 40, 50];
// let mySet = new Set(myArray);

// mySet.add(60);
// mySet.add({a : 1, b : 2});
// mySet.delete(20);
// mySet.clear();
// mySet.add(24);
// mySet.add(18);

// console.log(mySet);
// console.log(mySet.size);

// mySet.forEach(function(val) {
//     console.log(val);
// })


// let myMap = new Map([['a1', 'Hi'], ['b2', 'How Are You']]);
// myMap.set('c1', '?');
// myMap.delete('a1');
// console.log(myMap);

// let carWeakSet = new WeakSet();

// let car1 = {
//     make : 'Honda',
//     model : 'Civic'
// }

// carWeakSet.add(car1);

// let car2 = {
//     make : 'Toyota',
//     model : 'Camry'
// }

// carWeakSet.add(car2);

// carWeakSet.delete(car1);
// console.log(carWeakSet);

// let carVehicleMap = new WeakMap();

// let key1 = {
//     id : 1
// }

// let car1 = {
//     make : 'Honda',
//     model : 'Civic'
// }

// let key2 = {
//     id : 2
// }

// let car2 = {
//     make : 'Toyota',
//     model : 'Camry'
// }

// carVehicleMap.set(key1, car1,);
// carVehicleMap.set(key2, car2);

// carVehicleMap.delete(key1);
// console.log(carVehicleMap);


// function Prefixer(prefix) {
//     this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr) {
//     t = this;
//     return arr.map(function(x) {
//         console.log(t.prefix + x);
//     });
// }

// let re = new Prefixer('Hello ');
// re.prefixArray(['Brad', 'Dj']);



// arrow function

// function Prefixer(prefix) {
//     this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr) {
//     return arr.map((x) => {
//         console.log(this.prefix + x);
//     });
// }

// let re = new Prefixer('Hello ');
// re.prefixArray(['Brad', 'Dj']);


// let add = function(a, b) {
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }

// add(2, 2);

// let add = (a, b) => {
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }

// add(2, 2);

// var name = 'Hello';

// for(i = 0; i < name.length; i++){
// }

// console.log(size); 

// function getData(method, url){
//     return new Promise(function(resolve, reject){
//         var djp = new XMLHttpRequest();
//         djp.open(method, url);
//         djp.onload = function(){
//             if(this.status >= 200 && this.status < 300){
//                 resolve(djp.response);
//             }else {
//                 reject({
//                     status: this.status,
//                     statusText: djp.statusText
//                 });
//             }
//         };
//         djp.onerror = function(){
//             reject({
//                 status: this.status,
//                 statusText: djp.statusText
//             });
//         };
//         djp.send();
//     });
// }

// getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
//     let todos = JSON.parse(data);
//     let output = '';
//     for(let todo of todos){
//         output += `
//         <li>
//             <h3>${todo.title}</h3>
//             <p>Completed: ${todo.completed}</P>
//         </li>
//         `;
//     }

//     document.getElementById('template').innerHTML = output;
// }).catch(function(err){
//     console.log(err);
// });

// generators

// function *g1(){
//     console.log('Hi');
//     yield 'How are you ?';
//     console.log('Yeah, I am');
//     yield 'good';
//     return 'What about you?';
// }

// var g = g1();

// // console.log(g.next().value);
// // console.log(g.next().value);
// // console.log(g.next().value);

// for(let val of g){
//     console.log(val);
// }







