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
  } else if (
    el.classList.contains("blog_card") ||
    el.classList.contains("blog_card_bottom") ||
    el.id === "blog_card"
  ) {
    if (light_mode) {
      el.classList.add("light_mode");
      el.classList.remove("dark_mode");
    } else {
      el.classList.remove("light_mode");
      el.classList.add("dark_mode");
    }
    el.style.border = light_mode ? "1px solid #bcbbbb" : "#2c2c2c solid 2px";
  } else if (el.classList.contains("arrow")) {
    el.style.filter = light_mode ? "invert(1)" : "invert(0)";
  } else if (el.classList.contains("shine")) {
    el.style.color = light_mode
      ? "rgb(0, 0, 0, 0.6)"
      : "color: rgba(255, 255, 255, 0.3)";
    el.style.backgroundColor = light_mode;
  } else if (el.classList.contains("nav-link")) {
    el.style.color = light_mode ? "black" : "white";

    if (light_mode) {
      el.classList.add("light_mode");
      el.classList.remove("dark_mode");
    } else {
      el.classList.add("dark_mode");
      el.classList.remove("light_mode");
    }
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
      ".shine",
    ],
    [
      document.querySelector(".gradient-bg"),
      document.querySelector(".projects_container"),
      document.querySelector("body"),
      document.querySelector(".arrow"),
    ]
  );

  list.forEach((el) => applyStyles(el, light_mode, transition_speed));
}

export function get_all_els_to_change(els_to_get, extra_els = null) {
  let list = [];
  if (extra_els) {
    list = [...extra_els];
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
    [
      "h1",
      "p",
      "li",
      ".nav-link",
      "hr",
      "h5",
      ".socials_list .icon-content a",
      ".shine",
    ],
    false
  );
  list.forEach((el) => applyStyles(el, light_mode, transition_speed));
}

export function changeBlogsTheme(light_mode, transition_speed) {
  const list = get_all_els_to_change(
    [
      "h1",
      "p",
      "h2",
      "h5",
      "h6",
      "hr",
      "li",
      ".nav-link",
      ".socials_list .icon-content a",
      ".blog_card_bottom",
      ".blog_card",
    ],
    [document.querySelector(".gradient-bg"), document.querySelector("body")]
  );

  list.forEach((el) => applyStyles(el, light_mode, transition_speed));
}
