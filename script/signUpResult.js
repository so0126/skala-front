// ============================================================
// 회원가입 결과 표시
//
// signUp.html의 폼이 method="get"으로 값을 보내기 때문에,
// 입력한 값이 주소창 뒤에 ?userId=abc&userName=박소영... 형태로 붙어 옵니다.
// 그 값을 읽어서 화면에 채웁니다.
// ============================================================

// DOMContentLoaded: HTML이 다 만들어진 뒤에 실행하라는 뜻입니다.
// 이게 없으면 아직 없는 요소를 찾으려다 null이 나올 수 있습니다.
document.addEventListener("DOMContentLoaded", function () {
  // window.location.search: 주소창의 ? 뒤쪽 전체 (예: "?userId=abc&userName=박소영")
  // URLSearchParams: 그 문자열에서 원하는 값만 꺼내주는 도구입니다.
  var params = new URLSearchParams(window.location.search);

  // get(): 이름표에 해당하는 값을 꺼냅니다. 없으면 null이 나오므로 || ""로 빈 문자열 처리합니다.
  // trim(): 앞뒤 공백을 없앱니다.
  var userName = (params.get("userName") || "").trim();
  var userId = (params.get("userId") || "").trim();
  var userEmail = (params.get("userEmail") || "").trim();

  var titleEl = document.getElementById("welcome-title");
  var leadEl = document.getElementById("welcome-lead");
  var infoEl = document.getElementById("signup-info");
  var noticeEl = document.getElementById("direct-notice");

  // 회원가입을 거치지 않고 이 페이지를 바로 열면 주소창에 아무 값도 없습니다.
  // 그때는 엉뚱한 "님 환영합니다"가 뜨지 않도록 안내 문구로 바꿉니다.
  if (!userName && !userId && !userEmail) {
    titleEl.textContent = "회원가입 결과";
    leadEl.hidden = true;
    infoEl.hidden = true;
    noticeEl.hidden = false;
    return;
  }

  // textContent: 받은 값을 "글자 그대로" 넣습니다.
  // innerHTML을 쓰면 사용자가 이름 칸에 <script> 같은 걸 넣었을 때 그게 코드로 실행돼 버립니다.
  // 주소창처럼 밖에서 들어온 값을 화면에 넣을 때는 textContent를 쓰는 게 안전합니다.
  titleEl.textContent = (userName || "회원") + "님 환영합니다!";
  document.getElementById("result-id").textContent = userId || "(입력하지 않음)";
  document.getElementById("result-email").textContent = userEmail || "(입력하지 않음)";
});
