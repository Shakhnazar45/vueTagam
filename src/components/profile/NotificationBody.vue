<template>
    <div class="notification-body">
        <div class="container added-comment-1 p-0">
            <div class="container p-0">
                <p class="head">Новое</p>
                <div class="comment-1">
                    <img src="../../assets/Notifications/pic1.png" alt="">
                    <p class="user-name">Айгерим Жан
                        <span class="comment-head">Прокомментировал(-а):</span>
                        <span class="comment-text">Рыбный соус уже соленый так что осторожно с ним</span>
                    </p>
                    <img src="../../assets/Notifications/pic2.png" alt="">
                </div>
                <div class="comment-2">
                    <img src="../../assets/Notifications/pic3.png" alt="">
                    <p class="notification-text">Ваш рецепт понравился более 100 пользователям<span></span></p>
                </div>
            </div>
        </div>
        <div class="container added-comment-2 p-0">
            <div class="container p-0">
                <p class="head">Вчера</p>
                <div class="comment-1">
                    <img src="../../assets/Notifications/pic4.png" alt="">
                    <p class="user-name">Айгерим Жан
                        <span class="comment-head">Прокомментировал(-а):</span>
                        <span class="comment-text">Благодарю, прекрасный рецепт</span>
                    </p>
                    <img src="../../assets/Notifications/pic2.png" alt="">
                </div>
            </div>
        </div>
        <div class="container added-comment-3 p-0">
            <div class="container p-0">
                <p class="head">На этой неделе</p>
                <div class="comment-1">
                    <img src="../../assets/Notifications/pic4.png" alt="">
                    <p class="user-name">Айгерим Жан
                        <span class="comment-head">Прокомментировал(-а):</span>
                        <span class="comment-text">Класс!</span>
                    </p>
                    <img src="../../assets/Notifications/pic5.png" alt="">
                </div>
                <div class="comment-1">
                    <img src="../../assets/Notifications/pic6.png" alt="">
                    <p class="user-name">Айгерим Жан
                        <span class="comment-head">Прокомментировал(-а):</span>
                        <span class="comment-text">Рыбный соус уже соленый так что осторожно с ним</span>
                    </p>
                    <img src="../../assets/Notifications/pic3.png" alt="">
                </div>
                <div class="comment-1">
                    <img src="../../assets/Notifications/pic7.png" alt="">
                    <p class="user-name">Айгерим Жан
                        <span class="comment-head">Прокомментировал(-а):</span>
                        <span class="comment-text">Благодарю, прекрасный рецепт</span>
                    </p>
                    <img src="../../assets/Notifications/pic3.png" alt="">
                </div>
                <div class="comment-1">
                    <img src="../../assets/Notifications/pic8.png" alt="">
                    <p class="user-name">Айгерим Жан
                        <span class="comment-head">Прокомментировал(-а):</span>
                        <span class="comment-text">Супер</span>
                    </p>
                    <img src="../../assets/Notifications/pic2.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationBody',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/profile.scss'
</style>
