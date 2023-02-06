<template>
  <div class="notifications">
    <div class="header">
      <router-link to="/mainView">
        <img src="../assets/CreateRecipe/shape.png" alt="">
      </router-link>
      <p>Уведомления</p>
    </div>
    <NotificationBody msg="" />
  </div>
</template>

<script>

import NotificationBody from '@/components/profile/NotificationBody.vue'


export default {
  name: 'Notifications',
  components: {
    NotificationBody
  }
}

</script>


<style lang="scss">
@import '../styles/profile.scss';
</style>
