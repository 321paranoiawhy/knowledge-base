<template>
  <div class="cssload-loader absolute-center">
    <div class="cssload-inner cssload-one"></div>
    <div class="cssload-inner cssload-two"></div>
    <div class="cssload-inner cssload-three"></div>
  </div>
</template>

<style scoped lang="scss">
.cssload-loader {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  perspective: 780px;
}

.cssload-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
}

.cssload-inner.cssload-one {
  left: 0%;
  top: 0%;
  animation: cssload-rotate-one 1.15s linear infinite;
  border-bottom: 3px solid rgb(0, 0, 0);
}

.cssload-inner.cssload-two {
  right: 0%;
  top: 0%;
  animation: cssload-rotate-two 1.15s linear infinite;
  border-right: 3px solid rgb(0, 0, 0);
}

.cssload-inner.cssload-three {
  right: 0%;
  bottom: 0%;
  animation: cssload-rotate-three 1.15s linear infinite;
  border-top: 3px solid rgb(0, 0, 0);
}

@keyframes cssload-rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes cssload-rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes cssload-rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
