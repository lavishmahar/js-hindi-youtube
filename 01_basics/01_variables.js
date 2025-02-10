const accountId = 144553
let accountEmail = "lavish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail= "lavish@.com"
accountPassword = "201020"
accountCity = "Delhi"
let accountState;
// accountId = 2 // not allowed

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "lv@.com"
 

