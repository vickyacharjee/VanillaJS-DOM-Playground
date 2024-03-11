const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

const colorChanger=document.querySelector('.colorChanger');


buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.id=="red"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="pink"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="yellow"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="brown"){
            body.style.backgroundColor=e.target.id;
        }
    })
    button.addEventListener('mouseover',(e)=>{
        console.log(e.target);
        if(e.target.id=="red"){
            colorChanger.innerHTML=e.target.id
        }
       if(e.target.id=="pink"){
            colorChanger.innerHTML=e.target.id
        }
       if(e.target.id=="brown"){
            colorChanger.innerHTML=e.target.id
        }
       if(e.target.id=="yellow"){
            colorChanger.innerHTML=e.target.id
        }
       
    })
})