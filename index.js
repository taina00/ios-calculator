const number = document.querySelectorAll('.numbers')
const result = document.querySelector('.result')
const sign = document.querySelector('.sign')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const negative = document.querySelector('.negative')
const item2 = document.querySelector('.item2')


let firstvalue = "";
let infirstvalue = false;
let secondvalue = "";
let insecondvalue = false;
let sign = "";
let resultvalue = 0;

for(let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', (e) => {
    let atr = e.target.getattribute('value');
    if(infirstvalue === false) {
        getfirstvalue(atr)
    }
    if(secondvalue == false) {
        getsecondvalue(atr);
    }
  })
}

function getfirstvalue(el) {
    result.innerHTML = "";
    firstvalue += el;
    result.innerHTML = firstvalue;
    firstvalue = +firstvalue
}

function getsecondvalue(el) {
    if (firstvalue != "" && sign != "") {
        secondvalue += el;
        result.innerHTML = secondvalue;
        secondvalue = +secondvalue
    }
}

function getsign() {
    for(let i = 0; i < sign.length; i++) {
        sign[i].addEventListener('click', (e) => {
            sign = e.target.getattribute('value');
        })
    }

}
getsign()

equal.addEventListener('click', () => {
    result.innerHTML ="";
    if(sign === "+") {
        resultvalue = firstvalue + secondvalue;
    } else if(sign === "-") {
        resultvalue = firstvalue - secondvalue;
    }else if(sign === "*") {
        resultvalue = firstvalue * secondvalue;
    }else if(sign === "/") {
        resultvalue = firstvalue / secondvalue;
    }
    result.innerHTML = resultvalue;
    firstvalue = resultvalue
    secondvalue = "";

}) 

function checkresultlenght() {
    resultvalue = JSON.stringify(resultvalue);

    if(resultvalue.length >= 8) {
        resultvalue = JSON.parse(resultvalue);
        result.innerHTML = resultvalue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstvalue != "") {
        resultvalue = -firstvalue;
        firstvalue = -resultvalue;
    }
    if(firstvalue != "" && secondvalue != "" && sign != "")

    result.innerHTML = resultvalue;
})

.item2.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstvalue != "") {
        resultvalue = firstvalue / 100;
        firstvalue = resultvalue;
    }
    if(firstvalue != "" && secondvalue != "" && sign)
    resultvalue = resultvalue / 100;

    result.innerHTML = resultvalue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

     firstvalue = "";
     infirstvalue = false;
     secondvalue = "";
     insecondvalue = false;
     sign = "";
     resultvalue = 0;
})