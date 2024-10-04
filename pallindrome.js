function palin(a) {
    let j = a.length - 1
    for (let i = 0; i < a.length / 2; i++) {
        if (a[i] != a[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "121";
let str2 = "515";
let str3 = "155";

console.log(palin(str1));
console.log(palin(str2));
console.log(palin(str3));
