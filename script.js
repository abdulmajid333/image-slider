

let ind = 0;

slideshow(ind);



function slideshow(num){

    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
        ind = 0;
        num = 0;
    }

    if(num < 0){
        ind = slides.length - 1;
        num = slides.length - 1;
    }

    for(let y of slides){
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}

let auto = () => {
    num = nuw + 1;
    slideshow(num);
}

setInterval(auto,5000);

function controller(x){
    ind = ind + x;
    slideshow(ind);
}