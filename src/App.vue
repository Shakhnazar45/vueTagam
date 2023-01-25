<template>
  <div id="app">
  <router-view/>
    <div class="container-2">
      <nav>
     <div class="tool-bar">
        <div class="tool-con">
          <ul class="p-0 m-0">
            <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/25/main.png" alt=""></router-link></li>
            <li><router-link to="/main"><img class="tool-con" src="https://ltdfoto.ru/images/2023/01/25/shape.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/25/Book.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/25/calendar4c6a3fb9f7430374.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="https://ltdfoto.ru/images/2023/01/25/profile6d922b5bb9e2e2af.png" alt=""></router-link></li>
          </ul>
        </div>
    </div> 
      
    </nav>
    </div>
  </div>
</template>



<style lang="scss">
@import 'styles/search.scss';
ul{
  width: 358px;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  list-style: none;
  li{
    width: 24px;
    height:24px;
  } 
}

</style>
