<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    threshold?: number;
  }>(),
  {
    threshold: 300
  }
);

const scrollTop = ref(0);

const show = computed(() => scrollTop.value > props.threshold);

onMounted(() => {
  scrollTop.value = getScrollTop();
  window.addEventListener(
    'scroll',
    debounce(() => {
      scrollTop.value = getScrollTop();
    }, 100)
  );
});

function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  scrollTop.value = 0;
}

function debounce(func: Function, timeout = 100) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(null, args);
    }, timeout);
  };
}
</script>

<template>
  <!-- reference: https://github.com/wehuss/vitepress-plugin-back-to-top/blob/master/lib/back-to-top.vue -->
  <transition name="fade">
    <div
      class="back-to-top rounded-[50%] bg-[var(--vp-code-block-bg)] hover:bg-[var(--vp-code-bg)]"
      w-36px
      h-36px
      p-0
      bottom-2em
      right-2.5em
      cursor-pointer
      fixed
      z-999
      flex
      items-center
      justify-center
      @click="scrollToTop"
      v-if="show"
    >
      <svg i-carbon:up-to-top w-1em h-1em class="color-[var(--vp-c-brand-1)]"></svg>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.back-to-top {
  box-shadow: 0 2px 12px #0000001a;
}

@media (max-width: 959px) {
  .back-to-top {
    right: -18px !important;
    transition: right 0.25s ease-in-out;
    &:hover {
      right: 8px !important;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
