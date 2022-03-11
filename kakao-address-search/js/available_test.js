/**
 * @filename    : available_test.js
 * @author      : 한송희 (onee.ssong@gmail.com), 정민아 (alsdk5069@gmail.com), 양수원 (ysw7939@gmail.com)
 * @description : 유효성 검사 함수들의 모음
 */

document.write("<script src='/regex_helper.js'></script>");

/**--- 유효성 검사 ---*/
document.querySelector('#join_form').addEventListener("submit", e => {
    e.preventDefault();

    const regexHelper = new RegexHelper();

    /** 아이디 검사 */
    if (!regexHelper.value('#id', '아이디를 입력하세요.')) { return false; }
    if (!regexHelper.min_length('#id', 4, '아이디는 최소 4자 이상 입력 가능합니다.')) { return false; }
    if (!regexHelper.max_length('#id', 20, '아이디는 최대 20자까지만 입력 가능합니다.')) { return false; }
    if (!regexHelper.eng_num('#id', '아이디는 영어와 숫자 조합만 입력 가능합니다.')) { return false; }

     /** 비밀번호 검사 */
     if (!regexHelper.value("#pw", "비밀번호를 입력하세요.")) {return false;}
     if (!regexHelper.min_length("#pw", 8, "비밀번호는 최소 8자 이상 입력 가능합니다.")) {return false;}
     if (!regexHelper.max_length("#pw", 16, "비밀번호는 최대 16자까지 입력 가능합니다.")) {return false;}
     if (!regexHelper.compare_to("#pw", "#pw_re", "비밀번호 확인이 잘못되었습니다")) {return false;}

     /** 이름 검사 */
    if (!regexHelper.value('#name', '이름을 입력하세요.')) { return false; }
    if (!regexHelper.min_length('#name', 2, '이름은 최소 2자 이상 입력 가능합니다.')) { return false; }
    if (!regexHelper.max_length('#name', 20, '이름은 최대 20자까지만 입력 가능합니다.')) { return false; }
    if (!regexHelper.kor('#name', '이름은 한글만 입력 가능합니다.')) { return false; }

     // 이메일 검사
    if(!regexHelper.value('#email', '이메일을 입력하세요.')) {return false;}
    if(!regexHelper.email('#email', '이메일 주소가 잘못되었습니다.')) {return false;}

    // 연락처 검사
    if(!regexHelper.value('#tel', '연락처를 입력하세요.')) {return false;}
    if(!regexHelper.cellphone('#tel', '연락처가 잘못되었습니다.')) {return false;}

     // 주소 검사
     if(!regexHelper.value('#postcode', '주소를 입력하세요.')) {return false;}
     if(!regexHelper.value('#address', '주소를 입력하세요.')) {return false;}

      // 상세주소 검사
    if(!regexHelper.value('#address_detail', '상세주소를 입력하세요.')) {return false;}

     /** 처리 완료 */
     alert("가입이 완료되었습니다.");
});