const buttons = document.getElementsByClassName('myButton');
let clickCount = 0;
for(const button of buttons){
    button.addEventListener('click',function(){
        clickCount = clickCount +1;
       document.getElementById('seat-count').innerText=clickCount;
        button.classList.add('bg-[#1DD100]');
        button.classList.add('text-white');

    });
};


