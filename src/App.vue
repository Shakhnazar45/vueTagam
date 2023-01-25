<template>
  <div id="app">
  <router-view/>
    <nav>
     <div class="tool-bar">
        <div class="tool-con">
          <ul>
            <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/25/main.png" alt=""></router-link></li>
            <li><router-link to="/main"><img src="https://ltdfoto.ru/images/2023/01/25/shapec95917b6f8d037b5.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/25/Book.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/25/calendar4c6a3fb9f7430374.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/25/profile6d922b5bb9e2e2af.png" alt=""></router-link></li>
          </ul>
        </div>
    </div> 
      
    </nav>
  </div>
</template>



<style lang="scss">
@import 'styles/search.scss';
#app {background: #F1EACC};
ul{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 0;
  list-style: none;
  li{
    width: 24px;
    height:24px;
    a{
      width: 24px;
      height:24px;
      img{
        width: 24px;
        height:24px;
      }
    }
  }
}
</style>
