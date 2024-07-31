export function isInViewport(el, divisor) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top + rect.height / divisor < window.innerHeight &&
    rect.left + rect.width / divisor < window.innerWidth &&
    rect.top + rect.height / divisor > 0 &&
    rect.left + rect.width / divisor > 0
  );
}

//light_mode will be true means to switch colors to light mode
export function changeBubblesTheme(light_mode) {
  const list = get_all_els_to_change();

  for (let i = 0; i < list.length; i++) {
    let el = list[i];
    el.style.transition = "all 0.5s ease";
    if (
      el.classList.contains("gradient-bg") ||
      el.classList.contains("projects_container") ||
      el.tagName == "BODY"
    ) {
      let color = light_mode ? "white" : "black";
      el.style.backgroundColor = color;
    } else if (el.id == "socials") {
      let color = light_mode ? "#e4e4e4" : "#313030";
      el.style.backgroundColor = color;
    } else if (el.tagName == "HR") {
      let color = light_mode ? "1px solid black" : "1px solid white";
      el.style.borderTop = color;
    } else if (el.matches(".tag-list li")) {
      let box_shadow = light_mode
        ? "0 0.25rem 0.5rem -0.125rem hsl(218, 33%, 9%)"
        : "0 0.5rem 1rem -0.25rem hsl(218, 33%, 9%)";
      el.style.boxShadow = box_shadow;
      let color = light_mode ? "black" : "white";
      el.style.color = color;
    } else {
      let color = light_mode ? "black" : "white";
      el.style.color = color;
    }
  }
}

export function get_all_els_to_change() {
  var list = [
    document.querySelector(".gradient-bg"),
    document.querySelector(".projects_container"),
    document.querySelector("body"),
  ];
  const els_to_get = [
    "h1",
    "p",
    "h2",
    "h5",
    "hr",
    "li",
    ".nav-link",
    ".socials_list .icon-content a",
    ".tag-list li",
  ];
  els_to_get.forEach((el) => {
    list.push(...document.querySelectorAll(el));
  });
  return list;
}

export function saveMode(theme) {
  localStorage.setItem("theme", theme);
}

export function loadMode() {
  return localStorage.getItem("theme");
}
