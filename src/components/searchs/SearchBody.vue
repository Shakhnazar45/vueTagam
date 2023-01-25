<template>
    <div class="block-1">
        <div class="container-1">
            <div class="">
                <img src="../../assets/Search/breakfast.png" alt="">
                <p>Завтраки</p>
            </div>
            <div class="">
                <img src="../../assets/Search/maindish.png" alt="">
                <p>Основные блюда</p>
            </div>
        </div>
        <div class="container-1">
            <div class="">
                <img src="../../assets/Search/salad.png" alt="">
                <p>Салаты</p>
            </div>
            <div class="">
                <img src="../../assets/Search/soup.png" alt="">
                <p>Супы</p>
            </div>
        </div>
        <div class="container-1">
            <div class="">
                <img src="../../assets/Search/snacks.png" alt="">
                <p>Закуски</p>
            </div>
            <div class="">
                <img src="../../assets/Search/drinks.png" alt="">
                <p>Напитки</p>
            </div>
        </div>
        <div class="container-1_2">
            <div class="">
                <img src="../../assets/Search/bakery.png" alt="">
            </div>
            <div class="">
                <img src="../../assets/Search/desserts.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchBody',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/search.scss'
</style>