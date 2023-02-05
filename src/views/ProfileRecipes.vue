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

                        <Slide right width="290">
                            <a id="home" href="#">
                                <div class="container-1">
                                    <p><img src="../assets/MenuImg/Bell_light.png" alt="">
                                        <span>Отключить звук уведомлений</span>
                                    </p>
                                </div>
                            </a>
                            <a id="home" href="#">
                                <div class="container-2">
                                    <p><img class="im1" src="../assets/MenuImg/share-1.png" alt="">
                                        <span>Поделиться приложением</span>
                                    </p>
                                    <p><img class="im2" src="../assets/MenuImg/Star_light.png" alt="">
                                        <span>Оценить приложение</span>
                                    </p>
                                    <p><img class="im3" src="../assets/MenuImg/socials.png" alt="">
                                        <span class="social">Мы в соц сетях</span>
                                    </p>
                                    <p><img class="im4" src="../assets/MenuImg/Message_light.png" alt="">
                                        <span>Связаться с нами</span>
                                    </p>
                                </div>
                            </a>
                            <a id="home" href="#">
                                <div class="container-3">
                                    <p><img class="im5" src="../assets/MenuImg/Desk.png" alt="">
                                        <span>Политика конфиденциальности</span>
                                    </p>
                                </div>
                            </a>
                        </Slide>
                    </div>
                </div>
            </header>
        </div>
        <MyRecipes msg="" />
    </div>
</template>

<script>

import MyRecipes from '@/components/profile/MyRecipes.vue'
import { Slide } from 'vue-burger-menu'



export default {
    name: 'ProfileRecipes',
    components: {
        MyRecipes, Slide
    }
}

</script>


<style lang="scss">
@import '../styles/profile.scss';



.bm-burger-button {
    //   position: fixed;
    width: 19px;
    height: 17px;
    left: 36px;
    top: 27px;
    cursor: pointer;
}

.bm-burger-bars {
    background-color: #85786A;
}

.line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
}

.cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
}

.bm-cross {
    background: #85786A;
}

.bm-cross-button {
    height: 24px;
    width: 24px;
}

.bm-menu {
    height: 100%;
    /* 100% Full-height */
    width: 0;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    z-index: 1000;
    /* Stay on top */
    top: 0;
    left: 0;
    background-color: #F1EACC;
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 60px;
    /* Place content 60px from the top */
    transition: 0.5s;
    /*0.5 second transition effect to slide in the sidenav*/
    border-left: 1px solid #85786A;

}

.bm-overlay {
    background: rgba(0, 0, 0, 0.3);
}

.bm-item-list {
    color: #b8b7ad;
    margin-left: -5%;
    font-size: 20px;
    a{
        padding: 14px 0 14px 14px;
    }

    .container-1 {
        width: 290px;
        height: 46px;
        border-bottom: 1px solid #85786A;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 22px;
            height: 22px;
        }

        p {
            width: 255px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;

            color: #000;
            margin: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }
    }

    .container-2 {
        width: 290px;
        height: 236px;
        border-bottom: 1px solid #85786A;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        padding: 0px 0 0 0;

        .im1 {
            width: 20px;
            height: 20px;
        }

        .im2 {
            width: 22px;
            height: 22px;
        }

        .im3 {
            width: 32px;
            height: 32px;
            margin: 0 0 0 -5px;
        }

        .im4 {
            width: 22px;
            height: 22px;

        }

        p {
            width: 255px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;

            color: #000;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            margin: 0;
            padding: 0;

            span {
                margin: 0 0 0 17px;
            }

            .social {
                margin: 0 0 0 10px;
            }
        }

    }

    .container-3 {
        width: 290px;
        height: 60px;

        padding: 0px 0 0 18px;

        .im5 {
            width: 22px;
            height: 22px;
        }

        p {
            width: 195px;
            height: 34px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;

            color: #000;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            span {
                width: 163px;
                height: 34px;
            }
        }

    }
}



.bm-item-list>* {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
}

.bm-item-list>*>span {
    margin-left: 10px;
    color: #000;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
}
</style>
