<template>
  <div class="overlay-loader absolute-center">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay-loader {
  width: 97px;
  height: 97px;
}
.loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 97px;
  height: 97px;
  animation-name: rotateAnim;
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.loader div {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.loader div:nth-child(odd) {
  border-top: none;
  border-left: none;
}
.loader div:nth-child(even) {
  border-bottom: none;
  border-right: none;
}
.loader div:nth-child(2) {
  border-width: 2px;
  left: 0px;
  top: -4px;
  width: 12px;
  height: 12px;
}
.loader div:nth-child(3) {
  border-width: 2px;
  left: -1px;
  top: 3px;
  width: 18px;
  height: 18px;
}
.loader div:nth-child(4) {
  border-width: 3px;
  left: -1px;
  top: -4px;
  width: 23px;
  height: 23px;
}
.loader div:nth-child(5) {
  border-width: 3px;
  left: -1px;
  top: 4px;
  width: 31px;
  height: 31px;
}
.loader div:nth-child(6) {
  border-width: 4px;
  left: 0px;
  top: -4px;
  width: 39px;
  height: 39px;
}
.loader div:nth-child(7) {
  border-width: 4px;
  left: 0px;
  top: 6px;
  width: 49px;
  height: 49px;
}

@keyframes rotateAnim {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
