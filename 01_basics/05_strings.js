const name = "aryan"
const age = 17

console.log(`Hello my name is ${name} and my age is ${age}`);

//another way of declaring string

const gameName = new String("super mario")
console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length); 

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf( 'm' ));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,-1)
console.log(anotherString);

const newString2 = "    aryan thakur    "
console.log(newString2);
console.log(newString2.trim());
   
const url = "https://aryan_thakur.com/"
console.log(url.replace("_","-"));

console.log(url.includes("aryan")); // to check whether string is present or not
console.log(url.includes("ashish"));

const you = "aryan thakur"
console.log(you.split(""));
