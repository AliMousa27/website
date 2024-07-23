<template>
  <div class="container">
    <div class="row">
      <div class="col border border-primary">
        <h1 class="static_header">
          Hello World! I'm Ali, a&nbsp;
          <VueTyped
            class="typer_writer"
            :strings="['software engineer']"
            :typeSpeed="100"
            :backSpeed="100"
            :backDelay="1000"
            :loop="true"
          ></VueTyped>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col border border-primary">columns</div>
    </div>
  </div>
  <!-- content here --->
  <!--<h1 class="static_header">
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
    </h2>-->
</template>

<script>
export default {
  name: "IntroText",
  mounted() {
    //this.fade_text_word_by_word();
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
/* smaller than 576 */
@media (max-width: 576px) {
  .static_header,
  .typer_writer {
    font-size: calc(100vw / 20);
  }
}
/* bigger than 576 */
@media (min-width: 576px) {
  .static_header,
  .typer_writer {
    font-size: calc(100vw / 26);
  }
}

@media (min-width: 768px) {
  .static_header,
  .typer_writer {
    font-size: calc(100vw / 24);
  }
}

@media (min-width: 1200px) {
  .static_header,
  .typer_writer {
    font-size: calc(100vw / 30);
  }
}

@media (min-width: 1400px) {
  .static_header,
  .typer_writer {
    font-size: calc(100vw / 40);
  }
}

.text_container {
  z-index: 2;
  background: white;
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
  position: relative;
  top: 100px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;
  width: 120%;
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
