let buttons = document.querySelectorAll('.button');
console.log(buttons);
let string = "";
let display= document.querySelector('.display');
Array.from(buttons).forEach((item)=>{
        item.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            display.value=string;
        }
        else if(e.target.innerHTML == 'X'){
            string="";
            display.value=string;
        }
        else if(e.target.innerHTML == 'C'){
            string="";
            display.value=string;
        }
        else{
            string+=e.target.innerHTML;
            display.value=string;
        }
    })
})
