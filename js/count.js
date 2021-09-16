let count = parseInt(document.cookie.slice(";")[0]);
if((typeof count != "number") || document.cookie == "") count = 0;
document.querySelector("#counter").innerHTML = count;
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let countNum = document.querySelector("#countNum");
countNum.innerHTML = count;

minus.addEventListener('click', function() {
    if(count > 0)
    {
        count -= 1;
        countNum.innerHTML = count;
    }
});

plus.addEventListener('click', function() {
    count += 1;
    countNum.innerHTML = count;
});

let addIt = document.querySelector("#addIt");

addIt.addEventListener('click', function() {
    document.querySelector("#counter").innerHTML = count;
    document.cookie = count + "; path=/";
});