function onlyCharacter( str ) {
    if(typeof str == 'string'){
       let strArray = str.split(' ');
       let joinStr = strArray.join('').toUpperCase();
       return joinStr;
    } 
    return 'Invalid'
}
