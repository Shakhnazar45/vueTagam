<template>
  <div class="ReceptText">
    <div class="container-fluid top p-0">
        <div class="container p-0">
            <router-link to="/recept"><img class="img-1" src="../assets/CreateRecipe/shape.png" alt=""></router-link>
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
    <div class="container-fluid p-0 recept">
        <div class="container recept-con p-0">
            <div class="block">
                <img src="../assets/Recipe/Rectangle37.png" alt="">
            </div>
        </div>
    </div>  
    <div class="container-fluid p-0 buttons">
        <div class="container p-0 btn-con">
            <button class="btn btn-1">пошагово</button>
        </div>
    </div>
    <RecText>
    </RecText>
  </div>
</template>

<script>
import RecText from '@/components/ReceptText/RecText.vue'


export default {
  name: 'ReceptText',
  components: {
    RecText,
  }
}
</script>

<style lang="scss" scoped>
    @import '../scss/ReceptText.scss';
</style>