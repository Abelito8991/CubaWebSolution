<template>
  <Navbar/>
  <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.contact_button{
    background-color: #0ACC0A;
    border-style: none;
    color: white;
    border-radius: 5px;
    padding-left: 6px;
    padding-right: 6px;
    padding-bottom: 4px;
    font-size: 14px;
}

</style>
