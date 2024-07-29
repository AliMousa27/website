<template>
  <div
    class="container blog_card"
    style="height: auto"
    v-on:click="expandCard($event)"
  >
    <div class="row row_content">
      <div class="col">
        <h2>Blog title maybe</h2>
        <p></p>
      </div>
    </div>
  </div>
  <div></div>
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
      console.log(e);
      const card = e.currentTarget;
      if (!card.is_expanded) {
        card.style.minHeight = "100%";
        card.style.maxHeight = "3000px";
      } else {
        card.style.minHeight = "1%";
        card.style.maxHeight = "205px";
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

  min-height: 1%;
  max-height: 200px;

  overflow: hidden;
}

.blog_card:hover {
  box-shadow: rgba(87, 87, 87, 0.35) 0px 5px 15px;
  background: #302c2c;
  cursor: pointer;
}

.row_content {
  height: 80%;
  word-wrap: break-word;
}

.arrow {
  opacity: 1;
  width: 20px;
  height: 20px;
  background-image: url("https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png");
  background-size: contain;
  margin-top: 8px;
}

p,
h2 {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
h2 {
  font-size: 30px;
}

p {
  font-size: 20px;
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

@media (max-width: 1068px) {
  .blog_card {
    margin-right: 40px;
  }
}
</style>
