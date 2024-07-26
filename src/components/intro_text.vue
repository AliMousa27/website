<template>
  <div
    class="container border"
    style="margin-top: 20vh; z-index: 100 !important"
  >
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
      </div>
    </div>
    <div class="row">
      <div class="col-1" id="shine_col">
        <div class="arrow bounce align-right"></div>
      </div>
      <div class="col-11 shine-col">
        <ShineText
          project_title="Contact me"
          :is_contact_shine="true"
        ></ShineText>
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
@media (min-width: 1000px) {
  #shine_col {
    width: fit-content !important;
  }
}

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

@media (max-width: 576px) {
  .shine-col {
    padding-left: 30px;
  }
}
.shine-col {
  padding-top: 5px;
}
.align-right {
  margin-left: auto;
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

.contact_line {
  width: 0%;
  left: 0%;
  height: 2px;
  background-color: white;
  animation: move_line 1s 7s forwards;
}

@keyframes move_line {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.arrow {
  opacity: 0;
  transition: opacity 1s ease-in-out;

  width: 40px;
  height: 40px;
  background-image: url("https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-22.png");
  background-size: contain;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-30px);
  }
  60% {
    transform: translateX(-15px);
  }
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
