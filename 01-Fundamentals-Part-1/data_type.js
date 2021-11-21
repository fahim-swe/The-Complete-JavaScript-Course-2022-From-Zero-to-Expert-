// Data types
/*
JavaScript has dynamic typing: we do not have to manually define the data
type of the value stored in a variable. Instead, data types are detemined
automatically

*/

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof (javaScriptIsFun));
console.log(typeof (true));
console.log(typeof (23));
console.log(typeof (20.000001));
console.log(typeof ("Java is fun"));
console.log(typeof 'java is fun');

// dynamic typing 
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

javaScriptIsFun = 1234;
console.log(typeof javaScriptIsFun);

javaScriptIsFun = null;
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); // type of null is undefined but it show object that is bug in JavaSript
