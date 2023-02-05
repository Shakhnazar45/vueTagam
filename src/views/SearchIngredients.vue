<template>
  <div class="search-ing">
    <div class="container">
      <img src="../assets/Search/shape.png" alt="">
      <input type="text" name="" id="" placeholder="Поиcк">
    </div>
    <SearchDefault msg="" />
    <SearchIng msg="" />
  </div>
</template>

<script>

import SearchDefault from '@/components/searchs/SearchDefault.vue'
import SearchIng from '@/components/searchs/SearchIng.vue'


export default {
  name: 'SearchIngredients',
  components: {
    SearchDefault, SearchIng
  }
}

</script>
