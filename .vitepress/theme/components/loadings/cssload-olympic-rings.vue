<template>
  <div class="cssload-loader-container cssload-abs-center absolute-center">
    <div class="cssload-olympicloader">
      <i class="cssload-loader-circle cssload-first"></i>
      <i class="cssload-loader-circle cssload-second"></i>
      <i class="cssload-loader-circle cssload-third"></i>
      <i class="cssload-loader-circle cssload-fourth"></i>
      <i class="cssload-loader-circle cssload-fifth"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cssload-loader-container {
  width: 90px;
  height: 37px;
}

.cssload-loader-container * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.cssload-olympicloader {
  position: relative;
}
.cssload-olympicloader .cssload-loader-circle {
  width: 27px;
  height: 27px;
  border: 3px solid rgb(204, 204, 204);
  border-radius: 50%;
  animation: spin 460ms infinite linear;
  float: left;
}
.cssload-olympicloader .cssload-loader-circle.cssload-first {
  position: absolute;
  top: 0;
  left: 0;
  border-top-color: rgb(0, 0, 0);
}
.cssload-olympicloader .cssload-loader-circle.cssload-second {
  position: absolute;
  top: 0;
  left: 31px;
  border-right-color: rgb(0, 0, 0);
}
.cssload-olympicloader .cssload-loader-circle.cssload-third {
  position: absolute;
  top: 0;
  left: 62px;
  border-bottom-color: rgb(0, 0, 0);
}
.cssload-olympicloader .cssload-loader-circle.cssload-fourth {
  position: absolute;
  top: 10px;
  left: 16px;
  border-left-color: rgb(0, 0, 0);
}
.cssload-olympicloader .cssload-loader-circle.cssload-fifth {
  position: absolute;
  top: 10px;
  left: 47px;
  border-right-color: rgb(0, 0, 0);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
