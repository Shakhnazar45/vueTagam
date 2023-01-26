<template>
    <div class="container-fluid p-0">
        <div class="container p-0">
            <ul class="list">
              <li class="link">Любая категория <img src="https://ltdfoto.ru/images/2023/01/26/search-down.png" alt=""></li>
              <li class="link line">|</li>
              <li class="link">Любое меню <img src="https://ltdfoto.ru/images/2023/01/26/search-down.png" alt=""></li>
              <li class="link line">|</li>
              <li class="link">Любая кухня <img src="https://ltdfoto.ru/images/2023/01/26/search-down.png" alt=""></li>
              <li class="link line">|</li>
              <li class="link">Время приготовления <img src="https://ltdfoto.ru/images/2023/01/26/search-down.png" alt=""></li>
            </ul>
            <div class="search">
                <div class="input">
                    <input type="text" placeholder="Поиск по ингредиентам">
                    <img src="https://ltdfoto.ru/images/2023/01/26/search.png" alt="">
                </div>
                <button class="search-btn">Поиск по названию</button>
            </div>
            <div class="search-buttons">
                <button class="btn" v-for="(buttons, index) in button" v-bind:key="buttons" v-bind:index="index">{{buttons.text}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Mix',
  data() {
    return {
      title: 'Mix',
      index: 0,
      button: [
        { text: 'картошка'},
        { text: 'курица'},
        { text: 'морковь'},
        { text: 'макароны'},
        { text: 'помидоры'},
        { text: 'лапша'},
        { text: 'рыба'},
        { text: 'мясо'},
        { text: 'мука'},
        { text: 'огурцы'},
        { text: 'брокколи'},
        { text: 'авакадо'},
        { text: 'помидоры'},
        { text: 'лапша'},
        { text: 'молоко'},
        { text: 'творог'},
        { text: 'перец'},
        { text: 'лук'},
        // { text: 'Завтраки'},
        // { text: 'Салаты'},
        // { text: 'Основное блюдо'},
        // { text: 'Закуски'},
        // { text: 'К празднику'},
      ]
    }
  }
}
</script>


<style scoped lang="scss">
    @import "../../scss/HelloSearch.scss";
</style>