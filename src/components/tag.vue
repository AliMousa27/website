<template>
  <div class="scroller" data-speed="fast">
    <ul class="tag-list scroller__inner">
      <li>HTML</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InfiniteScrollTags",
  mounted() {
    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
    addAnimation();
  },
};
</script>

<style scoped>
.scroller {
  max-width: 600px;
}

.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

.tag-list {
  margin: 0;
  padding-inline: 0;
  list-style: none;
}

.tag-list li {
  padding: 1rem;
  background: hsl(215, 25%, 27%);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem -0.25rem hsl(218, 33%, 9%);
  color: white;
}
</style>
