var rst, counter, insert, equal, c, back;

var lastCall = []; //Array for keeping old input
var num1 = 0;
var num2 = -1;
var min1 = 0;

function max(val, min, max) {
    return (val > min) ? ((val < max) ? val : max) : min;
}

function counter()  {
    num1 = num1 + 1;
}

function limit()  {
    num2 = num2 + 1;
}

function rst()  {
    num1 = 0;
}

function insert(num)    {
    document.form.tv.value = document.form.tv.value+num
    lastCall.unshift(document.form.tv.value);
    console.log(num2);
    limit();
    rst();
}


function equal()    {
    var tvValue = document.form.tv.value;
    
    if(tvValue) {
        document.form.tv.value = eval(tvValue)
        lastCall.unshift(document.form.tv.value);
        console.log(num2);
        limit();
        rst();
    }
    
}

function c()    {
    document.form.tv.value = "";
    lastCall = [];
    num2 = -1;
}

function back() {
    counter();
    document.form.tv.value = lastCall[max(num1, min1, num2)];
    
}
