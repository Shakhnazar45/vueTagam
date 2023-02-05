<template>
  <div class="search-main">
    <div class="container">
      <img src="../assets/Search/shape.png" alt="">
      <input type="text" name="" id="" placeholder="Поиcк">
    </div>
    <SearchDefault msg="" />
    <SearchBody msg="" />
  </div>
</template>

<script>

import SearchDefault from '@/components/searchs/SearchDefault.vue'
import SearchBody from '@/components/searchs/SearchBody.vue'

export default {
  name: 'Search',
  components: {
    SearchDefault, SearchBody
  }
}

</script>
