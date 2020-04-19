function divisibleNumber(number) {

    let allNumbers = [];

    let output;

    for(let i = 1; i <= number; i++){
        
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            allNumbers.push("yu-gi-oh");
        } else if (i % 2 === 0 && i % 3 === 0) { 
            allNumbers.push("yu-gi");
        } else if(i % 2 === 0 && i % 5 === 0) {
            allNumbers.push("yu-oh");
        } else if (i % 3 === 0 && i % 5 === 0) {
            allNumbers.push("gi-oh");
        } else if (i % 2 === 0) {
            allNumbers.push("yu");
        } else if (i % 3 === 0) {
            allNumbers.push("gi");
        } else if (i % 5 === 0) {
            allNumbers.push("oh");
        } else {
            allNumbers.push(i);
        }
    }

    console.log(allNumbers);
    return allNumbers;
}

divisibleNumber(100);
divisibleNumber(42); 