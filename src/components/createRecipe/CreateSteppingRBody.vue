<template>
    <div class="main2">
        <div class="container-fluid p-0 blocks">
            <div class="container p-0 block-con">
                <div class="block">
                    <div class="img"><img src="../../assets/CreateRecipe/Img_box_light.png" alt=""></div>
                    <div class="text">
                        <p>1 шаг</p>
                        <textarea name="" id="" cols="30" rows="10" class="input"
                            placeholder="Добавить подпись"></textarea>
                    </div>
                </div>
                <div class="block">
                    <div class="img"><img src="../../assets/CreateRecipe/Img_box_light.png" alt=""></div>
                    <div class="text">
                        <p>2 шаг</p>
                        <textarea name="" id="" cols="30" rows="10" class="input"
                            placeholder="Добавить подпись"></textarea>
                    </div>
                </div>
                <div class="block">
                    <div class="img"><img src="../../assets/CreateRecipe/Img_box_light.png" alt=""></div>
                    <div class="text">
                        <p>3 шаг</p>
                        <textarea name="" id="" cols="30" rows="10" class="input"
                            placeholder="Добавить подпись"></textarea>
                    </div>
                </div>
                <div class="enter">
                    <img src="../../assets/CreateRecipe/add.png" alt="">
                    <p>Добавить</p>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0 buttons">
            <div class="container p-0 btn-con">
                <router-link to="/profile-draft"><button class="btn btn-1">опубликовать</button></router-link>
                <router-link to="/profile-draft"><button class="btn btn-2">в черновики</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateSteppingRBody',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/recipe.scss'
</style>
