<template>
  <div class="cssload-loader absolute-center"></div>
</template>

<style scoped lang="scss">
.cssload-loader {
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: rgb(0, 0, 0);
  transform-origin: 50% 50%;
  animation: cssload-loader 1.15s ease-in-out infinite;
  &:before {
    content: '';
    position: absolute;
    background-color: rgb(0, 0, 0);
    top: 0px;
    left: -24px;
    height: 12px;
    width: 12px;
    border-radius: 12px;
  }
  &:after {
    content: '';
    position: absolute;
    background-color: rgb(0, 0, 0);
    top: 0px;
    left: 24px;
    height: 12px;
    width: 12px;
    border-radius: 12px;
  }
}

@keyframes cssload-loader {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
