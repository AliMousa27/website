<template>
  <IntroText />
  <BubblesBackground> </BubblesBackground>
  <div
    class="container-fluid"
    id="first_divider"
    style="width: 100vw; padding: 0"
  >
    <PageCurve></PageCurve>
  </div>
  <div class="projects_container">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :project_title="project.title"
      :project_description="project.text"
      :images="project.images"
      :is_image="project.is_image"
      :tags="project.tags"
      :video_src="project.video_src"
    ></ProjectCard>
  </div>

  <div style="height: 23vw; transform: translateY(-30vw)">
    <PageCurve></PageCurve>
  </div>
  <PageFooter></PageFooter>
</template>

<script>
import BubblesBackground from "../components/intro_page_components/bubbles_background.vue";
import IntroText from "../components/intro_page_components/intro_text.vue";
import ProjectCard from "../components/intro_page_components/project_card.vue";
import PageCurve from "../components/intro_page_components/curve.vue";
import PageFooter from "../components/shared_components/footer.vue";
export default {
  name: "BubbelsPage",
  components: {
    IntroText,
    BubblesBackground,
    PageCurve,
    ProjectCard,
    PageFooter,
  },

  data() {
    return {
      projects: [
        {
          title: "Data Science From Scratch",
          text: "Data Science from Scratch, by Joel Grus is a book that I read in the summer of 2023 to fully grasp the fundamentals and underlying principles of AI, data and how the two concepts relate. Admittedly the most fun chapters of the book were the ones where I had to implement math concepts and functions in python and then use them in later chapters to create meaningful mini applications such as a spam filter using bayes theorem, fully implementing a linear neural network from scratch and writing a modular back propagation algorithm, NLP, implementing SQL from scratch and much much more.",
          tags: [
            "AI",
            "Data science",
            "Applied math",
            "NLP",
            "Neural Networks",
            "Machine learning",
          ],
          images: [require("@/assets/data_science/data_science_book.jpg")],
          is_image: true,
        },
        {
          title: "Let Bro Cook",
          text: "Let bro cook was the very first website I ever made and it served as the basis and introduction to web development that serves as a recipe sharing website. It is safe to say that this website sparked extreme interest and curiosity in fullstack development. The UI is responsive, animated, fluid and clean. I utilized ExpressJS for the backend alongside mongodb for persistent storage. Users can log in, change password, create recipes, favorite recipes and many other functionalities that are typical and atypical to CRUD apps alike and get recommendation from an algorithm. Finally, to breathe life into the platform, I web scraped over 1000 recipes from the internet from scratch.",
          tags: [
            "Vue",
            "Three.js",
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive design",
            "Bootstrap",
            "MongoDB",
            "Web scraping",
            "ExpresJS",
          ],
          images: [
            require("@/assets/let_bro_cook/let_bro_cook_signup.png"),
            require("@/assets/let_bro_cook/let_bro_cook_home.png"),
          ],
          is_image: true,
        },
        {
          title: "Portfolio Website",
          text: "Yes the astute observer would notice that this project is the actual website your on right now! Its written in Vue and serves as my platform to communicate the world who I am and what I do. It uses three js, moving linear gradients, gaussian blurs and advanced animations to bring my bring my vision to life.",
          tags: [
            "Vue",
            "Three.js",
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive design",
            "Bootstrap",
          ],
          images: [
            require("@/assets/website/about_me.png"),
            require("@/assets/website/bubbles.png"),
          ],
          is_image: true,
        },
        {
          title: "Shorts Automater",
          text: "This is a lightweight project that utilizes python and pymovie to essentially make a quick buck and fully automate the process of creating trendy youtube shorts / instagram reels / tiktoks. The application uses a CLI to get a link and how many comments, opens a simulated selenium browser to grab screenshots of the comments. The program uses an AI to transcribe mp3 sound files into text with given timestamps to be subtitled at the exact correct time to retain the viewers’ attention span. You can see an example here.",
          tags: ["Python", "AI", "Pymovie", "Selenium", "Algorithm"],
          is_image: false,
          video_src: require("@/assets/shorts/shorts.mp4"),
        },
        {
          title: "Toothtrek",
          text: "ToothTrek is a disturbed system that utilizes MQTT to streamline and make implementing the service oriented architecture style easier. The middleware layer that holds the service was written in spring boot while the front end was made with flutter. ToothTrek to simplify dental appointments. The application will enable easy booking for patients and dentists alike. Patients can find available time slots and dental offices, while dentists provide their schedules. The system consists of 4 main components, the website/app frontend, the express backend server, the dentist API, and the various services in the middleware layer. ",
          tags: [
            "Springboot",
            "Java",
            "Express",
            "Flutter",
            "Distributed system",
            "MQTT",
          ],
          images: [require("@/assets/temp.png"), require("@/assets/temp2.png")],
          is_image: true,
        },
        {
          title: "Wioplay",
          text: "Wioplay is a mini distributed system project where half the software lies on a Seeeduino terminal and the other half is on an android app. Wioplay allows users to stream music from a music library directly from their android phone into the terminal. Moreover the app functions as a means to your fitness goals as the user works out, they gain more 'calorie' currency to purchase more songs to stream. I created an algorithm to parse songs into individual notes that as the terminal can't play chords but rather only notes. The software uses MQTT for separation of concerns.",
          tags: [
            "Android",
            "Java",
            "Algorithms",
            "MQTT",
            "Embedded system",
            "Software architecture",
          ],
          is_image: false,
          video_src: require("@/assets/wioplay/wioplay_vid.mp4"),
        },
        {
          title: "Snake",
          text: "This was my very first project that I worked on. It's the traditional Snake game written fully in Java and JavaFx. I was very ambitious for my level back then and added numerous features such as extensive snake customization, key bindings, highscore system and much more.",
          tags: ["Java", "JavaFx", "Game development"],
          images: [
            require("@/assets/snake/snake_menu.png"),
            require("@/assets/snake/snake_grid.png"),
            require("@/assets/snake/snake_skins.png"),
          ],
          is_image: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (max-width: 1006px) {
  #first_divider {
    transform: translateY(-50%) !important;
  }
}

#first_divider {
  transform: translateY(-25%) !important;
}

.projects_container {
  opacity: 1 !important;
  display: flex;
  margin-top: 200px;
  position: relative;
  z-index: 11 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 200px;
  background: black;
  box-sizing: border-box;
}
</style>
<style>
html body {
  overflow-x: hidden !important;
  background: black !important;
  font-family: "Roboto", sans-serif !important;
  width: 100vw !important;
}
</style>
