// // // ----------------------------------------------------LINKS-----------------------------------------------------------------

// // // https://javascript.info/iterable
// // // https://javascript.info/generators

// // // ----------------------------------------------------LINKS-----------------------------------------------------------------

// // // let obj = {
// // //     [Symbol.iterator](){
// // //       let maxNumber = 10;
// // //       let i = 0;
// // //       let oldValue = 0;
// // //       let newValue = 0;
// // //       return{
// // //         next() {
// // //           if(i++<maxNumber){
// // //             [oldValue,newValue] = [newValue, (oldValue+newValue) || 1]
// // //             return {value:oldValue,done:false}
// // //           }
// // //           else{
// // //             return {done:true}
// // //           }

// // //         }
// // //       }
// // //     }
// // //   }

// // //   console.log([...obj])

// // //   // let obj = {
// // //   //   [Symbol.iterator](){
// // //   //     let maxNumber = 10;
// // //   //     let i = 0;
// // //   //     let oldValue = 0;
// // //   //     let newValue = 0;
// // //   //     return{
// // //   //       next() {
// // //   //         if(i++<maxNumber){
// // //   //           [oldValue,newValue] = [newValue, (oldValue+newValue) || 1]
// // //   //           return {value:oldValue,done:false}
// // //   //         }
// // //   //         else{
// // //   //           return {done:true}
// // //   //         }

// // //   //       }
// // //   //     }
// // //   //   }
// // //   // }

// // //   // let obj2={}

// // //   // console.log(obj2.__proto__)

// // //   // let obj = {
// // //   //   _i: 0,
// // //   //   _array: [],
// // //   //   _limit: 10,
// // //   //   [Symbol.iterator]() {
// // //   //     return this;
// // //   //   },
// // //   //   next() {
// // //   //     if (this._array.length === 0) {
// // //   //       this._array.push(0);
// // //   //       this._i++;
// // //   //       return { value: 0, done: this._i > this._limit };
// // //   //     } else if (this._array.length === 1) {
// // //   //       this._array.push(1);
// // //   //       this._i++;
// // //   //       return { value: 1, done: this._i > this._limit };
// // //   //     } else {
// // //   //       const value = this._array[this._i - 2] + this._array[this._i - 1];
// // //   //       this._array.push(value);
// // //   //       this._i++;
// // //   //       return { value: value, done: this._i > this._limit };
// // //   //     }
// // //   //   },
// // //   //   return() {
// // //   //     return { done: true };
// // //   //   },
// // //   // };

// // //   // console.log([...obj]);

// // //   // const array1 = [
// // //   //   { fN: "a1", ln: "b1", age: 26 },
// // //   //   { fN: "a2", ln: "b2", age: 27 },
// // //   //   { fN: "a3", ln: "b3", age: 28 },
// // //   //   { fN: "a4", ln: "b3", age: 26 },
// // //   //   { fN: "a5", ln: "b3", age: 26 },
// // //   // ];

// // //   // // const output = array1.reduce((acc,curr) => {
// // //   // //   acc.push(`${curr.fN} ${curr.ln}`)
// // //   // //   return acc;
// // //   // // },[])

// // //   // // const output = array1.map(curr=>`${curr.fN} ${curr.ln}`)

// // //   // const output1 = array1.reduce((acc, curr) => {
// // //   //   if (acc[curr.age]) {
// // //   //     acc[curr.age]++;
// // //   //   } else {
// // //   //     acc[curr.age] = 1;
// // //   //   }
// // //   //   return acc;
// // //   // }, {});

// // //   // const output22 = array1.filter((x) => x.age < 27).map((x) => x.fN);

// // //   // const output = array1.reduce((acc, curr) => {
// // //   //   if (curr.age < 27) {
// // //   //     acc.push(curr.fN);
// // //   //   }
// // //   //   return acc;
// // //   // }, []);

// // //   // console.log(output);

// // //   // const fn1 = () => {
// // //   //   return new Promise((resolve, reject) => {
// // //   //     setTimeout(() => {
// // //   //       resolve("1sec");
// // //   //     }, 1000);
// // //   //   });
// // //   // };
// // //   // fn1().then((val) => {console.log(val)
// // //   //   return new Promise((resolve, reject) => {
// // //   //     setTimeout(() => {
// // //   //       resolve("2sec")
// // //   //     }, 2000);
// // //   //   })

// // //   // }).then((val) => console.log(val))

// // //   // ;

// // //   // console.log(Number({a:1}))

// // //   // // let i = cycle([1,2,3])

// // //   // // function* createCycle(arr){

// // //   // // }

