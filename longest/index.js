let string = "Buongiorno mi chiamo Paolo";
console.log(longest(string));

function longest(string) {
    let words = string.split(" ");
    let maxLength = 0;
    words.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    });
    return maxLength;
}