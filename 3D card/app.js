//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const sizes = document.querySelector('.sizes');
const btn = document.querySelectorAll('button')
//additional items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const emp = document.querySelector('.emp');
const purchase = document.querySelector('.purchase button');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis =( window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //pop out
    title.style.transform = 'translateZ(70px)';
    sneaker.style.transform = 'translateZ(150px) rotateZ(-10deg)'; 
    emp.style.transform = 'translateZ(170px)';  // 이것만 작동안됨,,,,
    purchase.style.transform = 'translateZ(70px)'
})

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;  //그냥 0으로 하면 됨
    card.style.transition = 'all 0.5s ease-in-out';  //제자리로 돌아올 때 주는 효과
    //pop back
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    emp.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)'
})

//choose sizes
const clickSizes = (e) => {
    btn.forEach((b) => {
        b.classList.remove('active')
    })
    e.target.classList.toggle('active')
}

sizes.addEventListener('click', clickSizes)