let arr = [2, [3, [10, 11]], 1, 't,'];
let res = [];
console.log(flattener(arr));
console.log(flatten(arr));
myExFlattenerLorenzoTheUnbeliever(arr, res)
console.log(res);
// first try
function myExFlattenerLorenzoTheUnbeliever(par, res) {
    if (par instanceof Array) {
        for (let index = 0; index < par.length; index++) {
            let tmp = myExFlattenerLorenzoTheUnbeliever(par[index], res);
            if (typeof tmp == 'number') {
                res.push(tmp);
            }
        }
    } else {
        return par;
    }
}
// super sadge, cercavo di capire come funziona arguments, this e apply
function flattener(par) {
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
// from stackOverflow
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