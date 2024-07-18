<template>
  <nav class="navbar_container">
    <a class="nav_item_font nav_item_name">Ali Mousa</a>
    <a class="nav_item_font nav_item_about">About</a>
    <a class="nav_item_font nav_item_blogs">Blogs</a>
    <a class="nav_item_font nav_item_contact">Contact me</a>
  </nav>
  <div class="text_container">
    <h1 class="static_header">
      Hello World! I'm Ali, a&nbsp;
      <VueTyped
        class="typer_writer"
        :strings="['software engineer', 'developer', 'math enthusiast']"
        :typeSpeed="100"
        :backSpeed="100"
        :backDelay="1000"
        :loop="true"
      ></VueTyped>
    </h1>
    <h2 class="paragraph" id="about_paragraph">
      I'm a 23-year-old software engineering student at Chalmers/Gothenburg
      university hoping to continue on to acquire a masters in computer science
      at Chalmers university residing in Sweden. I'm most passionate about
      fullstack development with a heavy focus on front end development. I'm
      also very proficient in python which I utilize to create various solutions
      to problems, and learn numerous fields such as AI and data science.
    </h2>
  </div>
  <BubblesBackground />
</template>

<script>
import BubblesBackground from "../components/bubbles_background.vue";

export default {
  name: "BubbelsPage",
  components: {
    BubblesBackground,
  },
  mounted() {
    this.fade_text_word_by_word();
  },
  methods: {
    fade_text_word_by_word() {
      const paragraph = document.getElementById("about_paragraph");
      const words = paragraph.innerText.split(" ");
      paragraph.innerText = "";

      words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        //space is to seperate the words
        wordSpan.innerText = word + " ";
        //initally blur and hide the word
        wordSpan.style.opacity = 0;
        wordSpan.style.filter = "blur(4px)";
        // Apply the animation with a delay based on the word's position given by the index
        wordSpan.style.animation = `fade-in 0.3s ${
          0.1 * (index + 1)
        }s forwards ease`;
        paragraph.appendChild(wordSpan);
      });
    },
  },
};
</script>

<style scoped>
.text_container {
  z-index: 1;

  position: absolute;
  color: white;

  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.static_header {
  display: flex;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 40px;
}

.typer_writer {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 40px;
}

.paragraph {
  position: relative;
  top: 100px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;
  width: 120%;
}

.navbar_container {
  z-index: 1;
  position: absolute;
  width: 99vw;
  height: 10%;
  /*border: 5px solid white;*/
}

.nav_item_font {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin-top: 5vh;
  position: absolute;
}
.nav_item_font::after {
  content: "";
  position: absolute;
  top: 3vh;
  width: 0;
  left: 0;
  height: 2px;
  background-color: white;
  transition: width 0.5s ease-in-out;
}
.nav_item_font:hover::after {
  width: 100%;
}
.nav_item_font:hover {
  cursor: pointer;
}
.nav_item_name {
  left: 5vw;
}
.nav_item_about {
  left: 82vw;
}

.nav_item_blogs {
  left: 88vw;
}

.nav_item_contact {
  left: 94vw;
}
</style>

<style>
/*Global style such that the inserted spans can use this*/
@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
