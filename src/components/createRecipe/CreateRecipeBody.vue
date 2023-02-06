<template>
    <div class="main">
        <div class="container-fluid main-img p-0">
            <div class="container p-0">
                <div class="container main-pic p-0">
                    <label>
                        <img src="../../assets/CreateRecipe/Img_box_light.png" alt="">
                        <input type="file" ref="fileInput" @change="uploadImage" />
                        <img v-if="imageUrl" :src="require(`../../assets/Favorites/img1.png`)" />
                    </label>
                </div>
            </div>
        </div>
        <!-- <div id="app">
            <input type="file" @change="onFileChange" />
            <div id="preview">
                <img v-if="url" :src="url" />
            </div>
        </div> -->
        <div class="container-fluid rec-name p-0">
            <div class="container rn-con p-0">
                <p>Название</p>
                <textarea type="text" name="" id=""></textarea>
            </div>
        </div>

        <div class="container-fluid rec-name p-0">
            <div class="container rn-con p-0">
                <p>Описание</p>
                <textarea type="text" name="" id=""></textarea>
            </div>
        </div>
        <div class="container-fluid p-0 ingredients-1">
            <div class="container p-0 ing-name">
                <p>Категория</p>
            </div>
            <div class="container p-0 ing-1">
                <p>Вид блюда</p>
                <label class="select" for="slct">
                    <select id="slct" required="required">
                        <option value="" disabled="disabled" selected="selected">
                            Выберите
                        </option>
                        <option value="#">Завтраки</option>
                        <option value="#">Основное блюдо</option>
                        <option value="#">Салаты</option>
                        <option value="#">Супы</option>
                        <option value="#">Закуски</option>
                        <option value="#">Напитки</option>
                        <option value="#">Выпечки</option>
                        <option value="#">Десерты</option>
                    </select>
                    <svg>
                        <use xlink:href="#select-arrow-down"></use>
                    </svg>
                </label>
                <!-- SVG Sprites-->
                <svg class="sprites">
                    <symbol id="select-arrow-down" viewbox="0 0 10 6">
                        <polyline points="1 1 5 5 9 1"></polyline>
                    </symbol>
                </svg>
                <p>Категория блюда</p>
                <div class="weight">
                    <label class="select" for="slct">
                        <select id="slct" required="required">
                            <option value="" disabled="disabled" selected="selected">
                                Выберите
                            </option>
                            <option value="#">Блюда за 15 минут</option>
                            <option value="#">Блюда за 30 минут</option>
                            <option value="#">Блюда за час</option>
                            <option value="#">Блюда за 1,5 часа</option>
                            <option value="#">Блюда за 2 часа и более</option>
                            <option value="#">Национальное блюдо</option>
                            <option value="#">Вегетерианские рецепты</option>
                            <option value="#">ПП-рецепты</option>
                            <option value="#">Рецепт к празднику</option>
                        </select>
                        <svg>
                            <use xlink:href="#select-arrow-down"></use>
                        </svg>
                    </label>
                    <!-- SVG Sprites-->
                    <svg class="sprites">
                        <symbol id="select-arrow-down" viewbox="0 0 10 6">
                            <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                    </svg>
                </div>
                <p>Национальное блюдо</p>
                <div class="weight">
                    <label class="select" for="slct">
                        <select id="slct" required="required">
                            <option value="" disabled="disabled" selected="selected">
                                Выберите
                            </option>
                            <option value="#">Казахская</option>
                            <option value="#">Русская</option>
                            <option value="#">Корейская</option>
                            <option value="#">Франзузская</option>
                            <option value="#">Итальянская</option>
                            <option value="#">Японская</option>
                            <option value="#">Грузинская</option>
                            <option value="#">Другое</option>
                        </select>
                        <svg>
                            <use xlink:href="#select-arrow-down"></use>
                        </svg>
                    </label>
                    <!-- SVG Sprites-->
                    <svg class="sprites">
                        <symbol id="select-arrow-down" viewbox="0 0 10 6">
                            <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0 ingredients">
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
                            <option value="#">грамм</option>
                            <option value="#">миллилитр</option>
                            <option value="#">штук</option>
                            <option value="#">столовая ложка</option>
                            <option value="#">чайная ложка</option>
                            <option value="#">пучек</option>
                            <option value="#">по вкусу</option>
                        </select>
                        <svg>
                            <use xlink:href="#select-arrow-down"></use>
                        </svg>
                    </label>
                    <!-- SVG Sprites-->
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
                            <option value="#">грамм</option>
                            <option value="#">миллилитр</option>
                            <option value="#">штук</option>
                            <option value="#">столовая ложка</option>
                            <option value="#">чайная ложка</option>
                            <option value="#">пучек</option>
                            <option value="#">по вкусу</option>
                        </select>
                        <svg>
                            <use xlink:href="#select-arrow-down"></use>
                        </svg>
                    </label>
                    <!-- SVG Sprites-->
                    <svg class="sprites">
                        <symbol id="select-arrow-down" viewbox="0 0 10 6">
                            <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </div>

        <div class="container-fluid p-0 add-ing">
            <div class="container p-0">
                <button class="btn-add-ing">
                    <img src="../../assets/CreateRecipe/add.png" alt="">
                    Добавить
                </button>
            </div>
        </div>
        <div class="container-fluid action-block p-0">
            <div class="container p-0">
                <router-link to="/profile-draft"><button class="btn btn-draft">
                        в черновик
                    </button>
                </router-link>
                <router-link to="/stepping-recipe">
                    <button class="btn btn-next">
                        далее
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>

<script>
import { axios } from 'axios';
// export default {
//     name: 'CreateRecipeBody',
//     props: {
//         msg: String
//     },
//     methods: {
//         uploadImage() {
//             this.image = this.$refs.fileInput.files[0];
//         },
//     submitImage() {
//         let formData = new FormData();
//         formData.append('image', this.image);

//         axios.post('https://localhost:7149/api/FileModule/Post-file', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//             .then(response => {
//                 this.imageUrl = response.data.files;
//             })
//             .catch(error => {
//                 console.error(error.message);
//             });
//     }
// }
// methods: {
//     submitCategory() {
//         axios({
//             method: 'post',
//             url: 'https://localhost:7149/api/Category/show?id=',
//         });
//     }
//     }

// }
export default {
    // name: 'listImage',
    // data() {
    //     return {
    //         selectedFile: null,
    //         images: [],
    //         image_fields: ['id', 'name'],
    //         total_images: 1
    //     }
    // },
    methods: {
        // fileSelected(evt) {
        //     evt.preventDefault()
        //     console.log(evt);
        //     this.selectedFile = evt.target.files[0]
        // },
        // uploadImage() {
        //     const vm = new Vue({
        //         el: '#app',
        //         data() {
        //             return {
        //                 url: null,
        //             }
        //         },
        //         methods: {
        //             onFileChange(e) {
        //                 const file = e.target.files[0];
        //                 this.url = URL.createObjectURL(file);
        //             }
        //         }
        //     })
        // }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
