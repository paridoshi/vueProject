<template>
  <div id="app">
      <nav>
        <router-link to='/'></router-link>
        
        <router-link to='/AddNew'>  </router-link>

        <router-link to='/EditDetails'>  </router-link>
    </nav>
  
    <router-view />
    <br><br>
    <HelloWorld msg=""/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
