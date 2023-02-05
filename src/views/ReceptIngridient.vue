<template>
  <div class="ingredients">
    <div class="container-fluid top p-0">
        <div class="container p-0">
            <router-link to="/recept">
                <img class="img-1" src="../assets/CreateRecipe/shape.png" alt="">
            </router-link>
            <p class="top-text"></p>
            <img class="img-3" src="../assets/Recipe/Alarmclock.png" alt="">
        </div>
    </div>
    <div class="container-fluid main p-0">
        <div class="container p-0">
            <div class="step">
                <p class="step-text m-0">Ингредиенты:</p>
                <img class="img-2" src="../assets/Images/serdce.png" alt="">
            </div>
        </div>
    </div>
    <Ingridient/>
  </div>
</template>

<script>
import Ingridient from '@/components/Ingridients/Ingridient.vue'


export default {
  name: 'ReceptIngridient',
  components: {
    Ingridient,
  }
}
</script>

<style lang="scss" scoped>
 @import '../styles/ReceptIngridient.scss'
</style>