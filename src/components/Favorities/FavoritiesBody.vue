<template>
    <div class="favo">
        <div class="container-fluid p-0 recept">
            <div class="container recept-con p-0">
                <div class="block">
                    <img src="../../assets/Favorites/img1.png" alt="">
                </div>
                <p class="tom-yam">Красная рыба</p>
                <div class="ty">
                    <p class="tom-yam2 m-0">
                        Сырный суп с фасолью и цветной капустой
                    </p>
                    <img src="../../assets/Favorites/trash.png" alt="">
                    <img src="../../assets/Favorites/Alarmclock.png" alt="">
                </div>
            </div>
        </div>
        <div class="container-fluid p-0 recept11">
            <div class="container recept-con11 p-0">
                <div class="block11">
                    <img src="../../assets/Favorites/img1.png" alt="">
                </div>
                <p class="tom-yam11">Цветная капуста</p>
                <div class="ty">
                    <p class="tom-yam211 m-0">
                        Сырный суп с фасолью и цветной капустой
                    </p>
                    <img src="../../assets/Favorites/trash.png" alt="">
                    <img src="../../assets/Favorites/Alarmclock.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FavoritiesBody',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/favorities.scss'
</style>
