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

<style lang="scss">
@import 'styles/style.scss'
</style>
