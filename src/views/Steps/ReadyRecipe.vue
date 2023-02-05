<template>
  <div class="ready">
    <div class="container-fluid main p-0">
        <div class="container p-0">
            <div class="step">
                <router-link to="/steping">
                  <img class="img-1" src="../../assets/CreateRecipe/shape.png" alt="">
                </router-link>
                <p class="step-text m-0">Готово!</p>
                <img class="img-2" src="../../assets/Images/serdce.png" alt="">
            </div>
        </div>
    </div>
     <div class="container-fluid properties p-0">
        <div class="container p-0">
            <div class="user">
                <img src="../../assets/SteppingRecipe/User.png" alt="">
                <p>Povarotboga</p>
            </div>
            <div class="time">
                <img src="../../assets/SteppingRecipe/Time.png" alt="">
                <p>30 мин</p>
            </div>
            <div class="star">
                <img src="../../assets/SteppingRecipe/Star.png" alt="">
                <p>4,7</p>
            </div>
        </div>
    </div>
    <Ready/>
    <Comment/>
  </div>
</template>

<script>
import Ready from '@/components/Steps/readyStep.vue'
import Comment from '@/components/Steps/StepComment.vue'

export default {
  name: 'ReadyRecipe',
  components: {
    Ready,
    Comment
  },
}
</script>

<style lang="scss" scoped>
 @import '../../scss/ReadyRecipe.scss'
</style>