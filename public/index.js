let date = document.getElementById("date");
let rest = document.getElementById("restaurent");
let total = document.getElementById("total");
let service = document.getElementById("service");
let otherTip = document.getElementById("otherTip");
let ppl = document.getElementById("ppl");


let tipAmt = document.getElementById("tipAmt");
let totalAmt = document.getElementById("totalAmt")
let tip = '';

let calBtn = document.getElementById("calculate");
let saveBtn = document.getElementById("save");
let reviewBtn = document.getElementById("review"); 
let updateBtn = document.getElementById("update");

function check(){
    if (service.value =='other'){
        otherTip.type = 'text';
    } else{
        otherTip.type = 'hidden';
    }
}


function checkEmpty(){
    if(total.value=='' || service.value=='' || ppl.value==''){
        let i = document.querySelectorAll('input.mark');
        for (let x = 0; x<i.length; x++){
            i[x].style.backgroundColor = "#ffcccc";
            i[x].style.borderColor = "#ff9999";           
        }
        alert('Please fill out enough information to calculate the tip')
    }
}

function calTip(){
    if (service.value =='other'){
        tipAmt.value = (total.value*(otherTip.value/100))/ppl.value
        totalAmt.value = (total.value*(1+(otherTip.value/100)))/ppl.value
    } else{
        tipAmt.value = (total.value*(service.value/100))/ppl.value
        totalAmt.value = (total.value*(1+(service.value/100)))/ppl.value
    }
}

calBtn.addEventListener("click", function(e){
    e.preventDefault();
    checkEmpty();
    calTip();
})

saveBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (tipAmt.value =='' && totalAmt.value ==''){
        alert('Please calculate tip first');
    }
})

reviewBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    alert(tipAmt)
})


updateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
})