<template>
  <b-container fluid class="conta">
    <b-row class="pin">
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
        <h4 v-if="isSuccess === false">
          Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
          You Created Yourself.
        </h4>
        <img
          class="imgSuccess"
          v-if="isSuccess === true"
          src="../../assets/image/success.png"
          alt=""
        />
        <h4 v-if="isSuccess === true">
          Your PIN Was Successfully Created
        </h4>
        <p v-if="isSuccess === false">
          Create 6 digits pin to secure all your money and your data in Zwallet
          app. Keep it secret and don’t tell anyone about your Zwallet account
          password and the PIN.
        </p>
        <p v-if="isSuccess === true">
          Your PIN was successfully created and you can now access all the
          features in Zwallet. Login to your new account and start exploring!
        </p>
        <b-form @submit.prevent="onSubmit">
          <div v-if="isSuccess === false" class="pinInput">
            <div class="rowPin3">
              <div class="sub-rowPin3">
                <input v-model="pin[0]" maxlength="1" type="text" />
              </div>
              <div class="sub-rowPin3">
                <input v-model="pin[1]" maxlength="1" type="text" />
              </div>
              <div class="sub-rowPin3">
                <input v-model="pin[2]" maxlength="1" type="text" />
              </div>
              <div class="sub-rowPin3">
                <input v-model="pin[3]" maxlength="1" type="text" />
              </div>
              <div class="sub-rowPin3">
                <input v-model="pin[4]" maxlength="1" type="text" />
              </div>
              <div class="sub-rowPin3">
                <input v-model="pin[5]" maxlength="1" type="text" />
              </div>
            </div>
          </div>
          <br />
          <b-button v-if="isSuccess === false" type="submit" variant="primary"
            >Confirm</b-button
          >
          <b-button
            @click="onLogin"
            v-if="isSuccess === true"
            type="button"
            variant="primary"
            >Got to home</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Forgot',
  data() {
    return {
      pin: [],
      isSuccess: false
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  components: {},
  methods: {
    ...mapActions(['newPin']),
    onSubmit() {
      const pin = this.pin.join('')
      this.newPin([pin, this.userData.user_id])
        .then(response => {
          this.$bvToast.toast(response, {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.isSuccess = true
        })
        .catch(error => {
          this.$bvToast.toast(error.data.msg, {
            title: 'Warning',
            variant: 'danger',
            solid: true
          })
        })
    },
    onLogin() {
      this.$router.push('/')
    }
  }
}
</script>

<style src="../../assets/css/Auth/pin.css"></style>
