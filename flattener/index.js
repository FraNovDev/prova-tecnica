let arr = [2, [3, [10, 11]], 1];
var res = [];
let num = 1;
let t = a(arr);
console.log(res);

function a(par) {
    if (par instanceof Array) {
        for (let index = 0; index < par.length; index++) {
            let tmp = a(par[index]);
            if (typeof tmp == 'number') {
                res.push(tmp);
            } else {
                return res;
            }
        }
    } else {
        return par;
    }
}