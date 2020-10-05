<template>
  <b-container fluid>
    <b-row class="personal">
      <b-col cols="12">
        <strong>Personal Information</strong>
        <br />
        <br />
        <p>
          We got your personal information from the sign
          <br />up proccess. If you want to make changes on
          <br />your information, contact our support.
        </p>
      </b-col>
    </b-row>
    <b-container fluid>
      <b-row class="card">
        <b-col cols="12">
          <p>First Name</p>
          <strong>{{ userData2.first_name }}</strong>
        </b-col>
      </b-row>
      <b-row class="card">
        <b-col>
          <p>Last Name</p>
          <strong>{{ userData2.last_name }}</strong>
        </b-col>
      </b-row>
      <b-row class="card">
        <b-col>
          <p>Verified E-Mail</p>
          <strong>{{ userData2.user_email }}</strong>
        </b-col>
      </b-row>
      <b-row class="card" align-h="between" align-v="center">
        <b-col cols="8">
          <p>Phone Number</p>
          <strong>{{ userData2.user_phone }}</strong>
        </b-col>
        <b-col
          style="cursor: pointer"
          cols="4"
          @click="$bvModal.show('updateProfile')"
          v-on:click="setUpdate()"
          class="text-right"
        >Manage Personal Info</b-col>
      </b-row>
      <b-modal id="updateProfile" hide-footer style>
        <template v-slot:modal-title>Manage Personal Info</template>
        <b-form @submit.prevent style="color: grey">
          <b-form-group label="Name">
            <b-input
              type="text"
              v-model="form.user_name"
              :placeholder="userData2.user_name"
              disabled
            />
          </b-form-group>
          <b-form-group label="First Name">
            <b-input type="text" v-model="form.first_name" placeholder="Input first name" />
          </b-form-group>
          <b-form-group label="Last Name">
            <b-input type="text" v-model="form.last_name" placeholder="input Last Name" />
          </b-form-group>
          <b-form-group label="Phone">
            <b-input type="number" v-model="form.user_phone" placeholder="Input your phone" />
          </b-form-group>
          <b-row>
            <b-col @click="$bvModal.hide('updateProfile')">
              <b-button
                @click="updateProfile()"
                block
                style="color: white"
                variant="info"
                type="submit"
                class="my-3"
              >Update</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-modal>
    </b-container>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        user_name: '',
        first_name: '',
        last_name: '',
        user_phone: null
      }
    }
  },
  computed: {
    ...mapGetters({
      userData2: 'getUserData2',
      userData: 'userData',
      user_img: 'getUserImg'
    })
  },
  methods: {
    ...mapActions(['patchProfile', 'cekPin', 'getUserById']),
    updateProfile() {
      // console.log(this.form)
      const setData = {
        user_id: this.userData2.user_id,
        form: this.form
      }
      this.patchProfile(setData)
        .then(response => {
          this.$bvToast.toast(`${response.msg}`, {
            title: 'Info ',
            variant: 'info',
            solid: true
          })
          this.cekPin(this.userData.user_id)
        })
        .catch(error => {
          console.log(error)
          this.$bvToast.toast(`${error.data.msg}`, {
            title: 'Check it again ',
            variant: 'danger',
            solid: true
          })
        })
    },
    setUpdate() {
      this.form = {
        user_id: this.userData2.user_id,
        user_name: this.userData2.user_name,
        first_name: this.userData2.first_name,
        last_name: this.userData2.last_name,
        user_phone: this.userData2.user_phone
        // profile_desc: this.user.profile_desc
      }
    }
  }
}
</script>

<style scoped>
.personal {
  text-align: left;
  margin: 10px 10px;
  font-weight: 700px;
  font-size: 18px;
}

p {
  font-size: 16px;
  color: grey;
}

.card {
  text-align: left;
  width: 100%;
  height: 85px;
  margin-bottom: 5px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
