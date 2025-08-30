function resultReport( marks ) {
    if(Array.isArray(marks)){
        if(marks.length === 0) return { finalScore: 0, pass: 0, fail: 0 };
        let finalScore = 0;
        let pass = 0;
        let fail = 0;
        for(const num of marks){
            if(num < 40 ){
                fail = fail+1;
                finalScore = finalScore + num;
            }
            else {
                pass = pass + 1;
                finalScore = finalScore + num;
            }
        }
        let avg = finalScore / marks.length
        let finalOutput = { finalScore: Math.round(avg) , pass: pass, fail: fail }
        return finalOutput;
    }
    return "Invalid"
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 40]))

