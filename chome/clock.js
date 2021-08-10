const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();  
    clockTitle.innerText = `${
        hours > 12 ? hours-12:   //삼항연산자(ternary operator) 사용. mini version of if 조건문.
        hours < 10 ? `0${hours}` :hours}:${ 
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime(); 
    setInterval(getTime, 1000);  //1초에 한번씩 값을 가져오게 한다. (1초=milisec x 1000)
}
init();