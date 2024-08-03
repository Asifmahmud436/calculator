function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return  num1 / num2;
    // return num3;
}
function mod(num1,num2){
    
    return num1 % num2;
    // return num3;
}

// calc vars
let inp1 = null;
let inp2 = null;
let operator = '';
let displayValue = ''

function operate(operator1,n1,n2){
    if(operator1 == '+'){
        return add(n1,n2);
    }
    else if(operator1 == '-'){
        return subtract(n1,n2);
    }
    else if(operator1 == '*'){
        return multiply(n1,n2);
    }
    else if(operator == '%'){
        return divide(n1,n2);
    }
    else{
        return mod(n1,n2)
    }
};
const displayValueContainer = document.querySelector('.display');

const digitbtn = document.querySelectorAll('.digit');
const digitArr = ['1','2','3','4','5','6','7','8','9','0'];
const signArr = ['+','-','*','/','%'];
for(let i=0;i<digitbtn.length;i++){ 
    digitbtn[i].addEventListener("click", () => {
        if(digitbtn[i].innerText in digitArr || digitbtn[i].innerText == 'Touch Me,Babe!'){
            if(displayValueContainer.innerText=='Touch Me,Babe!' || displayValueContainer.innerText=='0'){
                displayValueContainer.innerText=digitbtn[i].innerText;
            }
            else{
                displayValueContainer.innerText+=digitbtn[i].innerText;
            }
            
        }
        else if(digitbtn[i].innerText=='C'){
            displayValueContainer.innerText = displayValueContainer.innerText.slice(0,-1);

        }
        else if(digitbtn[i].innerText=='+' || digitbtn[i].innerText=='-' || digitbtn[i].innerText=='*' || digitbtn[i].innerText=='/' || digitbtn[i].innerText=='%' || digitbtn[i].innerText=='=' || digitbtn[i].innerText=='AC' || digitbtn[i].innerText=='C' ){
            if(inp1==null && digitbtn[i].innerText!='=' && digitbtn[i].innerText!='AC' && digitbtn[i].innerText!='C'){
                inp1 = parseInt(displayValueContainer.innerText);
                displayValueContainer.innerText = '0';
                operator = digitbtn[i].innerText; 
                console.log(inp1,operator);
            }
            else if(digitbtn[i].innerText=='='){
                inp2 = parseInt(displayValueContainer.innerText);
                displayValueContainer.innerText = '0';
                console.log(inp2,operator);
                let result = operate(operator,inp1,inp2);
                if(result==NaN){
                    displayValueContainer.innerText = 'lmao';
                    inp1=null;
                    inp2=null;
                }
                else{
                    displayValueContainer.innerText = result;
                    inp1=null;
                    inp2=null;
                }
            }
            else if(digitbtn[i].innerText=='AC'){
                inp1 = null;
                inp2 = null;
                displayValueContainer.innerText = 'You Violated me!';

            }
            else if(digitbtn[i].innerText=='C'){
                displayValueContainer.innerText = displayValueContainer.innerText.slice(0,-1);

            }
        }        
    });
}