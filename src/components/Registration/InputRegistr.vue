<template>
  <div class="container-fluid p-0 input">
    <div class="contianer p-0 input-con">
        <p class="welcome">Добро пожаловать</p>
        <input type="text" placeholder="Логин">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Пароль">
        <p class="password">Забыли пароль?</p>
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
        { text: 'Блюдо за 15 минут'},
        { text: 'Национальная кухня'},
        { text: 'Вегетарианские рецепты'},
        { text: 'ПП-рецепты'},
        { text: 'Рецепты к празднику'},
        // { text: 'Завтраки'},
        // { text: 'Салаты'},
        // { text: 'Основное блюдо'},
        // { text: 'Закуски'},
        // { text: 'К празднику'},
      ],
      buttons:[
        { text: 'Завтраки'},
        { text: 'Салаты'},
        { text: 'Основное блюдо'},
        { text: 'Закуски'},
        { text: 'К празднику'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../scss/InputRegistr.scss";
  
</style>
