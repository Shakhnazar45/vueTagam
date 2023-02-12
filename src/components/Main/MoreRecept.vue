<template>
  <div class="more-recept">
    <div class="container-fluid p-0 crocodile">
      <div class="container p-0 croc-con">
        <div class="accordion" id="accordion">
          <div class="acc-head n-1">
            <div class="n-text">
              <div class="text">Блюдо за 15 минут</div>
              <p>59</p>
            </div>
          </div>
          <div class="acc-head n-2">
            <div class="n-text active">
              <div class="text">Национальная кухня</div>
              <p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20L12 4M12 20L6 14M12 20L18 14" stroke="#1A1A1A" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
            </div>
            <ul class="list">
              <li class="link">
                {{ info }}
              </li>
            </ul>
          </div>
          <div class="acc-head n-3">
            <div class="n-text">
              <div class="text">Вегетарианские
                рецепты</div>
              <p>72</p>
            </div>
          </div>
          <div class="acc-head n-4">
            <div class="n-text">
              <div class="text">ПП-рецепты</div>
              <p>55</p>
            </div>
          </div>
          <div class="acc-head n-5">
            <div class="n">
              <div class="n-text">
                <div class="text">Рецепты к празднику</div>
                <p>74</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0 recept rec-n-2">
      <div class="container recept-con p-0" v-for="(recepts, index) in recept" :key="recepts.id">
        <div class="block">
          <img src="../../assets/Recipe/Rectangle 37.png" alt="">
        </div>
        <p class="tom-yam">{{ recepts.text }}</p>
        <div class="ty">
          <p class="tom-yam2 m-0">{{ recepts.podText }}</p>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.45067 12.9082L10.4033 19.4395C10.6428 19.6644 10.7625 19.7769 10.9037 19.8046C10.9673 19.8171 11.0327 19.8171 11.0963 19.8046C11.2375 19.7769 11.3572 19.6644 11.5967 19.4395L18.5493 12.9082C20.5055 11.0706 20.743 8.0466 19.0978 5.92607L18.7885 5.52734C16.8203 2.99058 12.8696 3.41601 11.4867 6.31365C11.2913 6.72296 10.7087 6.72296 10.5133 6.31365C9.13037 3.41601 5.17972 2.99058 3.21154 5.52735L2.90219 5.92607C1.25695 8.0466 1.4945 11.0706 3.45067 12.9082Z"
              stroke="#1A1A1A" stroke-width="1.3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mix',
  data() {
    return {
      title: 'Mix',
      index: 0,
      recept: [
        { id: 1, text: 'Лепешки базлама', podText: 'Турецкие лепешки базлама - это самый вкусный и легкий хлеб.' },
        { id: 2, text: 'Красная рыба', podText: 'Сырный суп с фасолью и цветной капустой' },
      ]
    }
  }
}
// Crocodile скрипт вставить
</script>

<style scoped lang="scss">
@import '../../styles/MainView.scss';
</style>