<template>
    <div class="filters">
        <button class="btn-name">
            по названию
        </button>
        <button class="btn-ingredients">
            по ингредиентам
        </button>
        <!--<button class="btn-bytime">
            по времени приготовления
        </button>-->
    </div>
</template>

<script>
export default {
  name: 'SearchDefault',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/search.scss'
</style>
