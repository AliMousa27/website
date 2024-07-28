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
        if (scroller.getAttribute("data-animated")) return;
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
  overflow-x: hidden;
}

.scroller__inner {
  padding-block: 1rem;
  overflow-x: hidden;
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
  animation: scroll 30s forwards linear infinite;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

.tag-list {
  margin: 0;
  list-style: none;
}

.tag-list li {
  padding: 1rem;
  background: transparent;
  border: silver 1px solid;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem -0.25rem hsl(218, 33%, 9%);
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: white;
}

@media (max-width: 600px) {
  .scroller {
    max-width: 95vw;
  }
}
</style>
