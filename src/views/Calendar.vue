<template>
  <div class="calendar">
    <div class="container p-0 main-con">
        <p class="n1">Янв</p>
        <p class="n2">30</p>
    </div>
    
    <CalendarView/>
    <PromtView/> 
   
    
  </div>
</template>

<script>
import CalendarView from '@/components/Calendar/CalendarView.vue'
import PromtView from '@/components/Calendar/PromtView.vue'


export default {
  name: 'Registration',
  components: {
    CalendarView,
    PromtView
  }
}
</script>


<style scoped lang="scss">
  @import '../scss/calendar.scss'
</style>