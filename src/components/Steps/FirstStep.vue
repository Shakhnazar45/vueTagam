
<template>
    <div class="steping" >
        <div class="container-fluid properties p-0">
            <div class="container p-0">
                <div class="user">
                    <img src="../../assets/SteppingRecipe/User.png" alt="">
                    <p>Povarotboga</p>
                </div>
                <div class="time">
                    <img src="../../assets/SteppingRecipe/Time.png" alt="">
                    <p>30 мин</p>    
                </div>
                <div class="star">
                    <img src="../../assets/SteppingRecipe/Star.png" alt="">
                    <p>4,7</p>    
                </div>
            </div>
        </div>  
        <div class="container-fluid p-0 recept">
            <div class="container recept-con p-0" v-for="(image, index) in show" :key="image.id" v-bind:index="index" v-show="index ===   currentIndex">
                <div class="block">
                    <img :src="require(`../../assets/SteppingRecipe/${image.src}`)" class="all_foto"/>
                </div>
                <p class="description">
                    <span>Шаг {{image.id}} -</span> {{image.text}}
                </p>
            </div> 
        </div>
        <div class="contain er-fluid action-block p-0">
            <div class="container p-0">
                <button class="btn btn-draft" v-on:click="previous">
                    вернуться
                </button>
                <button class="btn btn-next" v-on:click="next">
                    далее
                </button>
                <router-link to="/ready">
                    <button class="btn btn-ready">
                        завершить
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "Show",
  data() {
    return {
      show: [
        // {id:1, src: Image},
        // {id:2, src:'http://localhost:8080/public/img/icons/favicon-32x32.png'},
        // {id:3, src:'http://localhost:8080/img/DSC_0016.19038039.jpg'},

        { id: 1, src: "step1.png", text: "Отвариваем куриный бульон, НЕ солим..."},
        { id: 2, src: "step2.png", text: "И так подготавливаем, пока наш бульон готовится: лемонграсс-режим на 3-4 части, галангал очистить и порезать на кружочки, листья лайма, перец Чили-обязательно очистить от зерен и будьте очень осторожны с ним, сразу помойте руки."},
        { id: 3, src: "step3.png", text: "а лучше работать в перчатках с ним... Разморозить креветки..."},
        { id: 4, src: "step4.png", text: "Креветки я взяла королевские, Но лучше всего и вообще нужно-тигровые... Очищаем часть креветок целиком, а часть только туловище, голову не отрываем-это очень эффектно см. в супе, а если это тигровая креветка-то вообще "},
        { id: 5, src: "step5.png", text: "ИХ КИДАТЬ В СУП САМЫМИ ПОСЛЕДНИМИ, КАК И ГРИБЫ И СОК ЛАЙМА И ПОМИДОР... просто все подготовить надо заранее. Грибы-нарезать на 4-части (если крупные, то на 6), помидор тоже на 4-6 долек..."},
        { id: 6, src: "step6.png", text: "Как только курица сварилась, вытаскиваем ее.. ВСЕ больше она нам не нужна (ну если совсем чуть чуть грудки на потом добавить в суп, хуже не будет)В кипящий бульон бросаем наш набор, это-лемонграсс, листья, галангал... "},
        { id: 7, src: "step7.png", text: "Потом кладем сразу:грибы, креветки, наливаем Рыбный соус (он уже соленый так что осторожно с ним), перемешиваем..."},
        { id: 8, src: "step8.png", text: "Выключаем огонь, бросаем помидоры в суп (можно их и в тарелку положить и потом уже залить супом). Накройте крышкой и дайте ему постоять 5-10 мин."},
      ],
      currentIndex: 0
    };
  },
  methods: {
    previous() {
      this.currentIndex = (this.currentIndex - 1 + this.show.length) % this.show.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.show.length;
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '../../styles/FirstStep.scss'
</style>