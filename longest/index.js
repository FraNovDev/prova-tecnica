let string = "Buongiorno mi chiamo Paolo";
console.log(longest(string));

function longest(string) {
    var words = string.split(" ");
    var longestWord = "";
    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}