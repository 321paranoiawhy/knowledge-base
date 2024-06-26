<template>
  <div id="floatingBarsG" class="absolute-center">
    <div class="blockG" id="rotateG_01"></div>
    <div class="blockG" id="rotateG_02"></div>
    <div class="blockG" id="rotateG_03"></div>
    <div class="blockG" id="rotateG_04"></div>
    <div class="blockG" id="rotateG_05"></div>
    <div class="blockG" id="rotateG_06"></div>
    <div class="blockG" id="rotateG_07"></div>
    <div class="blockG" id="rotateG_08"></div>
  </div>
</template>

<style scoped lang="scss">
#floatingBarsG {
  width: 60px;
  height: 75px;
}

.blockG {
  position: absolute;
  background-color: rgb(255, 255, 255);
  width: 10px;
  height: 23px;
  border-radius: 8px 8px 0 0;
  transform: scale(0.4);
  animation-name: fadeG;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
}

#rotateG_01 {
  left: 0;
  top: 27px;
  animation-delay: 0.45s;
  transform: rotate(-90deg);
}

#rotateG_02 {
  left: 8px;
  top: 10px;
  animation-delay: 0.6s;
  transform: rotate(-45deg);
}

#rotateG_03 {
  left: 25px;
  top: 3px;
  animation-delay: 0.75s;
  transform: rotate(0deg);
}

#rotateG_04 {
  right: 8px;
  top: 10px;
  animation-delay: 0.9s;
  transform: rotate(45deg);
}

#rotateG_05 {
  right: 0;
  top: 27px;
  animation-delay: 1.05s;
  transform: rotate(90deg);
}

#rotateG_06 {
  right: 8px;
  bottom: 7px;
  animation-delay: 1.2s;
  transform: rotate(135deg);
}

#rotateG_07 {
  bottom: 0;
  left: 25px;
  animation-delay: 1.35s;
  transform: rotate(180deg);
}

#rotateG_08 {
  left: 8px;
  bottom: 7px;
  animation-delay: 1.5s;
  transform: rotate(-135deg);
}

@keyframes fadeG {
  0% {
    background-color: rgb(0, 0, 0);
  }

  100% {
    background-color: rgb(255, 255, 255);
  }
}
</style>
