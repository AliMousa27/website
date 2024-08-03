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
            @click="lol"
            style="width: 50px; height: 50px"
            id="mode"
          ></button>
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
      console.log(this.path);
      const switchToLight = loadMode() == "dark" ? true : false;
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
</style>
