var form = document.querySelector(".registerForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

var convert=document.getElementById('convert');
convert.onclick=doConversion;

function doConversion(input){
    var input=document.getElementById('amount').value;
    var result=document.querySelector('.result');
    if(input.length === 0){
        result.innerText="there is no amount!";
        result.style.color='red';
    }
    else{
        result.style.color='black';
        var type = document.getElementById('type');
        var amountNumber=Number(input);
        switch(type.value){
            case 'dollar' :
            result.innerText= amountNumber / 3.5;
            break;
            case 'diner' :
            result.innerText=amountNumber / 5;
            break;
            case 'nis' :
            result.innerText=amountNumber;
            break;
        }
    }
}