<template>
  <div class="cssload-triangles absolute-center">
    <div class="cssload-tri cssload-invert"></div>
    <div class="cssload-tri cssload-invert"></div>
    <div class="cssload-tri"></div>
    <div class="cssload-tri cssload-invert"></div>
    <div class="cssload-tri cssload-invert"></div>
    <div class="cssload-tri"></div>
    <div class="cssload-tri cssload-invert"></div>
    <div class="cssload-tri"></div>
    <div class="cssload-tri cssload-invert"></div>
  </div>
</template>

<style scoped lang="scss">
.cssload-triangles {
  height: 79px;
  width: 88px;
}

.cssload-tri {
  position: absolute;
  animation: cssload-pulse 862.5ms ease-in infinite;
  border-top: 26px solid rgb(33, 90, 109);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 0px;
}
.cssload-tri.cssload-invert {
  border-top: 0px;
  border-bottom: 26px solid rgb(33, 90, 109);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
}
.cssload-tri:nth-child(1) {
  left: 29px;
}
.cssload-tri:nth-child(2) {
  left: 15px;
  top: 26px;
  animation-delay: -143.75ms;
}
.cssload-tri:nth-child(3) {
  left: 29px;
  top: 26px;
}
.cssload-tri:nth-child(4) {
  left: 44px;
  top: 26px;
  animation-delay: -718.75ms;
}
.cssload-tri:nth-child(5) {
  top: 53px;
  animation-delay: -287.5ms;
}
.cssload-tri:nth-child(6) {
  top: 53px;
  left: 15px;
  animation-delay: -287.5ms;
}
.cssload-tri:nth-child(7) {
  top: 53px;
  left: 29px;
  animation-delay: -431.25ms;
}
.cssload-tri:nth-child(8) {
  top: 53px;
  left: 44px;
  animation-delay: -575ms;
}
.cssload-tri:nth-child(9) {
  top: 53px;
  left: 58px;
  animation-delay: -575ms;
}

@keyframes cssload-pulse {
  0% {
    opacity: 1;
  }
  16.666% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
