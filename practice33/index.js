function invertNegatives(userInput){
    var result;

    if (userInput < 0){
        result = userInput;

        return result;
    } else if (userInput > 0){
        result = -Math.abs(userInput);

        return result;
    } else if (isNaN(userInput)){

        return false;
    }
}

console.log(invertNegatives(10));