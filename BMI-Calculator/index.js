const form=document.querySelector('form');
const res=document.querySelector('#res');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);

    if(height===' ' || height<0 || isNaN(height)){
        alert("Enter valid Height");
    }
    else if(weight==' ' || weight<0 || isNaN(weight)){
        alert("Enter valid weight");
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        res.innerHTML=bmi;
    }



})