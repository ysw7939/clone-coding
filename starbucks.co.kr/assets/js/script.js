/* 
    @Filename : script.js
    @Author : 김우영, 양수원
    @Description : 스타벅스 클론코딩 javascript 입니다.
 */
// 헤더 메뉴
const menus = document.querySelectorAll(".menu-bar-category");
// 드롭다운 전체 영역 div
const dropdownWrapper = document.querySelector("#dropdown-wrapper");
// dropdownWrapper의 자식으로 들어가는 메뉴들
const dropdownInner = document.querySelectorAll(".dropdown-wrapper-inner");
// dropdownWrapper 하단 배경 이미지
const dropdownUnderBG = document.querySelector(".dropdown-under-bg")
// dropdownWrapper 하단 content div
const dropdownUnderInner = document.querySelectorAll(".dropdown-under-inner")

// 메뉴바에 mouseover 이벤트 발생시 드롭다운 메뉴 출력
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("mouseover", e => {
        // 다른 dropdownInner 비활성화
        for (const inner of dropdownInner) inner.style.display = "none";
        // 선택된 dropdownInner만 활성화
        dropdownInner[i].style.display = "grid";
        // 드롭다운 메뉴 높이를 내부 div의 길이를 자동으로 인식하여 자동조정함
        // 아래 변수를 조정하여 자동조정 이외에 수동으로 높이 추가 역시 가능함
        const customPlusHeight = 0;
        dropdownWrapper.style.height = String(dropdownInner[i].scrollHeight + customPlusHeight) + "px";

        // 드롭다운 하단 배경 이미지 활성화
        dropdownUnderBG.style.display = "inline-block";
        // 다른 하단 inner div 비활성화
        for (const inner of dropdownUnderInner) inner.style.display = "none";
        // 선택된 하단 inner div만 활성화
        console.log(dropdownUnderInner[i])
        dropdownUnderInner[i].style.display = "block";
        
    })
}

// 메인 컨테이너로 마우스 진입시 드롭다운 비활성화
const container = document.querySelector("#container");
container.addEventListener("mouseover", e => {
    // 드롭다운 height를 0으로 지정하여 보이지 않게 변경함
    dropdownWrapper.style.height = "0px";
    
    // 드롭다운 하단 이미지를 display: none 옵션을 주어 사라지게함
    dropdownUnderBG.style.display = "none";
})

//롤링
let rollingData = [
    '시스템 개선 및 점검 안내',
    '사이렌 오더 주문 건수 제한 안내(11/2~12/31)',
    '2021 플래너 쿠폰 3종 유효 기간 연장 안내',
    '시스템 개선 및 점검 안내',
    '시스템 개선 및 점검 안내'
  ]    // 롤링할 데이터를 넣으면 됩니다 갯수 제한 없어요

let timer = 3000 // 롤링되는 주기 입니다 (1000 => 1초)

let first = document.getElementById('first'),
second = document.getElementById('second'),
third = document.getElementById('third')
let move = 2
let dataCnt = 1
let listCnt = 1

//위 선언은 따로 완전히 수정하지 않는 한 조정할 필요는 없습니다.

first.children[0].innerHTML = rollingData[0]

setInterval(() => {
if(move == 2){
first.classList.remove('card_sliding')
first.classList.add('card_sliding_after')

second.classList.remove('card_sliding_after')
second.classList.add('card_sliding')

third.classList.remove('card_sliding_after')
third.classList.remove('card_sliding')

move = 0
} else if (move == 1){
first.classList.remove('card_sliding_after')
first.classList.add('card_sliding')

second.classList.remove('card_sliding_after')
second.classList.remove('card_sliding')

third.classList.remove('card_sliding')
third.classList.add('card_sliding_after')

move = 2
} else if (move == 0) {
first.classList.remove('card_sliding_after')
first.classList.remove('card_sliding')

second.classList.remove('card_sliding')
second.classList.add('card_sliding_after')

third.classList.remove('card_sliding_after')
third.classList.add('card_sliding')

move = 1
}

if(dataCnt < (rollingData.length - 1)) {
document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
dataCnt++
} else if(dataCnt == rollingData.length - 1) {
document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
dataCnt = 0
}

if(listCnt < 2) {
listCnt++
} else if (listCnt == 2) {
listCnt = 0
}

console.log(listCnt)
}, timer);