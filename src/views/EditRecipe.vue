<template>
  <div class="edit-recipe">
    <div class="header">
      <router-link to="/profile-recipes">
        <img src="../assets/CreateRecipe/shape.png" alt="">
      </router-link>
      <p>Редактировать</p>
    </div>
    <EditDeleteRecipe msg="" />
  </div>
</template>

<script>

import EditDeleteRecipe from '@/components/createRecipe/EditDeleteRecipe.vue'


export default {
  name: 'EditRecipe',
  components: {
    EditDeleteRecipe
  }
}

</script>


<style lang="scss">
@import '../styles/recipe.scss';
</style>
