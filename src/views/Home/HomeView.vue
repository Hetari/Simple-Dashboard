<template>
  <!-- <div class="grid grid-cols-3 gap-6 p-10 pb-0"> -->
  <!-- <transition name="fade" appeare>
    <div class="grid grid-cols-3 gap-6 p-10 pb-0">
      <div class="h-32 col-span-1 bg-white border border-gray-500"></div>
      <div class="h-32 col-span-1 bg-white border border-gray-500"></div>
      <div class="h-32 col-span-2 bg-white border border-gray-500"></div>
      <div class="h-32 col-span-1 bg-white border border-gray-500"></div>
      <div class="h-32 col-span-1 bg-white border border-gray-500"></div>
      <div class="h-32 col-span-2 bg-white border border-gray-500"></div>
    </div>
  </transition> -->
  <transition-group
    appear
    tag="div"
    class="grid grid-cols-3 gap-6 p-10 pb-0"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <div
      v-for="i in 7"
      :key="i"
      class="h-32 bg-white border border-gray-500"
      :class="'col-span-' + Math.ceil((i - 1) / 2)"
    ></div>
  </transition-group>
</template>

<script>
import gsap from "gsap";

export default {
  name: "HomeView",
  data() {
    return {
      d: 0.2,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: (this.d += 0.2),
      });
    },
    afterEnter(el) {},
  },
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  /* transform: translateY(0px); */
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>