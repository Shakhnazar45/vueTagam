<template>
    <div class="main">
        <div class="container-fluid main-img p-0">
            <div class="container p-0">
                <div class="container main-pic p-0">
                    <img src="../../assets/CreateRecipe/Img_box_light.png" alt="">
                </div>
            </div>
        </div>
        <div class="container-fluid rec-name p-0">
            <div class="container rn-con p-0">
                <p>Название</p>
                <input type="text" name="" id="">
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
        <div class="container-fluid p-0 ingredients">
            <div class="container p-0 ing-1">
                <p>3 ингредиент</p>
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
                <router-link to="/profile-draft">
                    <button class="btn btn-draft">
                        в черновик
                    </button>
                </router-link>

                <router-link to="/stepping-recipe">
                    <button class="btn btn-next">
                        далее
                    </button>
                </router-link>
                <button class="btn btn-delete">
                    <img src="../../assets/CreateRecipe/trash-2.png" alt="">
                    Удалить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditDeleteRecipe',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/recipe.scss'
</style>