// // //   // function* range(up){
// // //   //   for(let i=0;i<up;i++){
// // //   //     yield i;
// // //   //   }
// // //   // }

// // //   // // for(let el of range(100000)){
// // //   // //   console.log(el)
// // //   // // }

// // //   // function* cycle(arr){
// // //   //   while(true){
// // //   //     for(const a of arr){
// // //   //       yield a;
// // //   //     }

// // //   // }
// // //   // }

// // //   // for(let el of cycle([1,2,3])){
// // //   //   console.log(el)
// // //   // }

// // //   function* gen(){
// // //     console.log('start')
// // //     let str1 = `1.${yield}`
// // //     console.log(str1)
// // //     let str2 = `2.${yield}`
// // //     console.log(str1,str2)
// // //     return 'a'
// // //   }

// // //   let abc = gen()

// // //   // abc.next()
// // //   // abc.next(1)
// // //   // abc.next(2)

// // //   function a(){
// // //     this.name='abc'
// // // }

// // // var newV = a('def');
// // // console.log(newV)
// // // console.log(global.name)

// let obj2 = {};

// // console.log(Object.getPrototypeOf(obj2) === Object.prototype);
// // getPrototypeOf(Object)
// // console.log(Object.getPrototypeOf(Object) === Object.prototype);
// // console.log(Object.getPrototypeOf(Function) === Function.prototype);
// // console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// // console.log(Object.__proto__ === Function.prototype)
// // console.log(Object.prototype)
// // console.log(Object.getPrototypeOf(Object) === Object.prototype)
// // console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype)
// // console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);

// // console.log(Object.getPrototypeOf(obj2) == obj2.__proto__);

// // // let a22 =[]

// // // console.log(Object.getPrototypeOf(a22)===Array.prototype)
// // // console.log(Object.getPrototypeOf(Array)===Function.prototype)

// // // let a33 =42
// // // console.log(Object.getPrototypeOf(a33)===Number.prototype)
// // console.log(Object.getPrototypeOf(Number)===Function.prototype)

// // // let a333333 = null;
// // // // console.log(Object.getPrototypeOf(a333333)===Object.prototype)

// // // // console.log(42 instanceof Object)

// // // function defer(f, ms) {
// // //     return function(args) {
// // //         console.log(args)
// // //         console.log(arguments)
// // //       setTimeout(() => f(arguments), ms);
// // //     };
// // //   }

// // //   function sayHi(who) {
// // //     console.log('Hello, ' + who);
// // //   }

// // //   let sayHiDeferred = defer(sayHi, 2000);
// // //   sayHiDeferred("John"); // Hello, John after 2 seconds

// // //   function* generateSequence(start, end) {
// // //     for (let i = start; i <= end; i++) yield i;
// // //   }

// // //   function* generatePasswordCodes() {

// // //     // 0..9
// // //     yield* generateSequence(0, 9);

// // //     // A..Z
// // //     yield* generateSequence(65, 90);

// // //     // a..z
// // //     yield* generateSequence(97, 122);

// // //   }

// // //   let str = '';

// // //   for(let code of generatePasswordCodes()) {
// // //     str += String.fromCharCode(code);
// // //   }

// // //   console.log(str); // 0..9A..Za..z

// // function* gen() {
// //   // Pass a question to the outer code and wait for an answer
// //   let result = yield "2 + 2 = ?"; // (*)

// //   console.log(result);
// // }

// // let generator = gen();

// // let question = generator.next().value; // <-- yield returns the value

// // console.log(question);

// // generator.next(4); // --> pass the result into the generator

// // Function.prototype.defer=function(ms) {
// //   console.log(this)
// // return setTimeout(this, ms);
// // }

// // function abc(){
// //   console.log("abc")
// // }

// // abc.defer(1000);

// Function.prototype.defer = function (ms) {
//   let f = this;
//   return function (...args) {
//     setTimeout(() => {
//       f.apply(this, args);
//     }, ms);
//   };
// };

// let user = {
//   name: "John",
//   sayHi() {
//     console.log(this.name);
//   }
// }

// user.sayHi = user.sayHi.defer(1000);

// // user.sayHi();


// function unique(arr) {
//   /* your code */
//   return Array.from(new Set(arr))

// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// // console.log( unique(values) ); // Hare, Krishna, :-O

// function aclean(arr){

// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// // alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// console.log(keys)






let obj = new Object()

let a = [1,1]

// Object -> 

console.log(Object.getPrototypeOf(obj)===Object.prototype)
console.log(Object.getPrototypeOf(a)===Array.prototype)
console.log(Object.getPrototypeOf(Object)===Function.prototype)

