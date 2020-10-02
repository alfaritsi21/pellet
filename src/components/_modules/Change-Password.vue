<template>
  <b-container fluid>
    <b-row class="text-left p-3"
      ><b-col cols="12"
        ><h3>Change Password</h3>
        <p>
          You must enter your current password and then <br />
          type your new password twice.
        </p>
      </b-col></b-row
    >

    <b-form class="containerPass">
      <div class="input-prepend">
        <span><b-icon icon="lock"></b-icon></span>
        <input
          v-model="form.user_password"
          placeholder="Current password"
          type="text"
        />
        <span><b-icon icon="eye-slash"></b-icon></span>
      </div>

      <div class="input-prepend">
        <span><b-icon icon="lock"></b-icon></span>
        <input
          v-model="form.user_newPassword"
          placeholder="New password password"
          type="text"
        />
        <span><b-icon icon="eye-slash"></b-icon></span>
      </div>
      <div class="input-prepend">
        <span><b-icon icon="lock"></b-icon></span>
        <input
          v-model="form.user_password_confirm"
          placeholder="Repeat new password"
          type="text"
        />
        <span><b-icon icon="eye-slash"></b-icon></span>
      </div>

      <b-row align-h="center" class="mt-5"
        ><b-col cols="6"
          ><b-button block class="submit" type="submit"
            >Change Password</b-button
          ></b-col
        ></b-row
      >
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user_password: '',
        user_newPassword: '',
        user_password_confirm: ''
      }
    }
  }
}
</script>

<style scoped>
p {
  color: grey;
}

.containerPass {
  margin-top: 30px;
  /* display: flex;
  flex-flow: row nowrap; */
}

input {
  /* padding: 20px; */

  /* font-size: 30px; */
  /* text-align: center; */
  /* color: red; */
  width: 431px;
  height: 65px;
  border: 1px solid rgba(169, 169, 169, 0.6);

  border-radius: 10px;
  background: linear-gradient(
      rgba(169, 169, 169, 0.4),
      rgba(169, 169, 169, 0.4)
    )
    center bottom 5px / calc(100% - 10px) 2px no-repeat;

  border: 1px solid transparent;
  margin: 5px;
}

.submit {
  color: rgba(136, 136, 143, 1);
  background-color: #dadada;
  border: 1px solid #dadada;
  border-radius: 12px;
}

::placeholder {
  color: rgba(169, 169, 169, 0.6);
}
</style>
