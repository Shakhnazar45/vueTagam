<template>
    <div class="crocodile">
        <div class="croc-con">
            <div class="accordion">
                <div class="acc-head n-1">
                    <div class="text">Блюдо за 15 минут</div>
                    <p>59</p>
                </div>
                <div class="acc-head n-2">
                    <div class="text">Блюдо за 30 минут</div>
                    <p>67</p>
                </div>
                <div class="acc-head n-3">
                    <div class="text">Блюдо за час</div>
                    <p>72</p>
                </div>
                <div class="acc-head n-4">
                    <div class="text">Блюдо за 1,5 часа</div>
                    <p>98</p>
                </div>
                <div class="acc-head n-5">
                    <div class="text">Блюдо за 2 часа и более</div>
                    <p>35</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchTime',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/search.scss'
</style>
