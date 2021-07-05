//counter
var count = 0;


//select value and buttons
const value =document.querySelector('#value');
const btns=document.querySelectorAll('.btn');


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        const label=e.currentTarget.classList;
        if(label.contains('decrease')){
            
            count--;}
            
            else if(label.contains('increase')){
                
                count++;}
                
                else{
                    count=0;
                }

                if(count>0){
                    value.style.color="green";
                }
                else if(count<0){
                    value.style.color="red";
                }

                else if(count===0){
                    value.style.color="rgb(12,8,8)";

                }
                value.textContent=count;
    })});