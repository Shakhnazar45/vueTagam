<template>
  <div class="stepping-recipe">
    <div class="header">
      <router-link to="/new-recipe">
        <img src="../assets/CreateRecipe/shape.png" alt="">
      </router-link>
      <p>Добавить рецепт</p>
    </div>
    <CreateSteppingRBody msg="" />
  </div>
</template>

<script>

import CreateSteppingRBody from '@/components/createRecipe/CreateSteppingRBody.vue'


export default {
  name: 'CreateSteppingRecipe',
  components: {
    CreateSteppingRBody
  }
}

</script>


<style lang="scss">
@import '../styles/recipe.scss';
</style>
