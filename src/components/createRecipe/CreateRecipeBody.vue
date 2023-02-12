<template>
    <div class="main">
        <!-- <div class="hello">
            <picture-input ref="pictureInput" width="600" height="600" margin="16" accept="image/jpeg,image/png"
                size="10" button-class="btn" :custom-strings="{
                    upload: '<h1>Bummer!</h1>',
                    drag: 'Drag a  GIF or GTFO'
                }" @change="onChange">
            </picture-input>
        </div> -->
        <div class="container-fluid main-img p-0">
            <div class="container p-0">
                <div class="container main-pic p-0">
                    <label>
                        <img src="../../assets/CreateRecipe/Img_box_light.png" alt="image">
                        <!-- <input type="file" ref="fileInput" @change="uploadImage" /> -->
                    </label>
                </div>
            </div>
        </div>

        <div class="container-fluid rec-name p-0">
            <div class="container rn-con p-0">
                <p>Название</p>
                <textarea type="text" name="" id="" v-model="name"></textarea>
            </div>
        </div>

        <div class="container-fluid rec-name p-0">
            <div class="container rn-con p-0">
                <p>Описание</p>
                <textarea type="text" name="" id="" v-model="description"></textarea>
            </div>
        </div>

        <div class="container-fluid p-0 ingredients-1">
            <div class="container p-0 ing-name">
                <p>Категория</p>
            </div>
            <div class="container p-0 ing-1">
                <p>Вид блюда</p>
                <label class="select" for="slct">
                    <select id="slct" required="required" v-model="typeDishId">
                        <option value="" disabled="disabled" selected="selected">
                            Выберите
                        </option>
                        <option value="1">Завтраки</option>
                        <option value="2">Основное блюдо</option>
                        <option value="3">Салаты</option>
                        <option value="4">Супы</option>
                        <option value="5">Закуски</option>
                        <option value="6">Напитки</option>
                        <option value="7">Выпечки</option>
                        <option value="8">Десерты</option>
                    </select>
                    <svg>
                        <use xlink:href="#select-arrow-down"></use>
                    </svg>
                </label>
                <svg class="sprites">
                    <symbol id="select-arrow-down" viewbox="0 0 10 6">
                        <polyline points="1 1 5 5 9 1"></polyline>
                    </symbol>
                </svg>
                <p>Категория блюда</p>
                <div class="weight">
                    <label class="select" for="slct">
                        <select id="slct" required="required" v-model="categotyId">
                            <option value="" disabled="disabled" selected="selected">
                                Выберите
                            </option>
                            <option value="1">Блюда за 15 минут</option>
                            <option value="2">Блюда за 30 минут</option>
                            <option value="3">Блюда за час</option>
                            <option value="4">Блюда за 1,5 часа</option>
                            <option value="5">Блюда за 2 часа и более</option>
                            <option value="6">Национальное блюдо</option>
                            <option value="7">Вегетерианские рецепты</option>
                            <option value="8">ПП-рецепты</option>
                            <option value="9">Рецепт к празднику</option>
                        </select>
                        <svg>
                            <use xlink:href="#select-arrow-down"></use>
                        </svg>
                    </label>
                    <svg class="sprites">
                        <symbol id="select-arrow-down" viewbox="0 0 10 6">
                            <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                    </svg>
                </div>
                <p>Национальное блюдо</p>
                <div class="weight">
                    <label class="select" for="slct">
                        <select id="slct" required="required" v-model="typeKitchenId">
                            <option value="" disabled="disabled" selected="selected">
                                Выберите
                            </option>
                            <option value="1">Казахская</option>
                            <option value="2">Русская</option>
                            <option value="3">Корейская</option>
                            <option value="4">Франзузская</option>
                            <option value="5">Итальянская</option>
                            <option value="6">Японская</option>
                            <option value="7">Грузинская</option>
                            <option value="8">Другое</option>
                        </select>
                        <svg>
                            <use xlink:href="#select-arrow-down"></use>
                        </svg>
                    </label>
                    <svg class="sprites">
                        <symbol id="select-arrow-down" viewbox="0 0 10 6">
                            <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </div>
        <!-- <div class="container-fluid p-0 ingredients">
            <div class="container p-0 ing-name">
                <p>Ингредиенты</p>
            </div>
            <div class="container p-0 ing-1">
                <p>1 ингредиент</p>
                <input type="text" class="ing-input">
                <p>Вес или количество</p>
                <div class="weight">
                    <input type="text" class="weight-input">
                    <label class="select" for="slct">
                        <select id="slct" required="required">
                            <option value="" disabled="disabled" selected="selected">
                                Выберите
                            </option>
                            <option value="1">грамм</option>
                            <option value="2">миллилитр</option>
                            <option value="3">штук</option>
                            <option value="4">столовая ложка</option>
                            <option value="5">чайная ложка</option>
                            <option value="6">пучек</option>
                            <option value="7">по вкусу</option>
                        </select>
                        <svg>
                            <use xlink:href="#select-arrow-down"></use>
                        </svg>
                    </label>
                    <svg class="sprites">
                        <symbol id="select-arrow-down" viewbox="0 0 10 6">
                            <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0 ingredients">
            <div class="container p-0 ing-1">
                <p>2 ингредиент</p>
                <input type="text" class="ing-input">
                <p>Вес или количество</p>
                <div class="weight">
                    <input type="text" class="weight-input">
                    <label class="select" for="slct">
                        <select id="slct" required="required">
                            <option value="" disabled="disabled" selected="selected">
                                Выберите
                            </option>
                            <option value="1">грамм</option>
                            <option value="2">миллилитр</option>
                            <option value="3">штук</option>
                            <option value="4">столовая ложка</option>
                            <option value="5">чайная ложка</option>
                            <option value="6">пучек</option>
                            <option value="7">по вкусу</option>
                        </select>
                        <svg>
                            <use xlink:href="#select-arrow-down"></use>
                        </svg>
                    </label>
                    <svg class="sprites">
                        <symbol id="select-arrow-down" viewbox="0 0 10 6">
                            <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </div> -->

        <!-- <div class="container-fluid p-0 add-ing">
            <div class="container p-0">
                <button class="btn-add-ing">
                    <img src="../../assets/CreateRecipe/add.png" alt="">
                    Добавить
                </button>
            </div>
        </div> -->
        <div class="container-fluid action-block p-0">
            <div class="container p-0">
                <router-link to="/profile-draft"><button class="btn btn-draft">
                        в черновик
                    </button>
                </router-link>
                <!-- <router-link to="/stepping-recipe"> -->
                <button class="btn btn-next" @click="new_recipe">
                    далее
                </button>
                <!-- </router-link> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            description: '',
            clientId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            categotyId: '',
            typeDishId: ''
        }
    },
    methods: {
        new_recipe() {
            axios.post
                ('https://tagamwebapi.azurewebsites.net/api/Recipe/create', {
                    name: this.name,
                    description: this.description,
                    clientId: this.clientId,
                    categotyId: this.categotyId,
                    typeDishId: this.typeDishId,
                    typeKitchenId: this.typeKitchenId,
                })
                .then(function (response) {
                    console.log(response)
                    if (response.isSuccess == true) {

                    } else {

                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
        }
    }
}
// import PictureInput from 'vue-picture-input'

// export default {
//   name: 'app',
//   data () {
//     return {
//     }
//   },
//   components: {
//     PictureInput
//   },
//   methods: {
//     onChange (image) {
//       console.log('New picture selected!')
//       if (image) {
//         console.log('Picture loaded.')
//         this.image = image
//       } else {
//         console.log('FileReader API not supported: use the <form>, Luke!')
//       }
//     }
//   }
// }
</script>

<style scoped lang="scss">
@import '../../styles/recipe.scss';

body {
    background-color: #e2e2e2;
}

#app {
    padding: 20px;
}

#preview {
    display: flex;
    justify-content: center;
    align-items: center;
}

#preview img {
    max-width: 100%;
    max-height: 500px;
}
</style>
