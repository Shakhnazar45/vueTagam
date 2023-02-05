<template>
  <div class="block-1">
    <div class="container-1 p-0">
      <button class="btn" v-for="(buttons, index) in button" v-bind:key="buttons"
        v-bind:index="index">{{ buttons.text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      button: [
        { text: 'картошка' },
        { text: 'курица' },
        { text: 'морковь' },
        { text: 'макароны' },
        { text: 'помидоры' },
        { text: 'лапша' },
        { text: 'рыба' },
        { text: 'мясо' },
        { text: 'мука' },
        { text: 'огурцы' },
        { text: 'брокколи' },
        { text: 'авакадо' },
        { text: 'помидоры' },
        { text: 'лапша' },
        { text: 'молоко' },
        { text: 'творог' },
        { text: 'перец' },
        { text: 'лук' },
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/search.scss'
</style>
