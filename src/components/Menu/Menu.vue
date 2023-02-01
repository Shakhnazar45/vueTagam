<template>
    <div class="menu" v-bind:class="{active: IsActive}" id="menu">
        <div class="header-1">
            <router-link to="/profile">
                <img src="../../assets/MenuImg/arrow.png" alt="">
            </router-link>
            <p class="kaz">ҚАЗ</p>
            <p class="rus">РУС</p>
        </div>
        <div class="container-1">
            <p><img src="../../assets/MenuImg/Bell_light.png" alt="">
            <span>Отключить звук уведомлений</span></p>
        </div>
        <div class="container-2">
            <p><img class="img-1" src="../../assets/MenuImg/share-1.png" alt="">
            <span>Поделиться приложением</span></p>
            <p><img class="img-2" src="../../assets/MenuImg/Star_light.png" alt="">
            <span>Оценить приложение</span></p>
            <p><img class="img-3" src="../../assets/MenuImg/socials.png" alt="">
            <span class="social">Мы в соц сетях</span></p>
            <p><img class="img-4" src="../../assets/MenuImg/Message_light.png" alt="">
            <span>Связаться с нами</span></p>
        </div>
        <div class="container-3">
            <p><img class="img-5" src="../../assets/MenuImg/Desk.png" alt="">
            <span>Политика конфиденциальности</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/menu.scss'
</style>
