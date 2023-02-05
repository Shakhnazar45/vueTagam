<template>
  <div class="search-time">
    <div class="container">
      <img src="../assets/Search/shape.png" alt="">
      <input type="text" name="" id="" placeholder="Поиcк">
    </div>
    <SearchDefault msg="" />
    <SearchTime msg="" />
  </div>
</template>

<script>

import SearchDefault from '@/components/searchs/SearchDefault.vue'
import SearchTime from '@/components/searchs/SearchTime.vue'


export default {
  name: 'SearchByTime',
  components: {
    SearchDefault, SearchTime
  }
}

</script>
