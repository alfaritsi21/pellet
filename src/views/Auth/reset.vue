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
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </h4>
        <p>
          Now you can create a new password for your Zwallet account. Type your
          password twice so we can confirm your new passsword.
        </p>
        <b-form @submit.prevent="onSubmit('danger')">
          <div class="password">
            <img src="../../assets/image/lock.png" alt="" />
            <b-form-input
              id="input-3"
              type="password"
              required
              placeholder="Create new password"
              v-model="form.user_password"
            ></b-form-input
            ><img src="../../assets/image/eye-crossed.png" alt="" />
          </div>
          <div class="re_password">
            <img src="../../assets/image/lock.png" alt="" />
            <b-form-input
              id="input-3"
              type="password"
              required
              placeholder="Repeate new password"
              v-model="form.confirm_password"
            ></b-form-input
            ><img src="../../assets/image/eye-crossed.png" alt="" />
          </div>
          <br />
          <b-button type="submit" variant="primary">Confirm</b-button>
          <br />
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Reset',
  data() {
    return {
      form: {
        user_email: '',
        confirm_password: ''
      }
    }
  },
  computed: {
    ...mapGetters([])
  },
  components: {},
  methods: {
    ...mapActions(['createNewPassword']),
    onSubmit(variant = null) {
      this.createNewPassword(this.form)
        .then(response => {
          this.$bvToast.toast(response, {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          alert('New Password has been created')
          this.$router.push('/login')
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

<style src="../../assets/css/Auth/reset.css"></style>
