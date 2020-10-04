<template>
  <div>
    <b-row align-h="center" v-if="showMainProfile"
      ><b-col class="main mt-2" cols="6">
        <b-row
          ><b-col
            ><img
              :src="`${urlApi}${userData2.user_img}`"
              alt=""
              class="profile-image"
            />

            <p style="cursor: pointer" @click="setImage()" class="mt-2">
              <b-icon
                @click="$bvModal.show('modalUpdateImage')"
                icon="pencil"
              ></b-icon
              >Edit
            </p></b-col
          ></b-row
        >
        <b-modal id="modalUpdateImage" hide-footer style>
          <template v-slot:modal-title>Update Image</template>
          <b-form v-on:submit.prevent>
            <input type="file" @change="handleFile" />
            <div @click="$bvModal.hide('modalUpdateImage')">
              <b-button
                type="button"
                class="mt-3"
                variant="info"
                block
                @click="updateImage()"
                >Update</b-button
              >
            </div>
            <div>
              <b-button
                class="mt-2"
                variant="secondary"
                block
                @click="$bvModal.hide('modalUpdateImage')"
                >Cancel</b-button
              >
            </div>
          </b-form>
        </b-modal>
        <b-row
          ><b-col
            ><h5 class="name-text">
              {{
                userData2.first_name === ''
                  ? userData2.user_name
                  : userData2.first_name + ' ' + userData2.last_name
              }}
            </h5>
            <p class="name-phone">
              {{ userData2.user_phone }}
            </p></b-col
          ></b-row
        >
        <b-container fluid class="card" @click="setShowPersonalInfo"
          ><b-row align-h="around" align-v="center">
            <b-col class="p-4" md="7"
              ><h6 class="name-text-button">Personal Information</h6>
            </b-col>
            <b-col md="3"><b-icon icon="arrow-right"></b-icon></b-col> </b-row
        ></b-container>

        <b-container fluid class="card" @click="setShowChangePassword"
          ><b-row align-h="around" align-v="center">
            <b-col class="p-4" md="7"
              ><h6 class="name-text-button">Change Password</h6>
            </b-col>
            <b-col md="3"><b-icon icon="arrow-right"></b-icon></b-col> </b-row
        ></b-container>

        <b-container fluid class="card" @click="setShowChangePin"
          ><b-row align-h="around" align-v="center">
            <b-col class="p-4" md="7"
              ><h6 class="name-text-button">Change PIN</h6>
            </b-col>
            <b-col md="3"><b-icon icon="arrow-right"></b-icon></b-col> </b-row
        ></b-container>

        <b-container fluid class="card"
          ><b-row align-h="around" align-v="center">
            <b-col class="p-4" md="7"
              ><h6 @click="logout" class="name-text-button">Logout</h6>
            </b-col>
            <b-col md="3"><b-icon icon="arrow-right"></b-icon></b-col> </b-row
        ></b-container> </b-col
    ></b-row>
    <b-row v-if="showPersonalInfo"> <PersonalInfo /></b-row>
    <b-row v-if="showChangePassword"> <ChangePassword /></b-row>
    <b-row v-if="showChangePin"> <ChangePin /></b-row>
  </div>
</template>

<script>
import PersonalInfo from '../_modules/Personal-Info'
import ChangePassword from '../_modules/Change-Password'
import ChangePin from '../_modules/Change-PIN'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    PersonalInfo,
    ChangePassword,
    ChangePin
  },
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      form: {
        user_name: '',
        first_name: '',
        last_name: '',
        user_phone: '',
        user_img: {}
      }
    }
  },
  computed: {
    ...mapGetters({
      showMainProfile: 'getShowMainProfile',
      showPersonalInfo: 'getShowPersonalInfo',
      showChangePassword: 'getShowChangePassword',
      showChangePin: 'getShowChangePin',
      userData2: 'getUserData2',
      userData: 'userData',
      user_img: 'getUserImg'
    })
  },
  methods: {
    ...mapMutations([
      'setShowPersonalInfo',
      'setShowMainProfile',
      'setShowChangePassword',
      'setShowChangePin'
    ]),
    ...mapActions(['patchImage', 'getUserById', 'logout']),
    handleFile(event) {
      this.form.user_img = event.target.files[0]
    },
    setImage(data) {
      this.form = {
        user_img: this.userData2.user_img
      }
      // console.log(this.form)
    },
    updateImage() {
      // console.log(this.userData2.user_id)
      // console.log(this.form)
      const data = new FormData()
      data.append('user_img', this.form.user_img)
      const setData = {
        user_id: this.userData2.user_id,
        form: data
      }
      this.patchImage(setData)
        .then((response) => {
          this.$bvToast.toast(response.msg, {
            title: 'Status :',
            autoHideDelay: 2000,
            appendToast: true
          })
          // this.getUserById(this.userData2.user_id)
        })
        .catch((error) => {
          console.log(error)
          this.$bvToast.toast(error.msg, {
            title: 'Status :',
            autoHideDelay: 2000,
            appendToast: true
          })
        })
    },
    updateProfile() {}
    // logout() {
    //   this.logout()
    // }
  }
}
</script>

<style scoped>
/* .main {
  background-color: coral;
} */

.profile-image {
  width: 70px;
  height: 70px;
  background-blend-mode: normal;
  border-radius: 10px;
  margin-top: 0;
}

.card {
  cursor: pointer;
  text-align: left;
  height: 64px;
  background-color: rgba(229, 232, 237, 1);
  margin-bottom: 5px;
  border-radius: 10px;
}

.name-text {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  /* identical to box height, or 133% */

  text-align: center;

  color: #4d4b57;
}

.name-text-button {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height, or 175% */

  color: #4d4b57;
}

.name-phone {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* identical to box height, or 169% */
  text-align: center;
  color: #7a7886;
}

.navbar-image {
  width: 48px;
  height: 48px;
  background-blend-mode: normal;
  border-radius: 10px;
  margin-top: 15px;
}
</style>
