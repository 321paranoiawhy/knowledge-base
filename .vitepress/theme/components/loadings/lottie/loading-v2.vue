<script setup lang="ts">
import {LottieAnimation} from 'lottie-web-vue';
import data from '../../../assets/lottie/loadingV2.json';
</script>

<template>
  <LottieAnimation :animation-data="data" :auto-play="true" :loop="true" :speed="1" ref="anim" />
</template>
