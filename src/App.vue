<template>
  <div id="app">
    <nav>
      <div class="container">
        <router-link to="/about"><img
          src="https://ltdfoto.ru/images/2023/01/23/Logo.png"
          alt=""
          class="logo"
        /></router-link>
        <ul>
          <li><router-link to="/">Категории</router-link></li>
          <li><router-link to="/about">Советы</router-link></li>
          <li><router-link to="/about">Сообщество</router-link></li>
          <li><router-link to="/about">Идеи</router-link></li>
          <li><router-link to="/about">Кулинары</router-link></li>
          <li><router-link to="/about">Моя книга рецептов</router-link></li>
        </ul>
        <div class="menu-bar">
          <img src="https://ltdfoto.ru/images/2023/01/23/TagamProfile.png" alt="" class="profile" />
          <img src="https://ltdfoto.ru/images/2023/01/23/TagamMenu.png" alt="" class="menu"/>
        </div>
      </div>
      <!-- <div class="sign-in" id = "sign">

      </div> -->
    </nav>
    <router-view />
  </div>
</template>

<script>

</script>

<style lang="scss">
@import 'src/scss/app.scss'

</style>
