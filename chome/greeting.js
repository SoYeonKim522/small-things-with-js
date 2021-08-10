const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing"; //클래스명을 자바스크립트에서 이름만 똑같이 기입해준다면 따로 html 창처럼 querySelector 같은 함수를 이용안하고도 쓸수가 있다

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();  //이렇게 안할 경우 제출버튼 누르면 제출한게 저 멀리 날아가버림
    const currentVaule = input.value; //=입력한 값
    paintGreeting(currentVaule);
    saveName(currentVaule);
}

function askForName(){
    form.classList.add(SHOWING_CN); //form(입력란) 을 나타나게 해라
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){  //paint = 화면에 보여주다
    form.classList.remove(SHOWING_CN);  //위에 해준 변수선언 없이 클래스 사용도 가능 : form.classList.remove(".showing");
    greeting.classList.add(SHOWING_CN);  //greetings를 css에서 안보이게 해놨는데, showing 을 추가하면 화면에 보이게 됨
    greeting.innerText = `Hello ${text}`; //''아니고 꼭 ``
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser); 
    }
}

function init(){
    loadName();
}
init(); 