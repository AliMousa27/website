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

<script setup>
import BubblesBackground from "../components/intro_page_components/bubbles_background.vue";
import IntroText from "../components/intro_page_components/intro_text.vue";
import ProjectCard from "../components/intro_page_components/project_card.vue";
import PageCurve from "../components/intro_page_components/curve.vue";
import PageFooter from "../components/shared_components/footer.vue";
</script>

<script>
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
          text: "Let bro cook was the very first website I ever made and it served as the basis and introduction to web development that serves as a recipe sharing website. It is safe to say that this website sparked extreme interest and curiosity in fullstack development. The UI is responsive, animated, fluid and clean. I utilized ExpressJS for the backend alongside mongodb for persistent storage. Users can log in, change password, create recipes, favorite recipes and many other functionalities that are typical and atypical to CRUD apps alike and get recommendation from an algorithm. Finally, to breathe life into the platform, I web scraped over 1000 recipes from the internet from scratch, encoded them in base64 then let the website render it.",
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
          text: "Yes the astute observer would notice that this project is the actual website your on right now! Its written in Vue and serves as my platform to communicate the world who I am and what I do. It uses three js, moving linear gradients, gaussian blurs and advanced animations to bring my bring my vision and creativity to life.",
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
          text: "This is a lightweight project that utilizes python and pymovie to essentially make a quick buck and fully automate the process of creating trendy youtube shorts / instagram reels / tiktoks. The application uses a CLI to get a link and how many comments, opens a simulated selenium browser to grab screenshots of the comments. The program uses an AI to transcribe mp3 sound files into text with given timestamps to be subtitled at the exact correct time and adds gameplay in the background to retain the viewers’ attention span. You can see an example here.",
          tags: [
            "Python",
            "AI",
            "Pymovie",
            "Selenium",
            "Algorithm",
            "Web scraping",
          ],
          is_image: false,
          video_src:
            "https://private-user-images.githubusercontent.com/114988369/308372139-1b6dfe56-20c5-4e7a-88fd-e78eaeb62ff8.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIzNTY4OTYsIm5iZiI6MTcyMjM1NjU5NiwicGF0aCI6Ii8xMTQ5ODgzNjkvMzA4MzcyMTM5LTFiNmRmZTU2LTIwYzUtNGU3YS04OGZkLWU3OGVhZWI2MmZmOC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDczMFQxNjIzMTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNDcwYmEyODUzMDRiMjBhYzYwZjQzOTQxMmM5ZTJhODMwNzc3MWMzOWE1OGM1MDhiZTU4Y2I0Yzc5ZTdlNjg3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.qTDGhIvBxBL7p0QOH7Nfngwm7SaWhivA-L0ZKTMWbb4",
        },
        {
          title: "Toothtrek",
          text: "ToothTrek is a disturbed system that utilizes MQTT to streamline and make implementing the service oriented architecture style easier. The middleware layer that holds the service was written in spring boot while the front end was made with flutter. ToothTrek to simplify dental appointments. The application will enable easy booking for patients and dentists alike. Patients can find available time slots and dental offices, while dentists provide their schedules. The system consists of 4 main components, the website/app frontend, the express backend server, the dentist API, and the various services in the middleware layer. Moreover, the application was rigorously tested with CI/CD, to streamline the devolpment process, stress tested using locust and simulated millions of requests that could be handled and visualized in grafana. ",
          tags: [
            "Springboot",
            "Java",
            "Express",
            "Flutter",
            "Distributed system",
            "MQTT",
            "Testing",
            "CI/CD",
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
            "Arduino",
            "Algorithms",
            "MQTT",
            "Embedded system",
            "Software architecture",
          ],
          is_image: false,
          video_src:
            "https://github-production-user-asset-6210df.s3.amazonaws.com/114988369/353540705-916aabb5-fb41-43db-90ed-a95b7be0f317.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240730T163040Z&X-Amz-Expires=300&X-Amz-Signature=f94dddb165752a497f2bbcbd3d8f8cc231044b80931a034a43be5ba6f2df6f19&X-Amz-SignedHeaders=host&actor_id=114988369&key_id=0&repo_id=674714698",
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
