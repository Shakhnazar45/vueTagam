<template>
    <div class="profile-dr">
        <div class="main">
            <header class="header">
                <div class="main-con">
                    <div class="main-profile">
                        <div class="profile_name">
                            <img src="../assets/CreateRecipe/Rectangle 103.png" alt="">
                            <p class="name">Диана Лис</p>
                            <p class="email">@chtoto_tam</p>
                        </div>
                        <router-link to="/new-recipe">
                            <button class="btn rec_button">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66666 8.00002H13.3333M7.99999 2.66669V13.3334" stroke="#1A1A1A"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                добавить рецепт
                            </button>
                        </router-link>
                    </div>
                    <div class="main-menu">
                        <router-link to="/notifications">
                            <svg width="29" height="26" viewBox="0 0 29 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.33331 13C4.33331 8.21351 8.21351 4.33331 13 4.33331V4.33331C17.7864 4.33331 21.6666 8.21351 21.6666 13V18.5151C21.6666 19.5895 21.6666 20.1267 21.4656 20.5405C21.2697 20.9439 20.9439 21.2697 20.5405 21.4656C20.1267 21.6666 19.5895 21.6666 18.5151 21.6666H13C8.21351 21.6666 4.33331 17.7864 4.33331 13V13Z"
                                    stroke="#1A1A1A" stroke-width="1.3" />
                                <path d="M9.75 11.9167L16.25 11.9167" stroke="#1A1A1A" stroke-width="1.3"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13 16.25H16.25" stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <circle cx="23.5" cy="7.5" r="6.15" fill="#BF0D0D" stroke="#F1EACC"
                                    stroke-width="1.3" />
                            </svg>
                        </router-link>

                        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.83331 7.58331H22.1666" stroke="#1A1A1A" stroke-width="1.5"
                                stroke-linecap="round" />
                            <path d="M5.83331 13H22.1666" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M5.83331 18.4167H22.1666" stroke="#1A1A1A" stroke-width="1.5"
                                stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </header>
        </div>
        <MyRecipes msg="" />
    </div>
</template>

<script>

import MyRecipes from '@/components/profile/MyRecipes.vue'


export default {
    name: 'ProfileRecipes',
    components: {
        MyRecipes
    }
}

</script>


<style lang="scss">
@import '../styles/profile.scss';
</style>
