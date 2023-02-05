<template>
    <div class="container-fluid main p-0">
          <div class="container p-0">
              <div class="step">
                  <router-link to="/Ingridient">
                      <img class="img-1" src="../../assets/CreateRecipe/shape.png" alt="">
                  </router-link>
                  <p class="step-text m-0">Пошагово</p>
                  <img class="img-2" src="../../assets/Images/serdce.png" alt="">
              </div>
          </div>
          <Step/>
      </div>
  </template>
  
  <script>
  import Step from '@/components/Steps/FirstStep.vue'
  
  export default {
    name: 'StepingRecipe',
    components: {
      Step
    },
  }
  </script>
  
  <style lang="scss" scoped>
   @import '../../styles/FirstStep.scss'
  </style>