<template>
  <div class="search-vegan">
    <div class="container">
      <img src="../assets/Search/shape.png" alt="">
      <input type="text" name="" id="" placeholder="Поиcк">
    </div>
    <SearchDefault msg="" />
    <SearchVG msg="" />
  </div>
</template>

<script>

import SearchDefault from '@/components/searchs/SearchDefault.vue'
import SearchVG from '@/components/searchs/SearchVG.vue'


export default {
  name: 'SearchVegan',
  components: {
    SearchDefault, SearchVG
  }
}

</script>
