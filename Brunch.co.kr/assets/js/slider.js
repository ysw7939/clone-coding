//전체 슬라이드 컨테이너
const slides = document.querySelector('.slides');
//모든 슬라이드들
const slideImg = document.querySelectorAll('.slides li');
let currentIdx = 0;
// 최대 이동 가능 슬라이드수
const maxCount = 9
//이전 버튼
const prev = document.querySelector('.prev');
//다음 버튼
const next = document.querySelector('.next');
//한개의 슬라이드 넓이
const slideWidth = 480;
//슬라이드간의 margin 값
const slideMargin = 100;
// 기본적으로 이전 버튼은 비활성화함
prev.style.visibility = "hidden";
//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = "10000px";

// 슬라이드 하단의 page-no 클래스를 가진 객체의 자식 요소 가져옴
const slideNo = document.querySelectorAll(".slide-no-page");

function moveSlide(num) {
    slides.style.left = -num * 1000 + 'px';
    currentIdx = num;
}

prev.addEventListener('click', function () {
    // currentIdx가 0이 아닐 경우에만 이전 페이지 이동 기능 활성화
    if (currentIdx !== 0) {
        moveSlide(currentIdx - 1);

        // pageNo 변경
        slideNo[currentIdx].innerHTML = '<u class="active-page">' + 0 + (Number(currentIdx) + 1) + '</u></span>'
        slideNo[currentIdx + 1].innerHTML = '0' + String(currentIdx + 2)
        
        // 다음 슬라이드 버튼 활성화
        next.style.visibility = 'visible';
    }
    
    // 현재 페이지의 idx가 0일 때 이전 슬라이드 버튼이 클릭되면 이전 슬라이드 버튼 비활성화
    if (currentIdx === 0) prev.style.visibility = "hidden";
});

next.addEventListener('click', function () {
    // currentIdx가 마지막 슬라이드일 경우 다음 버튼 작동 안함
    if (currentIdx !== maxCount - 1) {
        moveSlide(currentIdx + 1);

        // pageNo 변경
        slideNo[currentIdx].innerHTML = '<u class="active-page">' + 0 + (Number(currentIdx) + 1) + '</u></span>'
        slideNo[currentIdx - 1].innerHTML = '0' + String(currentIdx)
    
        // 이전 슬라이드 버튼 활성화
        prev.style.visibility = "visible";
    }

    // 최대 이동 가능 다음 페이지수 직전에 다음 버튼 제거
    if (currentIdx === maxCount - 1) {
        next.style.visibility = "hidden";
    }
});

// 페이지 넘버 클릭 이벤트 처리
for (let i of slideNo) {
    i.addEventListener("click", e => {
        // 버튼 클릭 이벤트 발생 이전 pageNo에 강조 효과 제거
        slideNo[currentIdx].innerHTML = '0' + String(currentIdx + 1)

        moveSlide(Number(i.innerHTML) - 1)

        // 버튼 클릭 이벤트 발생 이후 pageNo에 강조 효과 부여
        slideNo[currentIdx].innerHTML = '<u class="active-page">' + 0 + (Number(currentIdx) + 1) + '</u></span>'
    })
}