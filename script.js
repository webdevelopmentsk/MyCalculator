/*Global Variables */

const digits = [...Array(10).keys()];  //=> [0,1,2...,9]
const operators = ['+','-','*','/'];
const decimal = '.';
const reset = 'AC';
let enter = 'Enter';
let numbers = ['0','0'];
let operator = '';
let enterCount = 0;
let currentNumber = '0'; 
let currentIndex = 0;

let display = document.getElementById('monitor');

/* Initialize the Calculation */

const init = () => {
    display.textContent = '0';
    arrNumbers = [0,0];
    operator = '';
    enterCount = 0;
    currentNumber = '0';
    currentIndex = 0;
};

init();

/* Update the Display */

const updateDisplay = (value) => display.textContent = value;

/* Set Numbers, Operator and Decimal */

const setArrNumbers = () => numbers[currentIndex] = display.textContent;

const setCurrentNumber = digit =>{
    
    if(currentNumber !== '0' && enterCount === 0){
        currentNumber += digit.toString();
    }
    else if(currentNumber !== '0' && enterCount !== 0){
        currentNumber += digit.toString();
        enterCount = 0;
    }
    else if (currentNumber === '0' && digit === 0){
        currentNumber = '0';
    }
    else{
        currentNumber = digit;
    }

    updateDisplay(currentNumber);
    setArrNumbers();

}

const setOperator = opt =>{

    operator = opt;
    setArrNumbers();
    updateDisplay(opt);
    currentIndex = 1;
    currentNumber = '0';

}

const storeDecimal = value => {

    if (!currentNumber.toString().indexOf(value) > -1 && enterCount == 0 ){
        currentNumber += value;
    }
    else if (enterCount !== 0){
        currentNumber = '0.';
    }
    updateDisplay(currentNumber);
}

const calculation = () => {

    if(operator != ''){
        setArrNumbers();
        let total = 0;
        let num0 = numbers[0].includes('.') ? parseFloat(numbers[0]) : parseInt(numbers[0]);
        let num1 = numbers[1].includes('.') ? parseFloat(numbers[1]) : parseInt(numbers[1]);

        switch(operator){
            case "+": total = num0 + num1;break;
            case "-": total = num0 - num1;break;
            case "*": total = num0 * num1;break;
            case "%": if(num1!== 0){total = num0 / num1;}
                      else{window.alert("The number can not be devided by 0");} break;
        }
        updateDisplay(total);
        //Set values for the next caculation
        currentIndex = 0;
        setArrNumbers();
        operator = '';
        enterCount = 1;
        currentNumber = '0';

    }
}

/* Handle key presses */

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