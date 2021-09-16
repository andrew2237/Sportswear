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
var productImage = document.getElementById("ProductImage");
var smallImage = document.getElementsByClassName("SmallImage");

smallImage[0].onclick = function(){
    productImage.src = smallImage[0].src;
}
smallImage[1].onclick = function(){
    productImage.src = smallImage[1].src;
}
smallImage[2].onclick = function(){
    productImage.src = smallImage[2].src;
}
smallImage[3].onclick = function(){
    productImage.src = smallImage[3].src;
}
