<template>
  <div class="search-rating">
    <div class="container">
      <img src="../assets/Search/shape.png" alt="">
      <input type="text" name="" id="" placeholder="Поиcк">
    </div>
    <SearchDefault msg="" />
    <SearchRating msg="" />
  </div>
</template>

<script>

import SearchDefault from '@/components/searchs/SearchDefault.vue'
import SearchRating from '@/components/searchs/SearchRating.vue'


export default {
  name: 'SearchByRating',
  components: {
    SearchDefault, SearchRating
  }
}

</script>
