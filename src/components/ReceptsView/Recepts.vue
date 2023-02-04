<template>
  <div class="recepts">
     <div class="container-fluid p-0 rec">
        <div class="container recept-con p-0">
            <div class="block">
                <img src="../../assets/Recipe/Rectangle.png" alt="">
            </div>
        </div>
    </div>  
    <div class="container-fluid p-0 buttons">
        <div class="container p-0 btn-con">
            <router-link to="/Ingridient">
                <button class="btn btn-1">ингредиенты</button>
            </router-link>
        </div>
    </div>
    <div class="container-fluid description p-0">
        <div class="container p-0">
            <p>Попробовав один раз этот суп, я просто была в 
                восторге от аромата и вкуса... И сразу задалась 
                себе вопросом, а смогу ли я в домаш. условиях 
                приготовить это чудо.
            </p>
        </div>
    </div>  
    <div class="container-fluid action-block p-0">
        <div class="container p-0">
            <router-link to="/receptText">
                <button class="btn-draft">
                    текст
                </button>
            </router-link>
            <router-link to="/Ingridient">
                <button class="btn-next">
                    пошагово
                </button>
            </router-link>
        </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
    @import '../../scss/Recept.scss';
</style>