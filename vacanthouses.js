var slide = 1;
showSlides(slide);

function nextSlide(n){
    showSlides(slide += n) ;
}

function currentSlide(n){
    showSlides(slide = 1);
}

function displaySlides (n){
    var i;
    var slidesshow = document.getElementById("slides")
    
    if (n > slidesshow.length) {slide = 1}
    if (n < 1){slide = slidesshow.length}
    for (i=0; i<slidesshow.length; i++){
        slidesshow[i].style.display = "none";
    }

}

function contact(){
    alert("Kitsuru: +254087654")
}

function kasa(){
    alert("Kasarani: +254087654")
}

function kile(){
    alert("Kileleshwa: +254087654")
}

function search(){
    var kileleshwa = {
        area: "Kileleshwa",
        houses: "4 bedroom, 2-bedroom, 5-bedroom"
    }
    var kasarani={
    area: "Kasarani",    
    houses: "2 bedroom, bedsitters, 3-bedrooms"}

    var rongai={
    area: "Rongai",    
    houses: "single rooms, own compound massionates, 2 bedroom"}

    var allVacants = [kileleshwa,kasarani,rongai]
    var vacancies = document.getElementById("display");
    
    for (var i=0; i<allVacants.length; i++){
        vacancies.innerHTML += "<strong>The available vacant houses in</strong> "+allVacants[i].area + " <strong>are</strong> " +allVacants[i].houses +"<br>"
        
    }
    document.getElementById ("housesearch") .addEventListener("click", clickFn, {once: true})
}


function reload(){
    var y = document.getElementById("display");
    y.style.display="none";

}