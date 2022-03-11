//전체 슬라이드 컨테이너
const footerSlides = document.querySelector('.footer-slides');
//모든 슬라이드들
const footerSlideImg = document.querySelectorAll('.footer-slides li');
let footerCurrentIdx = 0;
// 최대 이동 가능 슬라이드수
const footerMaxCount = 9
//이전 버튼
const footerPrev = document.querySelector('.footer-prev');
//다음 버튼
const footerNext = document.querySelector('.footer-next');
//한개의 슬라이드 넓이
const footerSlideWidth = 240;
//슬라이드간의 margin 값
const footerSlideMargin = 100;
// 기본적으로 이전 버튼은 비활성화함
footerPrev.style.visibility = "hidden";
//전체 슬라이드 컨테이너 넓이 설정
footerSlides.style.width = "10000px";

function footerMoveSlide(num) {
    footerSlides.style.left = -num * 1000 + 'px';
    footerCurrentIdx = num;
}

footerPrev.addEventListener('click', function () {
    // footerCurrentIdx가 0이 아닐 경우에만 이전 페이지 이동 기능 활성화
    if (footerCurrentIdx !== 0) {
        footerMoveSlide(footerCurrentIdx - 1);
        
        // 다음 슬라이드 버튼 활성화
        footerNext.style.visibility = 'visible';
    }
    
    // 현재 페이지의 idx가 0일 때 이전 슬라이드 버튼이 클릭되면 이전 슬라이드 버튼 비활성화
    if (footerCurrentIdx === 0) footerPrev.style.visibility = "hidden";
});

footerNext.addEventListener('click', function () {
    // footerCurrentIdx가 마지막 슬라이드일 경우 다음 버튼 작동 안함
    if (footerCurrentIdx !== footerMaxCount - 1) {
        footerMoveSlide(footerCurrentIdx + 1);

        // 이전 슬라이드 버튼 활성화
        footerPrev.style.visibility = "visible";
    }

    // 최대 이동 가능 다음 페이지수 직전에 다음 버튼 제거
    if (footerCurrentIdx === footerMaxCount - 1) {
        footerNext.style.visibility = "hidden";
    }
});