<template>
  <div class="timer">
    <router-link to="/calendar">
        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 13.125L18 24.7917L30 13.125" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </router-link>
    <TimerView/>
  </div>
</template>

<script>
import TimerView from '@/components/Timer/TimerView.vue'


export default {
  name: 'Timer',
  components: {
    TimerView
  }
}
</script>


<style scoped lang="scss">
  @import '../scss/CalendarTimer.scss'
</style>