<template>
  <Navbar/>
  <router-view v-slot="{ Component}">
    <!-- <transition name="fade" mode="out-in"> -->
    <component :is="Component" />
    <!-- </transition> -->
  </router-view>
  <Footer/>
</template>


<script>
import { defineAsyncComponent } from '@vue/runtime-core'


export default {
    components: {
      Navbar: defineAsyncComponent(() => import('./components/Navbar.vue')),
      Footer: defineAsyncComponent(()=>import('./components/Footer.vue')),
    } 
}
</script>



<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.03s ease;
  }


  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

.contact_button{
    background-color: #0ACC0A;
    border-style: none;
    color: white;
    border-radius: 5px;
    padding-left: 6px;
    padding-right: 6px;
    padding-bottom: 4px;
    font-size: 14px;
    
    &:hover{
      background-color: #179417;
    }
}

</style>
