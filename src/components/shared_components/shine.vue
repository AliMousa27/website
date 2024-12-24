<template>
  <div class="shine-container">
    <h1 class="shine" ref="shineText">
      {{ project_title }}
    </h1>
    <h1 v-if="is_contact_shine" class="shine shine-top" id="contact_me">
      Copy email
    </h1>
  </div>
</template>

<script>
export default {
  name: "ShineText",
  props: {
    project_title: String,
    is_contact_shine: Boolean,
  },
  mounted() {
    try {
      const shineText = this.$refs.shineText;
      if (this.is_contact_shine && shineText) {
        this.setup_styles(shineText);
        this.setup_timeouts(shineText);
      } else if (shineText) {
        shineText.style.opacity = "1";
      }
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    setup_styles(shineText) {
      shineText.classList.add("old-text");
      shineText.style.opacity = "0";
      shineText.style.fontFamily = "Roboto, sans-serif";
      shineText.style.fontWeight = "900";
      shineText.style.fontSize = "30px";

      requestAnimationFrame(() => {
        shineText.style.animation =
          "shine_text 2s infinite linear, increase_opacity 1s 7s forwards";
      });
    },

    setup_timeouts(shineText) {
      const arrow_delay_period = 7000;
      const contact_me_delay_period = 7650;
      setTimeout(() => {
        const arrow = document.querySelector(".arrow");
        if (arrow) {
          arrow.style.opacity = 1;
        }
      }, arrow_delay_period);

      setTimeout(() => {
        const new_text = shineText.nextSibling;
        if (new_text) {
          new_text.classList.add("new-text");
        }
        shineText.style.opacity = 1;
      }, contact_me_delay_period);
    },
  },
};
</script>

<style>
.shine-container {
  z-index: 111 !important;
  position: relative;
  display: inline-block;
}

.shine {
  display: inline-block;
  position: relative;
  width: fit-content;
  background: linear-gradient(
    to right,
    #ffffff,
    #ffffff 50%,
    rgb(0, 0, 0) 100%
  );
  background-size: 200% 100%;
  background-clip: text;
  color: rgba(255, 255, 255, 0.3);
  text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
  font-size: 45px;
  font-weight: 700;
  opacity: 0;
  animation: shine_text 5s infinite linear !important;
  transition: opacity 0.5s ease, transform 0.5s ease !important;
}

.shine-top {
  position: absolute;
  top: 0;
  left: 0;
}

.new-text {
  width: 100%;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.25s ease;
  font-family: "Roboto, sans-serif" !important;
  font-weight: 900 !important;
  font-size: 30px !important;
}

.shine-container:hover .old-text {
  opacity: 0 !important;
}

.shine-container:hover .new-text {
  opacity: 1;
  cursor: pointer;
}

@keyframes shine_text {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes increase_opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .shine {
    font-size: 35px;
  }
  .old-text {
    font-size: 22px !important;
  }
  .new-text {
    font-size: 22px !important;
  }
}
</style>
