(function () {
  const MENU = [
    { href: "index.html", text: "메인" },
    { href: "myProfile.html", text: "나의 프로필" },
    { href: "myClass.html", text: "나의 강의 일정" },
    { href: "myHoliday.html", text: "나의 휴일" },
    { href: "myTrip.html", text: "나의 여행지" },
    { href: "signUp.html", text: "회원가입" },
  ];

  const placeholder = document.getElementById("site-nav");

  if (placeholder === null) {
    return;
  }

  const currentPage = location.pathname.split("/").pop() || "index.html";

  const nav = document.createElement("nav");

  const heading = document.createElement("h2");
  heading.textContent = "전체 메뉴";
  nav.appendChild(heading);

  const list = document.createElement("ul");

  for (const item of MENU) {
    const listItem = document.createElement("li");

    if (item.href === currentPage) {
      const current = document.createElement("span");
      current.setAttribute("aria-current", "page");
      current.textContent = item.text;
      listItem.appendChild(current);
    } else {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.text;
      listItem.appendChild(link);
    }

    list.appendChild(listItem);
  }

  nav.appendChild(list);
  placeholder.replaceWith(nav);
})();
