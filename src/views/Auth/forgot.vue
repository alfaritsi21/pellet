<template>
  <b-container fluid class="conta">
    <b-row class="login">
      <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="cover">
        <h1>Pellet</h1>
        <img src="../../assets/image/Group57.png" alt="" />
        <h5>App that Covering Banking Needs.</h5>
        <p>
          Pellet is an application that focussing in banking needs for all users
          in the world. Always updated and always following world trends. 5000+
          users registered in Zwallet everyday with worldwide users coverage.
        </p>
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="form">
        <h4>
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </h4>
        <p>
          To reset your password, you must type your e-mail and we will send a
          link to your email and you will be directed to the reset password
          screens.
        </p>
        <b-form @submit.prevent="onSubmit('danger')">
          <div class="email">
            <img src="../../assets/image/mail.png" alt="" />
            <b-form-input
              id="input-2"
              type="email"
              required
              placeholder="Enter your e-mail"
              v-model="form.user_email"
            ></b-form-input>
          </div>
          <br />
          <b-button type="submit" variant="primary">Confirm</b-button>
          <br />
          <div class="p4">
            <p>
              Nevermind,
              <router-link to="/Login">Back !</router-link>
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
  name: 'Forgot',
  data() {
    return {
      form: {
        user_email: ''
      }
    }
  },
  computed: {
    ...mapGetters([])
  },
  components: {},
  methods: {
    ...mapActions(['cekEmailForgot']),
    onSubmit(variant = null) {
      this.cekEmailForgot(this.form)
        .then(response => {
          this.$bvToast.toast(response, {
            title: 'Success',
            variant: 'success',
            solid: true
          })
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

<style src="../../assets/css/Auth/forgot.css"></style>
