/** Problem -01 ( Divide the Asset ) */ 
var area = 2060; 
//write your code here
var output = area / 2;
console.log(output);



/** Problem -02 ( Cycle or Laptop ) */ 
var money = 9999; 
//write your code here 
if(money >= 25000){
    console.log(`Laptop`);
}else if(money >= 10000){
    console.log(`Cycle`);
}else{
    console.log(`Chocolate`);
}




/** Problem -03 ( Medicine Planner ) */ 
var lastDay = 7 ; 
//write your code here 
for(var i = 1; i <= lastDay; i++){
    if(i%3===0){
        console.log(`${i} - medicine`);
    }
    else{
        console.log(`${i} - rest`)
    }
}





/** Problem 04 - (Delete / Store) */ 
var fileName= "slipdf.txt"; 
//write your code here
if(fileName.includes('#') || fileName.includes('.docx') || fileName.includes('.pdf')){
    console.log(`Store`)
}else{
    console.log(`Delete`)
}




/** Problem 05 - ( PH Email Generator )  */ 
var student= { name: "monu" , roll: 99,department: 
"eee"  }; 
//write your code here
var outputEmail = student.name+student.roll+`.`+student.department+`@ph.ac.bd`;
console.log(outputEmail);



/** Problem 06 :  (Current Salary )  */ 
var experience = 30; 
var startingSalary = 45000; 
//write your code here
for(i=1; i <= experience; i++){
    var increment = (startingSalary*5) / 100;
    startingSalary += increment;
}
var currentSalary = startingSalary.toFixed(2);
console.log(currentSalary);
