// footer dropdown
document.querySelector('#btn').addEventListener('click', e =>{
  e.currentTarget.classList.toggle('on')
});


// slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

// 3초마다 한번씩 자동실행
function startFun() {
slideTime = setInterval(() =>{
  showSlides(slideIndex += 1)
},3000);
}
function stopFun() {
clearInterval(slideTime);    
}
// 마우스 오버시 자동실행 멈춤 나오면 다시실행
if (document.addEventListener){
document.querySelector('.banner-slide').addEventListener("mouseover",stopFun,false);
document.querySelector('.banner-slide').addEventListener("mouseout",startFun,false);

} else {
document.querySelector('.banner-slide').attachEvent("onmouseover",stopFun);
document.querySelector('.banner-slide').attachEvent("onmouseout",startFun);
}
startFun();

function showSlides(n) {

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
// active를 없앰
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
//클릭된 요소만 active와 block
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}

// event slide
let eventIndex = 1;
showEventSlides(eventIndex);

function currentEvent(n) {
showEventSlides(eventIndex = n);
}

function showEventSlides(n) {

let events = document.getElementsByClassName("eventSlid");
let dts = document.getElementsByClassName("dt");
if (n > events.length) {eventIndex = 1}    
if (n < 1) {eventIndex = events.length}

// block 없앰
for (i = 0; i < events.length; i++) {
    events[i].style.display = "none";  
}
// active를 없앰
for (i = 0; i < dts.length; i++) {
    dts[i].className = dts[i].className.replace(" active", "");
}
//클릭된 요소만 active와 block
events[eventIndex-1].style.display = "block";  
dts[eventIndex-1].className += " active";
}

// 메뉴슬라이더 menu-bar-category
const menu = document.querySelector("#menu-bar-category");
const dropdownMenu = document.querySelector("#dropdown-wrapper");

// 메뉴바에 mouseover 이벤트 발생시 드롭다운 메뉴 출력
menu.addEventListener("mouseover", e => {
    dropdownMenu.style.height = "274px";
});

// 드롭다운 메뉴에 mouseout 이벤트 발생시 드롭다운 메뉴 비활성화
dropdownMenu.addEventListener("mouseout", e => {
    dropdownMenu.style.height = "0px";
});