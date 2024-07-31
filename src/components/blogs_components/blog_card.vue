<template>
  <div class="container blog_card">
    <div
      class="row row_content"
      v-on:click="expandCard($event)"
      style="height: auto"
      id="blog_card"
    >
      <div class="col" style="padding-bottom: 50px"><slot></slot></div>
    </div>
  </div>
  <div
    class="blog_card_bottom container"
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
    //boolean to keep track of which card is expanded and which are collapsed
    const cards = document.querySelectorAll(".blog_card");
    cards.forEach((card) => {
      card.is_expanded = false;
    });
  },

  methods: {
    expandCard(e) {
      const target = e.currentTarget;
      //if the user clicks the bottom part then its the element with an id, so i get the previous sibling that has class blog card and get the row which is child[0] to expand
      var card = null;
      var arrow = null;
      if (target.id === "blog_card") {
        card = target;
        arrow = target.parentElement.nextSibling.querySelector(".arrow");
        console.log(arrow);
      } else {
        card = target.previousElementSibling.children[0];
        arrow = target.querySelector(".arrow");
        console.log(arrow);
      }
      if (card.is_expanded) {
        card.style.minHeight = "1%";
        card.style.maxHeight = "198px";
        arrow.style.transform = "rotate(0deg)";
      } else {
        card.style.minHeight = "100%";

        card.style.maxHeight = card.scrollHeight + "px";
        arrow.style.transform = "rotate(180deg)";
      }
      card.is_expanded = !card.is_expanded;
    },
  },
};
</script>

<style scoped>
.blog_card,
.blog_card_bottom {
  background: #201c1c;
  border: #2c2c2c solid 2px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border-bottom: none;
  width: 100vw;
}

.blog_card:hover,
.blog_card_bottom:hover {
  box-shadow: rgba(87, 87, 87, 0.35) 0px 5px 15px;
  background: #302c2c;
  cursor: pointer;
}

.row_content {
  position: relative;
  word-wrap: break-word;
  min-height: 1%;
  max-height: 198px;
  transition: all 1s;
  padding-top: 30px;
  overflow: hidden;
}

.arrow {
  opacity: 1;
  transition: all 1s ease-in-out;
  margin-top: 12px;
  width: 30px;
  height: 30px;
  background-image: url("https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png");
  background-size: contain;
}

h6 {
  color: rgb(204, 196, 196);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
</style>
