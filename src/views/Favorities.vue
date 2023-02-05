<template>
    <div class="favorities">
        <!-- <div class="header">
      <router-link to="/profile-recipes">
        <img src="../assets/CreateRecipe/shape.png" alt="">
      </router-link>
      <p>Добавить рецепт</p>
    </div> -->
        <div class="container-fluid main p-0">
            <div class="container p-0">
                <p class="fav">Избранные</p>
                <img src="../assets/Search/shape.png" alt="">
            </div>
        </div>
        <FavoritiesBody msg="" />
    </div>
</template>

<script>

import FavoritiesBody from '@/components/Favorities/FavoritiesBody.vue'


export default {
    name: 'Favorities',
    components: {
        FavoritiesBody
    }
}

</script>


<style lang="scss">
@import '../styles/favorities.scss';
</style>
