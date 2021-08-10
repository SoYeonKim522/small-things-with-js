const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();  //=== const img = document.createElement("img")
    image.src = `image/${imgNumber+1}.jpg`;
    image.classList.add("bgImage"); //css 주기 위한 class추가
    body.appendChild(image);  //body를 image에 들어가게 함
}

function genRandom(){  //숫자 생성하는 함수
    const number = Math.floor(Math.random() * IMG_NUMBER);  //Math.random()*3: 0~2중 무작위 호출/ Math.floor: 소수점 내림(버림). 
    return number;    //body를 image에 들어가게 함
}

function init(){ //실행함수
    //const randomNumber = genRandom(); 
    //paintImage(randomNumber)
    paintImage(genRandom());  //위에 두 줄을 줄여서
    
}
init();