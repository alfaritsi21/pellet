<template>
  <b-container fluid class="conta">
    <b-row class="login">
      <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="cover">
        <h1>Pellete</h1>
        <img src="../../assets/image/Group57.png" alt="" />
        <h5>App that Covering Banking Needs.</h5>
        <p>
          Pellete is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in Zwallet everyday with worldwide users
          coverage.
        </p>
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="form">
        <h4>
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h4>
        <p>
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <b-form @submit.prevent="onSubmit">
          <div class="username">
            <img src="../../assets/image/person.png" alt="" />
            <b-form-input
              id="input-1"
              required
              placeholder="Enter your username"
              v-model="user_name"
            ></b-form-input>
          </div>
          <br />
          <div class="email">
            <img src="../../assets/image/mail.png" alt="" />
            <b-form-input
              id="input-2"
              type="email"
              required
              placeholder="Enter your e-mail"
              v-model="user_email"
            ></b-form-input>
          </div>
          <br />
          <div class="password">
            <img src="../../assets/image/lock.png" alt="" />
            <b-form-input
              id="input-3"
              type="password"
              required
              placeholder="Create your password"
              v-model="user_password"
            ></b-form-input
            ><img src="../../assets/image/eye-crossed.png" alt="" />
          </div>
          <br />
          <b-button type="submit" variant="primary">Login</b-button>
          <br />
          <div class="p4">
            <p>
              Already have an account? Let's
              <router-link to="/login">Login</router-link>
            </p>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Register',
  components: {}
}
</script>

<style src="../../assets/css/Auth/register.css"></style>
