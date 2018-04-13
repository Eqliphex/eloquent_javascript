function countBs(inputString) {
    return countChar(inputString, 'B');
}

console.log(countBs('BbB'));


function countChar(inputString, searchChar) {
    let charCount = 0;
    for(let i = 0; i < inputString.length; i++) {
        if(inputString[i] === searchChar)
            charCount++;
    }
    return charCount;
}

console.log(countChar("Master string", 'a'));