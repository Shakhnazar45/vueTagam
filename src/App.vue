<template>
  <div id="app">
    <router-view />
    <div class="container-2">
      <nav>
        <div class="tool-bar">
          <div class="tool-con">
            <ul class="p-0 m-0">
              <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/28/main.png" alt=""></router-link></li>
              <li><router-link to="/search-main"><img class="active" src="https://ltdfoto.ru/images/2023/01/28/shape.png" alt=""></router-link></li>
              <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/28/Book.png" alt=""></router-link></li>
              <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/28/calendar.png" alt=""></router-link></li>
              <li><router-link to="/profile-draft"><img src="https://ltdfoto.ru/images/2023/01/28/profile.png" alt=""></router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>



<style lang="scss">
@import 'styles/search.scss';

ul {
  width: 358px;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  list-style: none;

  li {
    width: 24px;
    height: 26px;
  }
}
</style>
