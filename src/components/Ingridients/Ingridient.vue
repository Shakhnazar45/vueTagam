<template>
  <div class="ingridient">
    <div class="container-fluid ingredients p-0">
        <div class="container">
            <p v-for="(recepts, index) in recept" v-bind:key="recepts" v-bind:index="index">
                {{recepts.text}}
                <span>{{recepts.podtext}}</span> 
            </p>
        </div>
    </div>
    <div class="container-fluid action-block p-0">
        <div class="container p-0">
            <router-link to="/receptText">
                <button class="btn-draft">
                    текст
                 </button>
            </router-link>
            <router-link to="/steping">
                <button class="btn-next">
                    далее
                </button>
            </router-link>
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
      recept: [
        { text: 'Бульон куриный', podtext: '2 л'},
        { text: 'Креветки (Королевские)', podtext: '300 г'},
        { text: 'Грибы (Шампиньоны)', podtext: '200 г'},
        { text: 'Лайм', podtext: '1 шт'},
        { text: 'Паста ТОМ ЯМ', podtext: '2 ст. л.'},
        { text: 'Кокосовое молоко', podtext: '4 ст. л.'},
        { text: 'Галангал(можно заменить на имбирь)', podtext: '1 шт'},
        { text: 'Кинза', podtext: '1 пуч'},
        { text: 'Помидор', podtext: '1 шт'},
        { text: 'Перец чили', podtext: '1 шт'},
        { text: 'Соль', podtext: 'по вкусу'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '../../scss/ReceptIngridient.scss'
</style>