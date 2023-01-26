<template>
  <div class="home">
    
    <HelloWorld />
    <HelloSearch/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Home/HelloWorld.vue'
import HelloSearch from '@/components/Home/HelloSearch.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HelloSearch
  }
}

</script>
