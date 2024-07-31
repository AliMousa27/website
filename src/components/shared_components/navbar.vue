<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: transparent"
  >
    <RouterLink class="nav-link" to="/">Ali</RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto" id="nav_list" style="width: fit-content">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/blogs">Blogs</RouterLink>
        </li>
        <li>
          <button
            @click="change"
            style="width: 50px; height: 50px"
            id="mode"
          ></button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  mounted() {
    const theme_btn = document.getElementById("mode");
    theme_btn.to_dark_mode = true;
  },
  methods: {
    get_all_els_to_change() {
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
    },
    change(event) {
      const to_dark_mode = event.target.to_dark_mode;
      const list = this.get_all_els_to_change();

      for (let i = 0; i < list.length; i++) {
        let el = list[i];
        el.style.transition = "all 0.5s ease";
        if (
          el.classList.contains("gradient-bg") ||
          el.classList.contains("projects_container") ||
          el.tagName == "BODY"
        ) {
          let color = to_dark_mode ? "white" : "black";
          el.style.backgroundColor = color;
        } else if (el.id == "socials") {
          let color = to_dark_mode ? "#e4e4e4" : "#313030";
          el.style.backgroundColor = color;
        } else if (el.tagName == "HR") {
          let color = to_dark_mode ? "1px solid white" : "1px solid black";
          el.style.borderTop = color;
        } else if (el.matches(".tag-list li")) {
          ("");
          let box_shadow = to_dark_mode
            ? "0 0.25rem 0.5rem -0.125rem hsl(218, 33%, 9%)"
            : "0 0.5rem 1rem -0.25rem hsl(218, 33%, 9%)";
          el.style.boxShadow = box_shadow;
        } else {
          let color = to_dark_mode ? "black" : "white";
          el.style.color = color;
        }
      }
      event.target.to_dark_mode = !to_dark_mode;
    },
  },
};
</script>

<style scoped>
@media (max-width: 992px) {
  div ul li a {
    transform: translateX(40px);
  }
}

@media (max-width: 576px) {
  .navbar a {
    margin-left: 10px !important;
  }
}

.navbar a {
  margin-left: 50px;
  text-decoration: none;
}
a {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 25px;
  color: white;
  position: relative;
}

a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after {
  width: 100%;
  left: 0;
}
.nav-link:hover {
  color: white;
}
.navbar-collapse {
  margin-right: 50px;
}
</style>
