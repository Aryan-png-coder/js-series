const accountId = 13923
let accountEmail = "aryan@gmail.com"
var accountPassword = "3874"
accountCity = "kullu"
let accountState;
 
// accountId =213 // not allowed bcz constant

accountEmail = "thakur@gmail.com"
accountPassword = "45"
accountCity = "solan"
/*
prefer not to use var
bcz of issue in block scope and functional scope
if you do not declare variable 
js gives undefined as output.
*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState ])