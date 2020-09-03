//Global Decaration
//What we use in the caculation
let numbers = [0,0];
let operator = '';
//What we use to check conditions
let decimalCount,enterCount;
//Dynamic variable 
let currentNumber, currentIndex;

let monitorShow = document.getElementById('monitor');

init();

const init = () =>{
    monitorShow.textContent = '0';
    numbers = [0,0];
    operator = '';
    decimalCount = 0;
    enterCount = 0;
    currentNumber = '0';
    currentIndex = 0;
}

const setNumbers = () => numbers[currentIndex] = monitorShow.textContent;

const storeDecimal = value =>{
    if(decimalCount== 0 && enterCount == 0){
        decimalCount = 1;
        currentNumber += value.toString();
    }
    else if (enterCount != 0){
        decimalCount = 1;
        currentNumber = '0' + value.toString();
    }
    monitorShow.textContent= currentNumber;
}

const setCurrentNumber = value =>{

    if(currentNumber != '0' && enterCount== 0){
        currentNumber += value.toString();
    }
    else if(currentNumber != '0' && enterCount != 0){
        currentNumber += value.toString();
        enterCount= 0;
    }
    else{
        currentNumber=value;
    }
    setNumbers();
    monitorShow.textContent= currentNumber;
}

const setOperator = opt =>{
    operator = opt;
    setNumbers();
    monitorShow.textContent= opt;
    currentIndex = 1;
    currentNumber='0';
    decimalCount = 0;
}

const calculation = () => {

    if(operator != ''){
        setNumbers();
        let total=0;
        switch(operator){
            case "+": total = parseFloat(numbers[0]) + parseFloat(numbers[1]);break;
            case "-": total = numbers[0] - numbers[1];break;
            case "*": total = numbers[0] * numbers[1];break;
            case "%": if(numbers[1]!= 0){total = numbers[0] / numbers[1];}
                      else{window.alert()("The number can not be devided by 0");} break;
        }
        monitorShow.textContent= total;
        //Set values for the next caculation
        currentIndex =0;
        setNumbers();
        operator = '';
        decimalCount = 0;
        enterCount = 1;

    }
}

//When a user clicks on the button, store the value
document.querySelector('.btn--ac').addEventListener('click',init);
document.querySelector('.btn--enter').addEventListener('click',calculation);

document.querySelector('.btn--number-1').addEventListener('click', function(){let value = 1; setCurrentNumber(value);});
document.querySelector('.btn--number-2').addEventListener('click', function(){let value = 2; setCurrentNumber(value);});
document.querySelector('.btn--number-3').addEventListener('click', function(){let value = 3; setCurrentNumber(value);});
document.querySelector('.btn--number-4').addEventListener('click', function(){let value = 4; setCurrentNumber(value);});
document.querySelector('.btn--number-5').addEventListener('click', function(){let value = 5; setCurrentNumber(value);});
document.querySelector('.btn--number-6').addEventListener('click', function(){let value = 6; setCurrentNumber(value);});
document.querySelector('.btn--number-7').addEventListener('click', function(){let value = 7; setCurrentNumber(value);});
document.querySelector('.btn--number-8').addEventListener('click', function(){let value = 8; setCurrentNumber(value);});
document.querySelector('.btn--number-9').addEventListener('click', function(){let value = 9; setCurrentNumber(value);});

document.querySelector('.btn--number-0').addEventListener('click', function(){let value = 0; setCurrentNumber(value);});

document.querySelector('.btn--decimal').addEventListener('click', function(){let value = '.'; storeDecimal(value);});

document.querySelector('.btn--operator-plus').addEventListener('click', function(){let opt = '+';setOperator(opt);});
document.querySelector('.btn--operator-minus').addEventListener('click', function(){let opt = '-';setOperator(opt);});
document.querySelector('.btn--operator-multiply').addEventListener('click', function(){let opt = '*';setOperator(opt);});
document.querySelector('.btn--operator-devision').addEventListener('click', function(){let opt = '%';setOperator(opt);});