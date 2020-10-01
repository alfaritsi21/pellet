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
        <b-form @submit.prevent="onSubmit('danger')">
          <div class="email">
            <img src="../../assets/image/mail.png" alt="" />
            <b-form-input
              id="input-2"
              type="email"
              required
              placeholder="Enter your email"
              v-model="form.user_email"
            ></b-form-input>
          </div>
          <br />
          <div class="password">
            <img src="../../assets/image/lock.png" alt="" />
            <b-form-input
              id="input-3"
              type="password"
              required
              placeholder="Enter your password"
              v-model="form.user_password"
            ></b-form-input
            ><img src="../../assets/image/eye-crossed.png" alt="" />
          </div>
          <div class="forgot">
            <router-link to="/forgot">Forgot password?</router-link>
          </div>
          <br />
          <b-button type="submit" variant="danger" class="mb-2">Login</b-button>
          <br />
          <div class="p4">
            <p>
              Don't have an account? Let's
              <router-link to="/register">Sign Up</router-link>
            </p>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {
    ...mapGetters([])
  },
  components: {},
  methods: {
    ...mapActions(['login']),
    onSubmit(variant = null) {
      this.login(this.form)
        .then(response => {
          this.$router.push('/')
          // this.$router.push({
          //   name: 'Home'
          // })
        })
        .catch(error => {
          this.$bvToast.toast(error.data.msg, {
            title: 'Warning',
            variant: variant,
            solid: true
          })
        })
    }
  }
}
</script>

<style src="../../assets/css/Auth/login.css"></style>
