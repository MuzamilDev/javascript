var banks = ["Meezan Bank","Habib Bank","Allied Bank","Alfalah Bank"];
var newb = banks.splice(2,2,"mobilink","united");
console.log(newb);   // [ 'Allied Bank', 'Alfalah Bank' ]
console.log(banks);  // Replacing Elements

var addnew = banks.splice(1,0,"Fayasal Bank");
console.log(addnew); //[]
console.log(banks); // Adding Elements