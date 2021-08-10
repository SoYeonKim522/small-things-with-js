console.log ("I'm JS");

let a = 220;
let b = a-5;
console.log(b);

const what = ["Lia", "Leah", "Lea"];
console.log(what);


//강의 2.1 (function 과 object 섞어쓰기?)
function Hello(name, age){
    console.log(`Hello ${name}. You are ${age} years old.`); //console.log 뒤에는 괄호 필요
}
const greetingg = Hello("Lia", 20)
console.log(greetingg)
//-> 결과 : Hello Lia. You are 20 years old. /undefined

    /*greetingg 라는 변수(상수)는 Hello 함수를 불러온다
  "greetingg = Hello 함수의 리턴값!!(return value)"
  (그리고 Hello 함수는 line 13에 console.log(기록)한다고만 정의되어있음)
  함수 정의에서 console.log 만 있고, 리턴하는 건 없기 때문에 undefined 뜨는 것
  */


function sayHello(name, age){
    return `Hello ${name}. You are ${age} years old.`;  //return 뒤에는 괄호 필요없음
}
const greetLia = sayHello("Lia", 21)
console.log(greetLia)
//-> 결과 : Hello Lia. You are 21 years old
//그러므로 function은 console.log 가 아니라 return으로 정의되어야 한다!


/*궁금
function Halo(name, age){
    //console.log('Hello!', name,". You are", age);
    console.log (`Hello! ${name}. You are ${age}`);  //``를 쓰면 문장부호, 띄어쓰기 더 편함
}   
Halo("Lia", 15);   //WORKS
*/
  

//calculator
const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    }
}
const plus = calculator.plus(5,5)
const minus = calculator.minus(5,5)
console.log(plus, minus)
console.log(minus)




//const title = document.getElementById('title');
//title.innerHTML = "Hi! From JS";
//title.style.color = "orange";
//console.dir(title);


function handleResize(){
    console.log("I've been resized")
}
window.addEventListener("resize", handleResize);    //handleResize()라고 적으면 함수가 자동적으로 바로 호출/실행돼버림
  //->페이지 창 크기를 조절할 경우 "I have been resized"문구가 콘솔창에 뜨게됨


/*제목 색 바꾸는 이벤트 - 하지만 이건 css 요소(색깔)가 js에 들어가는거라 정석은 아님
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(240, 147, 43)";  //이 부분은 #aaaaaa형식으로 하면 안됨. bc JS just works with rbg
const OTHER_COLOR = "#22a6b3";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR; 
    }
}
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
*/

/*
//제목 색 바꾸기 이벤트-className 사용
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
const DEFAULT_CLASS = "default";

function handleClick(){
    const currentColor = title.className;    //id title의 class를 지정해주는 코드가 title.className
    if(currentColor !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = DEFAULT_CLASS;   //"" == empty(아무 값도 가지지 않게한다는 뜻) -> class 'clicked'가 사라짐 -> clicked css 가 아니라 h1 css 색깔을 가지게 됨
    }
}

function init(){
    title.addEventListener("click", handleClick);   //title을 클릭했을 때 handleClick 함수를 실행해라
}
init();   //그 init 함수를 실행해라
*/

//설명: 클릭하면 class = "clicked"가 생성돼 색깔이 적용될 수 있다(콘솔창에서 확인 가능)
/*근데 이상한 점은 애초에 title 에 class=clicked 를 넣어버리니까, 기본으로 지정해준 색깔이 클릭했을 때 나와버림.. - 질문
className 을 사용해서 어쩔 수 없이 class 를 지정해야 하는 것 같은데, 해보니까 class를 두개지정은 안되는 것 같음
일단 css 에서 h1 색깔과 clicked 색깔을 바꿔주는걸로 임시 해결은 했는데 애초에 어떻게 하는건지 잘 모르겠음
    ㄴ한 개의 대상에 class 를 두 개 줄수있다는 걸 알게 되어서 class 를 default clicked 이렇게 두개를 주고 그에 따라 함수도 바꿔봄
*/

/*
//제목 색 바꾸기 이벤트-classList(내장함수 contains, add, remove 사용가능) 사용
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
const DEFAULT_CLASS = "default";

function handleClick(){
    const hasClass = title.classList.contains(DEFAULT_CLASS);
    //맨처음 기본 글씨가 오랜지색으로 설정되는 건 어떻게 했는지 기억안남..(?)
    //맨처음에 clicked default -> default 로 가는데 clicked 로 가야함 - 해결완료
   if(hasClass){
        title.classList.remove(DEFAULT_CLASS), title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS), title.classList.add(DEFAULT_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
*/


//제목 색 바꾸기 이벤트-classList 내장함수 중 toggle 사용. 가장 간단!
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
const DEFAULT_CLASS = "default"; //추가함
//맨처음에clicked default 일때 초록색인데 오랜지색이어야함-해결완료

function handleClick(){
 title.classList.toggle(DEFAULT_CLASS), title.fadeIn(CLICKED_CLASS); //이렇게 하면 css에서 오랜지색 class를 .default.clicked 굳이 안바꿔줘도 됨. 왜..??(토글 설정한 대상이 기본이 on인가..?)
 //title.classList.toggle(CLICKED_CLASS), title.fadeIn(DEFAULT_CLASS);//색계속오랜지-> css에서 청록색 class를 .clicked.default로 변경해야 함. 근데 그럼 처음색이 청록이 됨
}

function init(){
    title.addEventListener("click", handleClick);
}
init();

