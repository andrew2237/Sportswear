let toggleBtn = document.querySelector(".toggle-menu");

let tlinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
    
    e.stopPropagation();

    this.classList.toggle("menu-active");

    tlinks.classList.toggle("open");

};
tlinks.onclick = function(e){
    e.stopPropagation();
}

document.addEventListener("click", (e)=> {

    if(e.target !== toggleBtn && e.target !== tlinks){
        
        if(tlinks.classList.contains("open")){
            
            toggleBtn.classList.toggle("menu-active");

            tlinks.classList.toggle("open");
        }
    }
});
let table = document.getElementsByClassName("t");
let TR = document.getElementsByClassName("tr");
let Q1 = parseFloat(document.getElementById("Q1").value);
let Q2 = parseFloat(document.getElementById("Q2").value);
let Q3 = parseFloat(document.getElementById("Q3").value);
let Q4 = parseFloat(document.getElementById("Q4").value);
let V1 = parseFloat(document.getElementById("v1").value);
let V2 = parseFloat(document.getElementById("v2").value);
let V3 = parseFloat(document.getElementById("v3").value);
let V4 = parseFloat(document.getElementById("v4").value);
let SubtOtal = parseFloat(document.getElementById("v5").value);
let TAX = parseFloat(document.getElementById("v6").value);
let Total = parseFloat(document.getElementById("v7").value);
const inp = document.querySelectorAll("input");


inp.forEach( (e) => {
        e.addEventListener('click',()=>{

            if((e.value) <0){
        
                e.value=0;
        
            }
    });
});






function change1(){
    let quantity;
    quantity= 50* parseFloat(document.getElementById("Q1").value);
    document.getElementById("v1").value = quantity.toFixed(2);
    window.location.reload();
};
function change2(){
    let quantity;
    quantity= 70* parseFloat(document.getElementById("Q2").value);
    document.getElementById("v2").value = quantity.toFixed(2);
    window.location.reload();
};
function change3(){
    let quantity;
    quantity= 60* parseFloat(document.getElementById("Q3").value);
    document.getElementById("v3").value = quantity.toFixed(2);
    window.location.reload();
};
function change4(){
    let quantity;
    quantity= 20* parseFloat(document.getElementById("Q4").value);
    document.getElementById("v4").value = quantity.toFixed(2);
    window.location.reload();
};


    let subTotal = V1+V2+V3+V4;
    document.getElementById("v5").value = subTotal.toFixed(2);

    if(!subTotal == 0){

    let TOTAL = TAX+subTotal;
    
    document.getElementById("v7").value = TOTAL.toFixed(2);
    }
    else{
        let val=0;
        document.getElementById("v7").value = val.toFixed(2);
    }
    


