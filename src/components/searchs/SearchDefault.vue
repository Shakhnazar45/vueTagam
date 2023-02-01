<template>
    <div class="filters">
        <button class="btn-name">
            <router-link to="/search-main">по названию</router-link>
        </button>
        <button class="btn-ingredients">
            <router-link to="/search-ing">по ингредиентам</router-link>
        </button>
        <button class="btn-bytime">
            <router-link to="/search-time">по времени приготовления</router-link>
        </button>
        <button class="btn-vegan">
            <router-link to="/search-vegan">вегетарианские</router-link>
        </button>
        <button class="btn-popularity">
            <router-link to="/search-rating">по полярности</router-link>
        </button>
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
