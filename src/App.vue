<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
@import './assets/styles/icon.css';
@import './assets/styles/reset.css';
@import './assets/styles/video-js.css';
html{
  font-size:258%; /* 10÷16=62.5% */
}
body{
  background-color: #ebebeb;
  height: 100%;
}
*{
  box-sizing: border-box;
}
img{
  width: 100%; 
  transition: opacity 1.2s ease; 
  opacity: 1;
}
</style>
