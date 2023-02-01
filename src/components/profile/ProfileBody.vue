<template>
  <div class="profile">
    <div class="buttons">
      <div class="but-con">
        <div class="button">
          <p class="chernovick">Профиль</p>
          <div class="line"></div>
        </div>
        <router-link to="/profile-recipes">
          <div class="button">
            <p>Мои рецепты</p>
          </div>
        </router-link>
        <router-link to="/profile-draft">
          <div class="button">
            <p>Черновики</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="personal-info">
      <div class="info">
        <div class="text-name">
          Имя
          <p class="m-0 name">Диана Лис</p>
        </div>
        <div class="text-name">
          Почта
          <p class="m-0 email">chtoto_tam@mail.ru</p>
        </div>
        <div class="text-name">
          Соц сети
        </div>
        <div class="society">
          <p class="m-0 text-soc">
            <img class="img-1" src="../../assets/Profile/inst.png" alt="">
            <span class="society-link">https://www.instagram.com/daniya_alt/</span>
          </p>
          <p class="m-0 text-soc">
            <img class="img-1" src="../../assets/Profile/telegram.png" alt="">
            <span class="society-link">https://www.instagram.com/daniya_alt/</span>
          </p>
          <p class="m-0 text-soc">
            <img class="img-1" src="../../assets/Profile/fb.png" alt="">
            <span class="society-link">https://www.instagram.com/daniya_alt/</span>
          </p>
          <p class="m-0 text-soc">
            <img class="img-1" src="../../assets/Profile/goggle.png" alt="">
            <span class="society-link">https://www.instagram.com/daniya_alt/</span>
          </p>
          <p class="m-0 text-soc">
            <img class="img-1" src="../../assets/Profile/vk.png" alt="">
            <span class="society-link">https://www.instagram.com/daniya_alt/</span>
          </p>
        </div>
      </div>
      <div class="options">
        <p>Выйти</p>
        <p>Удалить аккаунт</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBody',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/profile.scss'
</style>
