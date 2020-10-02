<template>
  <b-container fluid class="conta">
    <b-row class="pin">
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
            <div class="satu">
              <input type="number" />
            </div>
            <div class="dua">
              <input type="number" />
            </div>
            <div class="tiga">
              <input type="number" />
            </div>
            <div class="empat">
              <input type="number" />
            </div>
            <div class="lima">
              <input type="number" />
            </div>
            <div class="enam">
              <input type="number" />
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
            >Login now</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Forgot',
  data() {
    return {
      isSuccess: false
    }
  },
  components: {},
  methods: {
    onLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style src="../../assets/css/Auth/pin.css"></style>
