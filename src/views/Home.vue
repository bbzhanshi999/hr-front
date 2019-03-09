<template>
  <div class="home">
    <transition appear
                appear-active-class="animated zoomInUp"
                name="custom-classes-transition" enter-active-class="animated zoomInUp"
                mode="out-in">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
