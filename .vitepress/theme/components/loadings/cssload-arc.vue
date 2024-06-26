<template>
  <div class="cssload-container absolute-center">
    <div class="cssload-arc">
      <div class="cssload-arc-cube"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cssload-container {
  width: 195px;
  height: 195px;
  perspective: 975px;
  overflow: hidden;
}

.cube {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 29px;
  height: 29px;
  margin-left: -15px;
  margin-top: 0;
}

.cssload-arc {
  position: absolute;
  bottom: 50%;
  left: 50%;
  margin-left: -68px;
  width: 136px;
  height: 68px;
  overflow: hidden;
}

.cssload-arc-cube {
  position: absolute;
  bottom: -68px;
  left: 50%;
  margin-left: -68px;
  width: 136px;
  height: 136px;
  border-style: solid;
  border-top-color: transparent;
  border-right-color: rgb(0, 0, 0);
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: cssload-arc 2.3s ease-in-out infinite;
  transform: rotate(-200deg);
}

@keyframes cssload-arc {
  0% {
    border-width: 29px;
  }
  25% {
    border-width: 15px;
  }
  50% {
    transform: rotate(27deg);
    border-width: 29px;
  }
  75% {
    border-width: 15px;
  }
  100% {
    border-width: 29px;
  }
}
</style>
