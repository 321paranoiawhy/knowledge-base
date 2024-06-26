<template>
  <div class="cssload-clock absolute-center"></div>
</template>

<style scoped lang="scss">
.cssload-clock {
  border-radius: 58px;
  border: 3px solid rgb(0, 0, 0);
  height: 78px;
  width: 78px;
  &:before {
    content: '';
    position: absolute;
    background-color: rgb(0, 0, 0);
    top: 6px;
    left: 48%;
    height: 34px;
    width: 4px;
    border-radius: 5px;
    transform-origin: 50% 94%;
    animation: ptAiguille 13.8s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    background-color: rgb(0, 0, 0);
    top: 2px;
    left: 48%;
    height: 37px;
    width: 4px;
    border-radius: 5px;
    transform-origin: 50% 97%;
    animation: grdAiguille 2.3s linear infinite;
  }
}

@keyframes grdAiguille {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes ptAiguille {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
