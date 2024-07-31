export function isInViewport(el, divisor) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top + rect.height / divisor < window.innerHeight &&
    rect.left + rect.width / divisor < window.innerWidth &&
    rect.top + rect.height / divisor > 0 &&
    rect.left + rect.width / divisor > 0
  );
}

function applyStyles(el, light_mode, transition_speed) {
  el.style.transition = `all ${transition_speed}s ease`;

  if (
    el.classList.contains("gradient-bg") ||
    el.classList.contains("projects_container") ||
    el.tagName === "BODY"
  ) {
    el.style.backgroundColor = light_mode ? "white" : "black";
  } else if (el.id === "socials") {
    el.style.backgroundColor = light_mode ? "#e4e4e4" : "#313030";
  } else if (el.tagName === "HR") {
    el.style.borderTop = light_mode ? "1px solid black" : "1px solid white";
  } else if (el.matches(".tag-list li")) {
    el.style.boxShadow = light_mode
      ? "0 0.25rem 0.5rem -0.125rem hsl(218, 33%, 9%)"
      : "0 0.5rem 1rem -0.25rem hsl(218, 33%, 9%)";
    el.style.color = light_mode ? "black" : "white";
  } else {
    el.style.color = light_mode ? "black" : "white";
  }
}

export function changeBubblesTheme(light_mode, transition_speed) {
  const list = get_all_els_to_change(
    [
      "h1",
      "p",
      "h2",
      "h5",
      "hr",
      "li",
      ".nav-link",
      ".socials_list .icon-content a",
      ".tag-list li",
    ],
    true
  );

  list.forEach((el) => applyStyles(el, light_mode, transition_speed));
}

export function get_all_els_to_change(els_to_get, getExtras) {
  let list = [];
  if (getExtras) {
    list = [
      document.querySelector(".gradient-bg"),
      document.querySelector(".projects_container"),
      document.querySelector("body"),
    ];
  }

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

export function changeAboutMeTheme(light_mode, transition_speed) {
  const navbar = document.querySelector(".navbar");
  navbar.style.backgroundColor = light_mode ? "white" : "black";

  const list = get_all_els_to_change(
    ["h1", "p", "li", ".nav-link", "hr", "h5", ".socials_list .icon-content a"],
    false
  );

  list.forEach((el) => applyStyles(el, light_mode, transition_speed));
}
