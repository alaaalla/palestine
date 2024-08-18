var imgs = Array.from(document.querySelectorAll(".item img"));
var box = document.querySelector("#lightBoxContainer");
var selectedImg;
var lightBox =document.querySelector("#lightBox");
var closeLightBox = document.querySelector("#closeLightBox");
var index;
var nextElement =document.querySelector("#next");
var previousElement =document.querySelector("#previous");

for(var i=0; i<imgs.length;i++){
    imgs[i].addEventListener("click",function(event){
    selectedImg = event.target.getAttribute("src");
    lightBox.style.backgroundImage = `url(${selectedImg})`
        box.classList.replace("d-none","d-flex");
        index = imgs.indexOf(event.target);

    })
}

nextElement.addEventListener("click",next);
function next(){
    index+=1;
    if(index>=imgs.length)index=0;
    selectedImg = imgs[index].getAttribute("src");
    lightBox.style.backgroundImage = `url(${selectedImg})`
}

previousElement.addEventListener("click",previos);
function previos(){
    index-=1;
    if(index<0)index=imgs.length-1;
    selectedImg =imgs[index].getAttribute("src");
    lightBox.style.backgroundImage = `url(${selectedImg})`
}

closeLightBox.addEventListener("click",close)
function close(){
    box.classList.replace("d-flex","d-none");
}
box.addEventListener("click",function(event){
    if(event.target!=lightBox && event.target!= nextElement && event.target != previousElement ){
        close();
    }
})
document.addEventListener("keyup",function(event){
    if(box.classList.contains("d-flex")){
    switch (event.key) {
        case "Escape":
            close();
            break;
        case "ArrowRight":
            next();
            break;
        case "ArrowLeft":
            previos();
            break;
    
        default:
            break;}
    }
})