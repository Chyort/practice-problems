function randomRange(startNum, endNum) {

    if(startNum && !endNum) {
        var randomElement = startNum[Math.floor(Math.random()*startNum.length)];
        return randomElement;
    }

    return Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
}

console.log(randomRange(1, 1000));