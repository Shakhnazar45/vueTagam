<template>
    <div class="container-fluid main p-0">
        <img src="../assets/Search/shape.png" alt="">
        <input type="text" name="" id="" placeholder="Поиcк">
        <SearchDefault msg=""/>
    </div>
</template>

<script>
// @ is an alias to /src
import SearchDefault from '@/components/SearchDefault.vue'

export default {
  name: 'Search',
  components: {
    SearchDefault
  }
}
</script>
