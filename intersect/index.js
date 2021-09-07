let arr1 = [1, 5, 8, 5, 4, 9];
let arr2 = [2, 5, 9, 0];
console.log(intersect(arr1, arr2));

function intersect(arr1, arr2) {
    var dest = [];
    arr1.forEach(el => {
        if (arr2.includes(el) && !dest.includes(el)) {
            dest.push(el);
        }
    });
    return dest;
}