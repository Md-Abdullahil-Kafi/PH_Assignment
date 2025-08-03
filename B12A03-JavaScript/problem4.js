/** Problem 04 - (Delete / Store) */ 
var fileName= "slipdf.txt"; 
//write your code here
if(fileName.includes('#') || fileName.includes('.docx') || fileName.includes('.pdf')){
    console.log(`Store`)
}else{
    console.log(`Delete`)
}
