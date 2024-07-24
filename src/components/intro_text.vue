<template>
  <div class="container" style="margin-top: 20vh; z-index: 100 !important">
    <div class="row">
      <div class="col">
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
      </div>
    </div>
    <div class="row" style="margin-top: 50px">
      <div class="col">
        <h2 class="paragraph" id="about_paragraph">
          I'm a 23-year-old software engineering student at Chalmers/Gothenburg
          university hoping to continue on to acquire a masters in computer
          science at Chalmers university residing in Sweden. I'm most passionate
          about fullstack development with a heavy focus on front end
          development. I'm also very proficient in python which I utilize to
          create various solutions to problems, and learn numerous fields such
          as AI and data science.
        </h2>
        <br />
        <ShineText
          project_title="Welcome to my portfolio!"
          :some_boolean="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShineText from "./shine.vue";
export default {
  name: "IntroText",
  components: {
    ShineText,
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
        wordSpan.innerText = word + " ";
        //initally hide the word
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
/* smaller than 800 */
@media (max-width: 800px) {
  .static_header {
    /*override the display flex to display block to move typer wrtier below the static text*/
    display: inline-block !important;
  }
  .paragraph {
    font-size: 20px !important;
  }
  .container {
    margin-top: 10vh !important;
  }
}

.text_container {
  z-index: 2;
}

.static_header {
  display: flex;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: white;
}

.typer_writer {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

.paragraph {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;
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
