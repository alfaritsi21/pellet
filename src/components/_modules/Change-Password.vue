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

    <b-form @submit.prevent="onSubmit" class="containerPass">
      <div class="input-prepend">
        <span><b-icon icon="lock"></b-icon></span>
        <input
          v-model="form.current_password"
          placeholder="Current password"
          :type="type1"
        />
        <span><b-icon icon="eye-slash" @click="visibility(1)"></b-icon></span>
      </div>

      <div class="input-prepend">
        <span><b-icon icon="lock"></b-icon></span>
        <input
          v-model="form.user_password"
          placeholder="New password password"
          :type="type2"
        />
        <span><b-icon icon="eye-slash" @click="visibility(2)"></b-icon></span>
      </div>
      <div class="input-prepend">
        <span><b-icon icon="lock"></b-icon></span>
        <input
          v-model="form.confirm_password"
          placeholder="Repeat new password"
          :type="type3"
        />
        <span><b-icon icon="eye-slash" @click="visibility(3)"></b-icon></span>
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
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      type1: 'password',
      type2: 'password',
      type3: 'password',
      form: {
        current_password: '',
        user_password: '',
        confirm_password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    ...mapActions(['changePassword']),
    ...mapMutations(['setShowDashboard']),
    onSubmit() {
      this.changePassword([this.userData.user_id, this.form])
        .then(response => {
          this.$bvToast.toast(response.msg, {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.form.current_password = ''
          this.form.user_password = ''
          this.form.confirm_password = ''
          this.setShowDashboard()
        })
        .catch(error => {
          this.$bvToast.toast(error.data.msg, {
            title: 'Warning',
            variant: 'danger',
            solid: true
          })
          this.form.current_password = ''
          this.form.user_password = ''
          this.form.confirm_password = ''
        })
    },
    visibility(val) {
      if (val === 1) {
        if (this.type1 === 'password') {
          this.type1 = 'text'
        } else {
          this.type1 = 'password'
        }
      } else if (val === 2) {
        if (this.type2 === 'password') {
          this.type2 = 'text'
        } else {
          this.type2 = 'password'
        }
      } else {
        if (this.type3 === 'password') {
          this.type3 = 'text'
        } else {
          this.type3 = 'password'
        }
      }
    }
  }
}
</script>

<style scoped>
p {
  color: grey;
}

.p-3 {
  padding-bottom: 0px !important;
}

.containerPass {
  margin-top: 30px;
}

input {
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
