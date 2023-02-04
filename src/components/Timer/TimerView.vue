<template>
    <div class="container p-0">
            <div class="month">
                <p class="n1">Дек</p>
                <p> 
                    <svg widt
                    h="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 7L9 12L14 17" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Янв
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17L15 12L10 7" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </p>
                <p class="n1">Фев</p>
            </div>
            <div class="days" v-for="(timers, index) in timer" v-bind:key="timers" v-bind:index="index">
                <div class="day">
                    <span>День</span>
                    <p>{{timers.text}}</p>
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
</template>

<script>
export default {
  name: 'Mix',
  data() {
    return {
      title: 'Mix',
      index: 0,
      timer: [
        { text: '17'},
        { text: '19'},
        { text: '20'},
        { text: '23'},

      ]
    }
  }
}
</script>


<style scoped lang="scss">
    @import "../../scss/CalendarTimer.scss";
</style>