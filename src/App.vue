<template>
  <div id="app">

    <Header></Header>
    <div style="display: flex">
<!--    <Aside></Aside>-->
      <router-view style="flex: 1"></router-view>
    </div>
<!--    <router-view/>-->

  </div>
</template>

<style>

</style>

<script>

import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default {
  name:"Layout",
  components:{
    Aside,
    Header,

  }
}
</script>


<!--<template>-->
<!--  <div>-->
<!--    <header />-->
<!--  </div>-->
<!--  <router-view/>-->
<!--</template>-->

<!--<style>-->

<!--</style>-->

<!--<script>-->
<!--//import Header from "@/components/header";-->
<!--import header from "@/components/header";-->

<!--export default {-->
<!--  name:"layout",-->
<!--  components:{-->
<!--    header-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<template>-->
<!--  <div id="app">-->
<!--    <nav>-->
<!--&lt;!&ndash;      <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--    </nav>-->
<!--    <router-view/>-->
<!--  </div>-->
<!--</template>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav {-->
<!--  padding: 30px;-->
<!--}-->

<!--nav a {-->
<!--  font-weight: bold;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav a.router-link-exact-active {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->