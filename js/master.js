
let mainColors = localStorage.getItem("color_option");

if(mainColors !== null){
    
    document.documentElement.style.setProperty('--main--color',mainColors);

    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");       
    
        
        if(element.dataset.color === mainColors){
        
            element.classList.add("active");
    }


});

}

let backOption = true;

let backInterval;

let backLocal = localStorage.getItem("background_option");

if (backLocal !== null){

    if(backLocal ==='true'){
        backOption=true;
    
    }else{
        backOption=false;
    }
    document.querySelectorAll(".random-backgrounds span").forEach(element =>{
        element.classList.remove("active");
    });

    if(backLocal ==='true'){
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }
    else{
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}

document.querySelector(".toggle-setting .fa-cog").onclick = function(){

    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");



};

// switch colors
const colorli = document.querySelectorAll(".colors-list li");

colorli.forEach(li => {
    
    li.addEventListener("click",(e) =>{

        document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
    
        localStorage.setItem("color_option" , e.target.dataset.color);
        
        handleActive(e);

    });

});

// switch backgrounds
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

randomBackEl.forEach( span => {
    
    span.addEventListener("click",(e) =>{

        handleActive(e);

    if(e.target.dataset.background ==='yes'){

        backOption=true;
        
        randomizeImage();

        localStorage.setItem("background_option",true);

    }
    else{

        backOption=false;

        clearInterval(backInterval);
        localStorage.setItem("background_option",false);
    }

    });

});


let landingPage = document.querySelector(".landing-page");

let imgsArray = ["3.jpg","7.jpg","8.jpg","9.jpg","4.jpg"];



function randomizeImage(){

    if(backOption === true){

        backInterval= setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgsArray.length);

            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber]+ '")';

        },1000);
    }
}


//skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function() {

    let skillOffseetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if( windowScrollTop > (skillOffseetTop + skillsOuterHeight - windowHeight)){

        let allSkills = document.querySelectorAll(".skills-box .skills-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', e=>{

        let overlay = document.createElement("div");

        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay);

        let popupbox = document.createElement("div");

        popupbox.className = 'popup-box';
        
        if(img.alt !== null){
            let imageHeading = document.createElement('h3');

            let imgText = document.createTextNode(img.alt);

            imageHeading.appendChild(imgText);

            popupbox.appendChild(imageHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupbox.appendChild(popupImage);

        document.body.appendChild(popupbox);

        let closebutton = document.createElement("span");

        let clsetext = document.createTextNode("X");

        closebutton.appendChild(clsetext);

        closebutton.className="close-button";

        popupbox.appendChild(closebutton);

    });

});

document.addEventListener("click", e=> {
    if (e.target.className == "close-button"){

        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();

    }
});

const allBullets = document.querySelectorAll(".nav-bullets .bullets" );

allBullets.forEach(bullet =>{

    bullet.addEventListener('click', (e)=>{

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior:'smooth'

        });
    });
});

function handleActive(ev){

    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");       

    });

    ev.target.classList.add("active");

};

let bulletspan = document.querySelectorAll(".bullets-option span");

let bulletcontainer = document.querySelector(".nav-bullets");

let bulletLocation = localStorage.getItem("bullets_option");

if (bulletLocation !== null){

    bulletspan.forEach(span=>{
        span.classList.remove("active");

    });

    if(bulletLocation === 'block'){

        bulletcontainer.style.display='block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{
        
        bulletcontainer.style.display='none';

        document.querySelector(".bullets-option .no").classList.add("active");
    }

}

bulletspan.forEach(span=>{

span.addEventListener('click', (e) => {

    if(span.dataset.display === 'show'){

        bulletcontainer.style.display= 'block'

        localStorage.setItem("bullets_option",'block');

    }else{

        bulletcontainer.style.display= 'none'

        localStorage.setItem("bullets_option",'none');
    }

    handleActive(e);

    });
});

document.querySelector(".reset-options").onclick = function() {

    localStorage.removeItem("bullets_option");
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    window.location.reload();

};

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
randomizeImage();