<template>
  <div class="cssload-ball absolute-center"></div>
</template>

<style scoped lang="scss">
.cssload-ball {
  height: 78px;
  width: 78px;
  border-radius: 78px;
  border: 3px solid rgb(0, 0, 0);
  transform-origin: 50% 50%;
  animation: cssload-ball 3.45s linear infinite;
  &:after {
    content: '';
    position: absolute;
    top: -5px;
    left: 19px;
    width: 11px;
    height: 11px;
    border-radius: 10px;
    background-color: rgb(0, 0, 0);
  }
}

@keyframes cssload-ball {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
