let string = "Buongiorno mi chiamo Paolo";
console.log(longest(string));

function longest(string) {
    var words = string.split(" ");
    var maxLength = 0;
    var longestWord = "";
    words.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    });
    return longestWord;
}