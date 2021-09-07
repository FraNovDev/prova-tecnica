let arr = [2, [3, [10, 11]], 1, 't,'];
console.log(flattener(arr));
console.log(flatten(arr));

function flattener(par) {
    console.log(arguments[0]);
    var res = [];
    for (var i = 0; i < par.length; i++) {
        if (par[i] instanceof Array) {
            res.push.apply(res, flattener.apply(this, par[i]));
        } else {
            res.push(par[i]);
        }
    }
    return res;
}

function flatten() {
    var flat = [];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            flat.push.apply(flat, flatten.apply(this, arguments[i]));
        } else {
            flat.push(arguments[i]);
        }
    }
    return flat;
}