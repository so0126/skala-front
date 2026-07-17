// 메모장 기능입니다.
// index.html의 form에 메모를 적으면 ul에 목록으로 쌓이고,
// 브라우저의 localStorage에 저장되어 새로고침해도 남아 있습니다.

// localStorage에 저장할 때 쓸 이름표입니다.
// github.io 주소는 여러 프로젝트가 저장 공간을 함께 쓰기 때문에
// 다른 프로젝트와 겹치지 않도록 앞에 skala를 붙였습니다.
const STORAGE_KEY = "skala-memo";

// document.getElementById: HTML에서 id로 요소 하나를 찾아옵니다.
const form = document.getElementById("memo-form");
const textInput = document.getElementById("memo-text");
const listBox = document.getElementById("memo-list");

// 메모 목록입니다. 객체 하나가 메모 한 개입니다.
// 예: { id: 1752... , text: "우유 사기", date: "2026. 7. 17." }
let memos = loadMemos();

// 저장해 둔 메모를 불러옵니다.
// localStorage에는 글자만 저장할 수 있어서, 저장할 때 JSON.stringify로 글자로 바꾸고
// 불러올 때 JSON.parse로 다시 배열로 되돌립니다.
function loadMemos() {
  const saved = localStorage.getItem(STORAGE_KEY);

  // 처음 방문해서 저장된 게 없으면 null이 나옵니다. 그때는 빈 배열로 시작합니다.
  if (saved === null) {
    return [];
  }

  return JSON.parse(saved);
}

// 현재 목록을 localStorage에 저장합니다.
function saveMemos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
}

// id가 일치하는 메모 하나를 지웁니다.
function removeMemo(id) {
  // filter: 조건이 참인 것만 남긴 새 배열을 만듭니다.
  // 여기서는 "지울 id가 아닌 것만" 남겨서 결과적으로 그 메모가 빠집니다.
  memos = memos.filter(function (memo) {
    return memo.id !== id;
  });

  saveMemos();
  render();
}

// memos 배열의 내용을 화면의 ul에 그립니다.
function render() {
  // 이전에 그려둔 목록을 먼저 비웁니다. 안 비우면 메모가 중복해서 쌓입니다.
  listBox.innerHTML = "";

  // 메모가 하나도 없을 때 빈 화면 대신 안내 문구를 보여줍니다.
  if (memos.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "아직 메모가 없습니다. 첫 메모를 남겨 보세요.";
    listBox.appendChild(empty);
    return;
  }

  for (let i = 0; i < memos.length; i++) {
    const memo = memos[i];

    // createElement: 새 태그를 만듭니다. appendChild: 그 태그를 안에 넣습니다.
    const item = document.createElement("li");

    const text = document.createElement("p");
    // textContent: 적은 글을 "글자 그대로" 넣습니다.
    // innerHTML을 쓰면 <script> 같은 태그를 적었을 때 그게 태그로 실행돼버립니다.
    // 입력받은 값을 화면에 보여줄 때는 textContent를 쓰는 습관을 들이세요.
    text.textContent = memo.text;

    const when = document.createElement("small");
    when.textContent = memo.date;

    const removeButton = document.createElement("button");
    // type="button": 폼을 제출하지 않는, 그냥 클릭용 버튼이라는 뜻입니다.
    removeButton.type = "button";
    removeButton.textContent = "삭제";

    // 버튼마다 "이 메모의 id"를 기억한 채로 클릭 함수를 붙입니다.
    removeButton.addEventListener("click", function () {
      removeMemo(memo.id);
    });

    item.appendChild(text);
    item.appendChild(when);
    item.appendChild(removeButton);
    listBox.appendChild(item);
  }
}

// addEventListener: form이 제출될 때 실행할 함수를 등록합니다.
form.addEventListener("submit", function (event) {
  // preventDefault: form은 원래 제출하면 페이지를 새로 고칩니다.
  // 그러면 방금 적은 메모가 화면에서 사라지므로 기본 동작을 막습니다.
  event.preventDefault();

  // trim: 앞뒤 공백을 지웁니다.
  const text = textInput.value.trim();

  // required는 완전히 빈 칸만 막아줍니다. 공백만 입력한 경우는 여기서 걸러냅니다.
  if (text === "") {
    alert("메모 내용을 입력해 주세요.");
    return;
  }

  // unshift: 배열 맨 앞에 넣습니다. 최신 메모가 위로 오게 하려고 push 대신 씁니다.
  memos.unshift({
    // Date.now(): 지금 시각을 숫자로 돌려줍니다. 메모마다 다른 값이라 이름표(id)로 씁니다.
    id: Date.now(),
    text: text,
    date: new Date().toLocaleDateString("ko-KR"),
  });

  saveMemos();
  render();

  form.reset(); // 입력칸을 비웁니다.
  textInput.focus(); // 다음 메모를 바로 적을 수 있게 커서를 옮깁니다.
});

// 페이지가 열릴 때 저장돼 있던 메모를 화면에 그려줍니다.
render();
