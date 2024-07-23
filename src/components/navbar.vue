<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: transparent; margin-top: 50px"
  >
    <a href="#">Ali</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style="margin-right: 50px">Blogs</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
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
  font-size: 20px;
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
