<template>
  <nav id="toolbar">
    <h1>
      <a @click="showNav">
        <div class="toolbar-title-icon">
          <i class="icon" :class="icon"></i>
        </div>
      </a>
      <router-link to="/">
        <div class="toolbar-title">
          {{title}}
        </div>
      </router-link>
    </h1>
    <div id="nav-right"></div>
  </nav>
</template>
<script>
import Bus from './common/bus.js';
export default{
  data() {
      return {
        icon:'icon-three-bars',
        title: '斗鱼TV'
      }
  },
  methods:{
    goBack() {
      window.history.back()
    },
    showNav(event){
      Bus.$emit('Target', event.target);
    }
  }
}
</script>