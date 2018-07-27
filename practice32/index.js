var position;
var length;

function findMiddleLetters(string){
    if(string.length % 2 === 1) {
        position = string.length / 2;
        length = 1;
    } else {
        position = string.length / 2 - 1;
        length = 2;
    }

    result = string.substring(position, position + length)
    console.log(result);
}

findMiddleLetters('paul');