let input1 = prompt("soyadinizi, adinizi ve ata adinizi daxil edin");

let seperateArray = input1.split(" ");

let surname = seperateArray[0];
let name = seperateArray[1];
let daddy = seperateArray[2];

let firstletterofName = name[0];
let firstletterofDaddy = daddy[0];

console.log(surname, firstletterofName, firstletterofDaddy)