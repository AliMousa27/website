<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: transparent"
  >
    <RouterLink id="ali_link" class="nav-link" to="/">Ali</RouterLink>
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
          <div class="toggle-switch">
            <label class="switch-label">
              <input type="checkbox" class="checkbox" @click="lol" />
              <span class="slider"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {
  changeBubblesTheme,
  changeAboutMeTheme,
  changeBlogsTheme,
  saveMode,
  loadMode,
} from "@/utils";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();

    const path = computed(() => route.path);
    return { path };
  },
  name: "NavBar",

  methods: {
    lol() {
      const navbar_toggler = document.querySelector(".navbar-toggler");
      const navbar_toggler_icon = document.querySelector(
        ".navbar-toggler-icon"
      );
      const switchToLight = loadMode() == "dark" ? true : false;
      navbar_toggler.style.transition = "all 0.5s ease";
      if (switchToLight) {
        navbar_toggler.style.border = "1px solid black";
        navbar_toggler_icon.style.filter = "invert(1)";
      } else {
        navbar_toggler.style.border = "1px solid white";
        navbar_toggler_icon.style.filter = "invert(0)";
      }
      switch (this.path) {
        case "/":
          changeBubblesTheme(switchToLight, "0.5");
          break;
        case "/about":
          changeAboutMeTheme(switchToLight, "0.5");
          this.emitter.emit("change_theme", switchToLight);
          break;
        case "/blogs":
          changeBlogsTheme(switchToLight, "0.5");
          break;
      }
      saveMode(switchToLight ? "light" : "dark");
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

a.light_mode:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #000000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

a.dark_mode:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #ffffff;
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

.toggle-switch {
  scale: 0.8;
  position: relative;
  padding-left: 20px;
  margin-top: 5px;
  width: 100px;
  height: 25px;
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
}

@media screen and (max-width: 1000px) {
  .toggle-switch {
    margin-top: 0;
    padding-left: 90px;
  }
}

@media screen and (max-width: 576px) {
  a {
    padding-left: 50px;
  }
  .toggle-switch {
    padding-left: 100px;
  }
  .navbar a {
    margin-left: 10px !important;
  }
  a:hover:after {
    width: 60%;
    left: 0;
  }

  a.dark_mode:after,
  a.light_mode:after {
    left: 40%;
  }
  #ali_link {
    transform: translateX(-55px);
  }
}

.switch-label {
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: var(--dark);
  border-radius: 25px;
  cursor: pointer;
  border: 3px solid var(--dark);
}

.checkbox {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider {
  background-color: var(--light);
}

.slider::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
  box-shadow: inset 12px -4px 0px 0px var(--light);
  background-color: var(--dark);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider::before {
  -webkit-transform: translateX(50px);
  -ms-transform: translateX(50px);
  transform: translateX(50px);
  background-color: var(--dark);
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
