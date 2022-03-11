const writerPages = document.querySelectorAll(".writer-grid-wrapper");
const writerPagesBtns = document.querySelectorAll(".wb");

// wgw 요소들 클릭 이벤트 제어자
for (let b of writerPagesBtns) {
    b.addEventListener("click", e => {
        for (let i of writerPagesBtns) {
            // btn-active 클래스 속성을 가지고 있다면 해당 속성을 제거
            if (i.classList.contains("btn-active")) i.className = "btn btn-rounded wb";
            // 클릭된 버튼에 btn-active 클래스 추가
            b.classList.add("btn-active")
        }
        // 활성화시킬 대상 페이지값을 가져옴
        activeTarget = "#wgw-" + String(b.getAttribute("id")[3]);
        // 모든 페이지 비활성화
        for (let i of writerPages) {
            i.style.display = "none";
        }
        // 활성화시킬 대상 페이지만 활성화
        document.querySelector(activeTarget).style.display = "grid";
    })
}