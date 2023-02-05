<template>
  <div class="new-recipe">
    <div class="header">
      <router-link to="/profile-recipes">
        <img src="../assets/CreateRecipe/shape.png" alt="">
      </router-link>
      <p>Добавить рецепт</p>
    </div>
    <CreateRecipeBody msg="" />
  </div>
</template>

<script>

import CreateRecipeBody from '@/components/createRecipe/CreateRecipeBody.vue'


export default {
  name: 'CreateRecipe',
  components: {
    CreateRecipeBody
  }
}

</script>


<style lang="scss">
@import '../styles/recipe.scss';
</style>
