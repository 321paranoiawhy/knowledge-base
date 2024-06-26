<template>
  <div class="cssload-spinner absolute-center"></div>
</template>

<style scoped lang="scss">
.cssload-spinner {
  width: 33px;
  height: 33px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    border: 2px solid rgb(161, 161, 161);
    width: 31px;
    height: 31px;
  }
  &:before {
    width: 43px;
    height: 43px;
    margin-left: -6.5px;
    margin-top: -6.5px;
    animation: cssload-spinner2 2.88s linear infinite;
  }
  &:after {
    animation: cssload-spinner1 2.88s linear infinite;
  }
}

@keyframes cssload-spinner1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes cssload-spinner2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
