<script setup lang="ts">
import {LottieAnimation} from 'lottie-web-vue';
import data from '../../../assets/lottie/loading-circular.json';
</script>

<template>
  <LottieAnimation :animation-data="data" :auto-play="true" :loop="true" :speed="1" ref="anim" />
</template>
