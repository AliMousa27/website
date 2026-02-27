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
        <h2 class="paragraph">
          I'm a {{ getAge }} year old software engineer currently working as a
          DevOps engineer consultant for Ericsson developing CI for radio
          software. I graduated with a Bachelor's in Software Engineering from
          the University of Gothenburg and I am also currently studing for my
          Masters in Computer Science from Chalmers University of Technology.
        </h2>
        <br />
      </div>
    </div>
    <div class="row">
      <div class="col-1" id="shine_col">
        <div class="arrow bounce" style="margin-left: auto"></div>
      </div>
      <div class="col-11 shine-col">
        <ShineText
          project_title="Contact me"
          :is_contact_shine="true"
          @click="copyToClipboard"
        ></ShineText>
      </div>
    </div>
  </div>
</template>

<script setup>
import ShineText from "../shared_components/shine.vue";
</script>

<script>
export default {
  name: "IntroText",
  components: {
    ShineText,
  },
  mounted() {
    this.fade_text_word_by_word();
    this.handleMouseLeave();
  },

  beforeUnmount() {
    const shine = document.getElementById("contact_me");
    shine.removeEventListener("mouseleave", this.handleMouseLeave());
  },

  computed: {
    getAge() {
      const birthday = new Date(2001, 8, 4);
      const msInYear = 3.154 * Math.pow(10, 10);
      return Math.floor((new Date() - birthday) / msInYear);
    },
  },

  methods: {
    fade_text_word_by_word() {
      const paragraph = document.querySelector(".paragraph");
      const words = paragraph.innerText.split(" ");
      paragraph.innerText = "";

      words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.innerText = word + " ";
        //initally hide the word
        wordSpan.style.opacity = 0;
        wordSpan.style.filter = "blur(4px)";
        // apply the animation with a delay based on the words index
        wordSpan.style.animation = `fade-in 0.3s ${
          0.1 * (index + 1)
        }s forwards ease`;
        paragraph.appendChild(wordSpan);
      });
    },
    copyToClipboard() {
      const email = "ali0408mousa@gmail.com";
      navigator.clipboard
        .writeText(email)
        .then(() => {
          const shine = document.getElementById("contact_me");
          shine.textContent = "Copied!";
        })
        .catch((e) => console.log(e.message));
    },
    handleMouseLeave() {
      const transition_delay = 320;
      const shine = document.getElementById("contact_me");
      shine.addEventListener("mouseleave", () => {
        setTimeout(() => {
          shine.textContent = "Copy email";
        }, transition_delay);
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

@media (max-width: 800px) {
  .static_header {
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

.static_header {
  display: flex;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: white;
}

.typer_writer {
  font-weight: 300;
}

.paragraph {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;
}

.arrow {
  opacity: 0;
  /*important so it doesnt get overwritten*/
  transition: opacity 1s ease-in-out !important;

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
@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
