<template>
  <div class="recept">
    <div class="container-fluid top p-0">
        <div class="container p-0">
            <router-link to="mainView">
                <img class="img-1" src="../assets/CreateRecipe/shape.png" alt="">
            </router-link>
            <p class="top-text"></p>
            <img class="img-3" src="../assets/Recipe/Alarmclock.png" alt="">
        </div>
    </div>
    <div class="container-fluid main p-0">
        <div class="container p-0">
            <div class="step">
                <p class="step-text m-0">Суп “Том ям”</p>
                <img class="img-2" src="../assets/Images/serdce.png" alt="">
            </div>
        </div>
    </div>
    <div class="container-fluid properties p-0">
        <div class="container p-0">
            <div class="user">
                <img src="../assets/SteppingRecipe/User.png" alt="">
                <p>Povarotboga</p>
            </div>
            <div class="time">
                <img src="../assets/SteppingRecipe/Time.png" alt="">
                <p>30 мин</p>
            </div>
            <div class="star">
                <img src="../assets/SteppingRecipe/Star.png" alt="">
                <p>4,7</p>
            </div>
        </div>
    </div>
    <Recepts/>
  </div>
</template>

<script>
import Recepts from '@/components/ReceptsView/Recepts.vue'

export default {
  name: 'Recept',
  components: {
    Recepts
  }
}
</script>

<style scoped lang="scss">
    @import '../scss/Recept.scss';
</style>