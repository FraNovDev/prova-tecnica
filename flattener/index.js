let arr = [2, [3, [10, 11]], 1];
console.log(flattener(arr));

function flattener(map) {
    var result = [];
    map.forEach(element => {
        if (element instanceof Array) {
            result = result.concat(flattener(element));
        } else {
            result.push(element);
        }
    });
    return result;
}