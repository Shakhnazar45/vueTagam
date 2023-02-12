<template>
  <div class="container-fluid p-0 input">
    <div class="contianer p-0 input-con">
      <p class="welcome">Добро пожаловать</p>
      <input type="text" placeholder="Email" v-model="Email">
      <input type="password" placeholder="Пароль" v-model="Password">
      <input type="password" placeholder="Повторите пароль" v-model="PasswordConfirm">
      <input type="text" placeholder="Name" v-model="Name">
      <input type="text" placeholder="LastName" v-model="LastName">
      <p class="password">Забыли пароль?</p>
    </div>
    <div class="btn-avto-1">
      <router-link to="/autorisation">
        <button class="btn reg" @click="login">Регистрация</button>
      </router-link>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      Email: '',
      Password: '',
      PasswordConfirm: '',
      Name: '',
      LastName: '',

    }
  },
  methods: {
    login() {
      axios.post
        ('https://tagamwebapi.azurewebsites.net/api/Authentication/Register?email='+this.Email+'&password='+this.Password+'&passwordConfirm='+this.PasswordConfirm+'&name='+this.Name+'&lastname='+this.LastName+'', {
          Email: this.Email,
          Password: this.Password,
          PasswordConfirm: this.PasswordConfirm,
          Name: this.Name,
          LastName: this.LastName
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/InputRegistr.scss";
.btn-avto-1{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 94px;
        a {
            text-decoration: none;
            color: #000;
        }
        .reg{
            width: 302px;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
    
            background: #F8D776;
            border-radius: 19px;
    
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            /* identical to box height */
            
            text-align: center;
            
            color: #000000;
            
        }
    }
</style>
