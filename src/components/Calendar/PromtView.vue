<template>
    <div class="PromtView">
        <div class="container p-0">
            <div class="month">
                <p class="n1">Дек</p>
                <p> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 7L9 12L14 17" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Янв
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17L15 12L10 7" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </p>
                <p class="n1">Фев</p>
            </div>
            <router-link to="/timer">
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 13.125L18 24.7917L30 13.125" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <div class="days">
                <div class="day">
                    <span>День</span>
                    <p>17</p>
                </div>
                <div class="time">
                    <span>Время</span>
                    <div class="rec-time">
                        <div class="times">11:00 - 13:00</div>
                        <button class="btn">рецепт</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
  @import '../../scss/calendar.scss'
</style>