function totalFine( fare ) {
    if(typeof fare === 'number' && fare >= 0 ){
        let serviceCharge = (fare * 20) / 100;
        let fine = fare + serviceCharge + 30;
        return fine 
    }
    return 'Invalid'
}
