<template>
  <div class="cssload-battery absolute-center">
    <div class="cssload-liquid"></div>
  </div>
</template>

<style scoped lang="scss">
.cssload-battery {
  width: 2.25rem;
  height: 4.5rem;
  box-shadow: 0 0 0 0.2rem rgb(66, 92, 119);
  border-radius: 0.09rem;
  background: white;
}
.cssload-battery:before {
  content: '';
  position: absolute;
  left: 0.5625rem;
  right: 0.5625rem;
  top: -0.3375rem;
  height: 0.3375rem;
  width: 1.125rem;
  background: rgb(66, 92, 119);
  border-radius: 0.18rem;
}
.cssload-battery:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-right: 2.25rem solid transparent;
  border-bottom: 4.05rem solid rgba(255, 255, 255, 0.32);
}

.cssload-liquid {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 2.25rem;
  background: rgb(113, 251, 133);
  animation: load 2.59s infinite;
}
.cssload-liquid:after,
.cssload-liquid:before {
  content: '';
  position: absolute;
  top: -0.5rem;
  height: 1.125rem;
  width: 1.4625rem;
  background: rgb(113, 251, 133);
  opacity: 0;
  border-radius: 50%;
}
.cssload-liquid:after {
  right: 0;
  animation: cssload-liquid-1 2.59s infinite;
}
.cssload-liquid:before {
  left: 0;
  animation: cssload-liquid-2 2.59s infinite;
}

@keyframes load {
  0% {
    top: 4.5rem;
  }
  70% {
    top: 1.125rem;
  }
  90% {
    top: 0;
  }
  95% {
    top: 0;
  }
  100% {
    top: 4.5rem;
  }
}

@keyframes cssload-liquid-1 {
  0% {
    height: 0;
    opacity: 0;
    top: -0.5rem;
  }
  22% {
    height: 0.28125rem;
    top: 0.375rem;
    opacity: 1;
  }
  25% {
    top: -0.25rem;
  }
  35% {
    height: 1.125rem;
    top: -0.5rem;
  }
  55% {
    height: 0.28125rem;
    top: -0.125rem;
  }
  60% {
    height: 0.61875rem;
    opacity: 1;
    top: -0.275rem;
  }
  96% {
    height: 0.84375rem;
    opacity: 0;
    top: 0.5rem;
  }
  100% {
    height: 0;
    opacity: 0;
  }
}

@keyframes cssload-liquid-2 {
  0% {
    height: 0;
    opacity: 0;
    top: -0.5rem;
  }
  17.5% {
    height: 0.28125rem;
    top: 0.2rem;
    opacity: 1;
  }
  20% {
    top: -0.25rem;
  }
  25% {
    height: 1.40625rem;
    top: -0.625rem;
  }
  45% {
    height: 0.28125rem;
    top: -0.125rem;
  }
  60% {
    height: 1.40625rem;
    opacity: 1;
    top: -0.5rem;
  }
  96% {
    height: 0.84375rem;
    opacity: 0;
    top: 0.5rem;
  }
  100% {
    height: 0;
    opacity: 0;
  }
}
</style>
