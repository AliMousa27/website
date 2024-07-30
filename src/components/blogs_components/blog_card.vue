<template>
  <div class="container blog_card">
    <div
      class="row row_content"
      v-on:click="expandCard($event)"
      style="height: 200px"
      id="blog_card"
    >
      <div class="col"><slot></slot></div>
    </div>
  </div>
  <div
    class="blog_card container"
    style="height: auto; height: 55px; transform: translateY(-50px)"
    v-on:click="expandCard($event)"
  >
    <div class="row">
      <div class="d-flex justify-content-between">
        <span
          style="
            background-image: url('https://i2.wp.com/www.freeiconspng.com/uploads/calendar-icon-png-14.png');
            width: 40px;
            height: 40px;
            background-size: contain;
          "
          ><h6 style="margin-left: 60px; margin-top: 10px">2024/07/30</h6></span
        >
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  mounted() {
    const cards = document.querySelectorAll(".blog_card");
    cards.forEach((card) => {
      card.is_expanded = false;
    });
  },

  methods: {
    expandCard(e) {
      const target = e.currentTarget;
      const card =
        target.id === "blog_card"
          ? target
          : target.previousElementSibling.children[0];

      if (card.is_expanded) {
        card.style.height = "198px";
      } else {
        card.style.height = "fit-content";
      }
      card.is_expanded = !card.is_expanded;
    },
  },
};
</script>

<style scoped>
.blog_card {
  background: #201c1c;
  border: #2c2c2c solid 2px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border-bottom: none;
  width: 100vw;
}

.blog_card:hover {
  box-shadow: rgba(87, 87, 87, 0.35) 0px 5px 15px;
  background: #302c2c;
  cursor: pointer;
}

.row_content {
  position: relative;
  word-wrap: break-word;
  transition: all 2s linear;
  padding-top: 30px;
  overflow: hidden;
}

p,
h2,
h6 {
  color: rgb(204, 196, 196);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
h2 {
  font-size: 30px;
  color: #c1cccc;
}

p {
  font-size: 22px;
}

@keyframes expand_to_fit {
  from {
    height: 205px;
    max-height: 205px;
  }
  to {
    height: fit-content;
    max-height: fit-content;
  }
}

@media (max-width: 786px) {
  p {
    font-size: 18px;
  }
  h2 {
    font-size: 24px;
  }
  .blod_card {
    max-width: 100vh;
  }
}

.arrow {
  opacity: 1;
  transition: opacity 1s ease-in-out;
  margin-top: 12px;
  width: 30px;
  height: 30px;
  background-image: url("https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png");
  background-size: contain;
}

img {
  margin-top: 30px;
  margin-bottom: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}
</style>
