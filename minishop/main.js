//fetch the items from the JSON file
function loadItems(){
    return fetch('data/data.json')  //fetch: 데이터 받아오는 함수. 괄호 안에는 데이터 주소
    .then(response => response.json())  //성공하면 json으로 변환하고
    .then(json => json.items)           //json 안에 전체가 아니라 items만 리턴
}

//update the list with the given items
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
} //받아온 items 객체를 li의 문자열 배열로 변환 후(createHTML~함수), 이걸 하나의 문자열로 만들어서(join) 
  //이걸 html의 items 클래스 부분에 추가


//create html list item from the given items
function createHTMLString(item){
    return`
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail"/>
        <span class="descriptoin">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items){        //인자는 아래 함수에서 정해진 것
    const dataset = event.target.dataset;  //=html에서 data-key, data-value 추가했는데, 여기에 접근하는 방식
    const key = dataset.key;
    const value = dataset.value;

    if (key==null || value==null){   //우리가 필터링할 수 있는 정보가 들어있지 않다면
        return;                      //아무것도 처리하지 않고 함수를 끝내라
    }

    displayItems(items.filter(item => item[key] === value));        
}


function setEventListeners(items){    //함수 이름 정한거임
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');     //button들에 일단 한꺼번에 이벤트 설정
    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", event => onButtonClick(event, items));
}
/* 내가 한 부분
function filterShirt(items){
    const shirtBtn = document.getElementsByClassName("shirtBtn");
    items.filter(items.includes('shirt'));    
}
*/

//main structure
loadItems()     //데이터를 불러오는 일이 시간이 걸리므로, items 대신 promise를 리턴하도록
.then(items => {
    console.log(items);
    displayItems(items);
    setEventListeners(items); 
})
.catch(console.log)             //오류 핸들링