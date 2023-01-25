<template>
  <div id="app">
  <router-view/>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/main">Search</router-link>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
/*import SearchDefault from './components/SearchDefault.vue'

export default {
  name: 'Search',
  components: {
    SearchDefault
  }
}*/
</script>

<style lang="scss">
@import 'styles/search.scss'
</style>
/*<div class="container-fluid p-0 tool-bar">
        <div class="container p-0 tool-con">
            <img src="../Search/main.png" alt="">
            <img class="line" src="../Search/search.png" alt="">
            <img src="../Search/Book.png" alt="">
            <img src="../Search/calendar.png" alt="">
            <img src="../Search/profile.png" alt="">

        </div>
</div>*/