<template>
  <div class="prof-user">
    <div class="personal-scores">
      <img src="../../assets/Profile/Star_light.png" alt="">
      <p>4,7</p>
      <img src="../../assets/Profile/Favorite_light.png" alt="">
      <p>152 к</p>
      <img src="../../assets/Profile/Chat_light.png" alt="">
      <p>2 к</p>
    </div>
    <div class="container-fluid p-0 recept">
      <div class="container p-0 recept-con">
        <div class="img"><img src="../../assets/Search/rating1.png" alt=""></div>
        <div class="text">
          <p class="rec-name">Гречка с баклажанами</p>
          <div class="sub-text">
            <p>Сырный суп с фасолью и цветной
              капустой</p>
            <div class="text-img">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.45067 12.9082L10.4033 19.4395C10.6428 19.6644 10.7625 19.7769 10.9037 19.8046C10.9673 19.8171 11.0327 19.8171 11.0963 19.8046C11.2375 19.7769 11.3572 19.6644 11.5967 19.4395L18.5493 12.9082C20.5055 11.0706 20.743 8.0466 19.0978 5.92607L18.7885 5.52734C16.8203 2.99058 12.8696 3.41601 11.4867 6.31365C11.2913 6.72296 10.7087 6.72296 10.5133 6.31365C9.13037 3.41601 5.17972 2.99058 3.21154 5.52735L2.90219 5.92607C1.25695 8.0466 1.4945 11.0706 3.45067 12.9082Z"
                  stroke="#1A1A1A" stroke-width="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0 recept">
      <div class="container p-0 recept-con">
        <div class="img"><img src="../../assets/Search/rating1.png" alt=""></div>
        <div class="text">
          <p class="rec-name">Гречка с баклажанами</p>
          <div class="sub-text">
            <p>Сырный суп с фасолью и цветной
              капустой</p>
            <div class="text-img">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.45067 12.9082L10.4033 19.4395C10.6428 19.6644 10.7625 19.7769 10.9037 19.8046C10.9673 19.8171 11.0327 19.8171 11.0963 19.8046C11.2375 19.7769 11.3572 19.6644 11.5967 19.4395L18.5493 12.9082C20.5055 11.0706 20.743 8.0466 19.0978 5.92607L18.7885 5.52734C16.8203 2.99058 12.8696 3.41601 11.4867 6.31365C11.2913 6.72296 10.7087 6.72296 10.5133 6.31365C9.13037 3.41601 5.17972 2.99058 3.21154 5.52735L2.90219 5.92607C1.25695 8.0466 1.4945 11.0706 3.45067 12.9082Z"
                  stroke="#1A1A1A" stroke-width="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileUserBody',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/profile.scss'
</style>
