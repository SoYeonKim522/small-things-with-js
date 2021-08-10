const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),          //위에 선택한 todoForm 안에 있는 input 만
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";  //따옴표 왜???

let toDos = [];
let editMode = false;
let editID = '';

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode; //list를 가르킴. (버튼의 부모를 가르키는 용어가 parentsNode인것을 console.dir 을 통해 찾아넣음) 부모를 알아야 각각의 id가 보여지고, 이 id값으로 각 todo identify가능->'어떤걸 삭제할지'에 필요
    toDoList.removeChild(li); 
    const cleanToDos = toDos.filter(function(toDo){  //filter는 아래 조건에 맞는 것들만 배열로 리턴해줌
        return toDo.id !== parseInt(li.id);  //parseInt 는 string을 숫자로 바꿔줌. toDo.id 가 숫자라서 둘을 같은 형식으로 맞춰야함    
    });
   toDos = cleanToDos;          //수정된 배열로 변경 
   saveToDos();                 //수정사항 local storage에 반영
}

function editToDo(event){                   //버튼 누르면 같은 내용이 입력창에 뜨기
    const btn = event.target;
    //let inputValue = toDoInput.value;        //이렇게 하면 안되고
    let items = event.currentTarget.previousElementSibling;  //(원래 있던 값) 이벤트를 이용해야 옳은 곳 지정가능
    toDoInput.value = items.innerHTML;          //.value 를 input에 직접 줘야만 함...
    editID = items.parentNode.id;
    editMode = true;

    //toDos.splice(newId-1, 1, "toDoInput.value");
    console.log(items);                 //== a
    console.log(editID)
    console.log(editMode);
    //toDoForm.replaceChild(toDoInput, items);  - can't work

    //saveTodos();
};

//local storage에 데이터 저장
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    /*localStorage는 js정보를 저장하지 못함. string만 저장 가능 
    그래서 JSON.stringify를 통해 js object를 string으로 바꿔줌
    JSON이란 js가 데이터를 다룰 수 있게 object로 바꿔주거나, js의 object를 string으로 바꿔주는 기능 */
}

//입력한 리스트를 화면에 띄우기
function paintToDo(text){
    const list = document.createElement("li");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerText = "❌";
    delBtn.addEventListener('click', deleteToDo); 
    editBtn.innerText = '🖍';
    editBtn.addEventListener('click', editToDo);
    span.innerText = text;
    list.appendChild(span);  //list에 입력한 글자 추가
    list.appendChild(editBtn);
    list.appendChild(delBtn);  //list에 삭제버튼 추가
    
    list.id = newId;
    toDoList.appendChild(list);
    const toDoObj = {
        text : text,
        id : newId
    };
    
    if(!editMode){
        toDos.push(toDoObj); //toDos 배열에 toDoObj 추가해라
        saveToDos();
    } else {         //편집하고 enter누를 때 
        function editFunc(editID, text){
        toDoInput.value = text;
        console.log(toDoInput.value)
        console.log(text)       //new
        //toDos.splice(newId-1, 1, {text});
        
        editMode = false;

        let local = saveToDos();

        local = local.map((item) => {
            if(item.id === editID){
            item.value = text;
            } 
            return item;
        })
    };


//리스트 추가하기
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;     //=입력한 값
    paintToDo(currentValue);
    toDoInput.value = ""; //제출하면(엔터치면) 입력칸이 비게 됨
}

//기존 데이터 local storage에서 가져와서 화면에 띄우기
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){  //forEach : 배열 안에 있는 요소 하나하나에 함수 적용
            paintToDo(toDo.text); 
    });
}
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
