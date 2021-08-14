const dropdownBtn = document.querySelector('.dropdown');
const toggle = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const nextBtn = document.querySelector('.next-button');

/*
dropdownBtn.addEventListener('click', () => {  //toggle말고 div인 dropdownBtn에 주면, 드롭다운 클릭했을 때 자동으로 닫힘
    menu.classList.toggle('show')
    console.log('1')
});

menu.addEventListener('click', (e) => { 
    const selected = e.target.innerText;
    toggle.innerText = selected;
    toggle.classList.add('selected');

    //nextBtn.disabled = false;   //googled!
    nextBtn.removeAttribute('disabled')
    console.log('2')

    const option = document.querySelectorAll('.dropdown-option')
    const optionValue = option.getAttribute(value)
    console.log(optionValue)
})
*/

//****** 김버그 버전 - blur 이용 ******//

toggle.addEventListener('click', () => {  //toggle에 줘야 아래 blur 이벤트가 잘 작동함!! 왜인지는 모르겠음
    menu.classList.toggle('show')
});

//toggle로부터 포커스가 벗어났을 때의 이벤트 -> 버튼옵션을 클릭하지 않고 밖에 빈공간을 선택해도 토글 닫히도록
toggle.addEventListener('blur', () => {     
    menu.classList.remove('show')
})

menu.addEventListener('click', (e) => { 
    const selected = e.target.innerText;
    toggle.innerText = selected;
    toggle.classList.add('selected');

    //nextBtn.disabled = false;   //googled!
    nextBtn.removeAttribute('disabled')  
},true)                                     //이거 먼저 실행되게 하려고 true설정!!

// 지점을 선택해주세요 옵션 & disactive 추가해보기
const option = document.querySelector('.dropdown-option')   //어차피 처음꺼니까 그냥 queryselector로 선택
console.log(option)
option.addEventListener('click', () => {
    toggle.classList.remove('selected');
    nextBtn.disabled = true;
    console.log('2')
})



