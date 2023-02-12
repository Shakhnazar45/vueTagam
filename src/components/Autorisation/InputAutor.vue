<template>
  <div class="container-fluid p-0 input">
    <div class="contianer p-0 input-con">
      <p class="welcome">Добро пожаловать</p>
      <input type="text" placeholder="Email" v-model="Email">
      <input type="password" placeholder="Пароль" v-model="Password">
      <p class="password">Забыли пароль?</p>
      
    </div>
    <div class="btn-avto">
      <router-link to="profile-recipes">
        <button class="btn reg" @click="login">Вход</button>
      </router-link>
      <router-link to="registration">
        <button class="btn reg">Регистрация</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      Email: '',
      Password: ''
    }
  },
  methods: {
    login() {
      axios.post
        ('https://tagamwebapi.azurewebsites.net/api/Authentication/Login?email=' + this.Email + '&password=' + this.Password + '', {
          Email: this.Email,
          Password: this.Password
        })
        .then(function (response) {
          console.log(response)
          if (response.isSuccess == true) {

          } else {

          }
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/InputRegistr.scss";
</style>