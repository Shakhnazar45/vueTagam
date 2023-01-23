<template>
  <div id="app">
    <nav>
      <img src="https://ltdfoto.ru/images/2023/01/23/Logo.png" alt="" class="logo">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <div class="menu-bar">
        <img src="https://ltdfoto.ru/images/2023/01/23/TagamProfile.png" alt="" class="profile">
        <img src="https://ltdfoto.ru/images/2023/01/23/TagamMenu.png" alt="" class="menu">
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  background: #F1EACC;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  align-items: center;

}

nav {
  width: 1180px;
  height: 98px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    width: 104px;
    height: 46px;
  }
  .menu-bar{
    width: 90px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .profile{
      width: 25px;
      height: 25px;
    }
    .menu{
      width: 28px;
      height: 26px;
    }
  }
  ul{
    width: 697px;
    height: 20px;

    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    list-style: none;
  }

  a {
    height: 20px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
