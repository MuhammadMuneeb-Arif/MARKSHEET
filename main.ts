import { log } from "console";

// MARK SHEET :-
let mathsMark : number = 65 ;
let chemistryMark : number = 56;
let physicsMark : number = 58 ;
let biologyMark : number =55 ;
let urduMark : number = 79 ;
let islamiatMark : number= 5;
let englishMark : number =6;
let totalMark : number =467;
let obtainedMark : number = mathsMark+chemistryMark +physicsMark + biologyMark +urduMark+ islamiatMark +englishMark;
let PERCENTAGE : number = (obtainedMark/totalMark)*100;
console.log("MARK SHEET :");
console.log(`MATHS MARKS : ${mathsMark}`);
console.log(`PHYSICS MARKS : ${physicsMark}`);
console.log(`CHEMISTRY MARKS : ${chemistryMark}`);
console.log(`BIOLOGY MARKS : ${biologyMark}`);
console.log(`URDU MARKS : ${urduMark}`);
console.log(`ISLAMIAT MARKS : ${islamiatMark}`);
console.log(`ENGLISH MARKS : ${englishMark}`);
console.log(`TOTAL MARKS : ${totalMark}`);
console.log(`OBTAINED MARKS : ${obtainedMark}`);
console.log(`PERCENTAGE :`,PERCENTAGE.toFixed(2) + "%");

if (PERCENTAGE>= 80 ) {
    console.log("GRADE : A+1");
    
} else if (PERCENTAGE>= 70 ) {
    console.log("GRADE : A");
    
}
else if (PERCENTAGE >= 60){
    console.log("GRADE : B+");
    
}else if (PERCENTAGE >= 50){
    console.log("GRADE : B");
}else if (PERCENTAGE >= 40){
    console.log("GRADE : C");
}else if (PERCENTAGE >= 33){
    console.log("GRADE : C-"); 
}
if (PERCENTAGE >= 33) {
    console.log("PASSED");
}
else {
    console.log("FAILED");
}