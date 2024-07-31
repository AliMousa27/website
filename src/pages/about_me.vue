<template>
  <div ref="vantaRef">
    <div
      class="container-fluid d-flex justify-content-center align-items-center vh-100 flex-column"
      style="flex-direction: column"
    >
      <div class="container scrollable-content text-center" id="scrollable_div">
        <div class="row align-items-start">
          <div class="col"><HeroPictures /></div>
        </div>
        <div
          class="row align-items-center"
          style="margin-top: 23vw"
          id="first_row"
        >
          <div class="col">
            <ShineText :is_contact_shine="false" project_title="About Me" />
            <p>
              As you already know by now my name is Ali, I'm 23 years old and I
              live in Gothenburg, Sweden Gothenburg. I grew up all over the
              world, from Dubai, Iraq, Denmark to Sweden, and therefore
              consequently, I speak nearly 4 languages fluently; English,
              Danish, Arabic and I possess full working proficiency in Swedish.
              I study software engineering at the university of Gothenburg and
              I'm passionate about all things related to programming and I'm
              particularly fascinated and fond of mathematics and the area of
              applied mathematics. In my spare time, I enjoy exploring the
              world, trying out new foods, play the guitar (admittedly i'm not
              that good) and refine my craft in programming.
            </p>
          </div>
        </div>
        <div class="row align-items-start section_wrapper">
          <div class="col-md-8">
            <ShineText
              :is_contact_shine="false"
              project_title="Higher Education"
            />
            <p>
              As mentioned, I study software engineering in the university of
              Gothenburg. I am entering my third and final years of the bachelor
              curriculum and im beyond excited to further my horizons and
              prospects by hopefully uptaking a master degree in the near
              future. My time has been invaluable in this university. I met some
              truly amazing people that have taught me more than I could have
              ever hoped to learn, teachers and acquaintances alike. This
              program taught me the fundamentals of writing clean code, testing,
              various architectural styles and their applications, distributed
              systems development, web developments and so much more and I'm
              eternally grateful for the knowledge I gained. Finally, I was also
              a teacher assistant for many courses but the one i was most
              passioante about was Discrete mathematics where I taught students
              the fundamentals of graph theory, set theory, combinatorics and so
              much more.
            </p>
          </div>
          <div class="col-md-4">
            <img
              :src="require('@/assets/about_me/uni.jpg')"
              class="img-fluid"
              style="max-width: 400px"
              id="uni_image"
            />
          </div>
        </div>
        <div class="row align-items-start section_wrapper">
          <div class="col-md-6">
            <ShineText
              :is_contact_shine="false"
              project_title="Extracurriculare hackathons"
            />
            <p>
              Thus far, I have participated in 2 hackathons as a means to gain
              insight into the industry while I'm still in university. The most
              recent hackathon that I participated in was hosted by system
              weaver where the theme was generative AI. My team and I created a
              ChatGPT wrapper application that maps organizational functional
              requirements to user stories in the click of 2 buttons. We
              finished in 3rd place but it was extremely insightful to see how
              system weaver handles client data for industry giants such as
              Volvo
            </p>
          </div>
          <div class="col-md-6">
            <img
              :src="require('@/assets/about_me/hackathon.png')"
              class="img-fluid"
              style="max-width: 600px"
              id="uni_image"
            />
          </div>
        </div>
        <div class="row align-items-center section_wrapper">
          <div class="col">
            <ShineText :is_contact_shine="false" project_title="Highschool" />
            <p>
              I graduated in 2021 with a International Baccuelrate diplma in
              Hvitfeldtska gymnasiet where I took 6 subjects being: Math: AI HL,
              chemistry HL biology HL, English literature SL, Swedish AB sl and
              finally psychology. I graduated with a score of 39/45!
            </p>
            <img
              :src="require('@/assets/about_me/highschool.jpg')"
              class="img-fluid"
              style="max-width: 50%"
              id="uni_image"
            />
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import BIRDS from "vanta/dist/vanta.birds.min";
import ShineText from "../components/shared_components/shine.vue";
import HeroPictures from "../components/about_me_components/hero_pictures.vue";
import PageFooter from "../components/shared_components/footer.vue";
import { isInViewport } from "@/utils";
import { onBeforeUnmount } from "vue";
</script>

<script>
import { changeAboutMeTheme, loadMode } from "@/utils";
export default {
  name: "AboutMePage",
  components: {
    HeroPictures,
    ShineText,
    PageFooter,
  },
  mounted() {
    const screen_height = window.innerHeight;
    const screen_width = window.innerWidth;
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: screen_height,
      minWidth: screen_width,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0,
      color1: 0xfa6ce2,
      color2: 0x5b5be6,
      colorMode: "lerpGradient",
      birdSize: 1.3,
      separation: 50.0,
      alignment: 20.0,
    });

    window.addEventListener("resize", this.updateVanta);

    const handleScroll = () => {
      const all_sections = document.querySelectorAll(".section_wrapper");

      all_sections.forEach((section) => {
        if (isInViewport(section, 10)) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
        }
      });
    };
    const scrollable_div = document.getElementById("scrollable_div");
    scrollable_div.addEventListener("scroll", handleScroll);

    onBeforeUnmount(() => {
      window.removeEventListener("resize", this.updateVanta);
      this.vantaEffect.destroy();
      scrollable_div.removeEventListener("scroll", handleScroll);
    });

    const switchToLight = loadMode() == "dark" ? false : true;
    this.vantaEffect.setOptions({
      backgroundColor: switchToLight ? 0xffffff : 0x0,
    });
    changeAboutMeTheme(switchToLight, "0.5");
  },

  methods: {
    updateVanta() {
      this.vantaEffect.resize();
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 100px;
}

.scrollable-content {
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

p {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 25px;
}

img {
  border-radius: 20px;
}

@media (max-width: 786px) {
  p {
    font-size: 20px;
  }
}

@media (max-width: 576px) {
  #uni_image {
    max-width: 100% !important;
  }
}

@media (min-width: 900px) and (max-width: 1800px) {
  #first_row {
    margin-top: 45vw !important;
  }
}

.section_wrapper {
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
</style>
