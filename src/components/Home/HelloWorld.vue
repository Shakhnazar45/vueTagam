<template>
  <div class="container-fluid p-0 hello">
    <div class="container p-0">
      <p class="HelloText">
        Ваш лучший кулинарный помошник
        <span>
          Поделись со своим фирменны рецептом и сделай мир чуточку вкуснее
        </span>
      </p>
      <div class="buttons">
        <div class="f-line">
          <button class="btn" v-for="(buttons, index) in button" v-bind:key="buttons" v-bind:index="index">{{buttons.text}}</button>
        </div>
        <div class="s-line">
          <button class="btn" v-for="(buttones, index) in buttons" v-bind:key="buttones" v-bind:index="index">{{buttones.text}}</button>
        </div>
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
  @import "../../scss/style.scss";
  
</style>
