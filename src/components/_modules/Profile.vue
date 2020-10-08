<template>
  <div>
    <b-row align-h="center" v-if="showMainProfile">
      <b-col
        class="main mt-2"
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
      >
        <b-row>
          <b-col>
            <img
              :src="`${urlApi}${userData2.user_img}`"
              alt
              class="profile-image"
            />
            <input
              type="file"
              ref="file"
              @change="updateImage"
              style="display: none"
            />
            <h6
              @click="$refs.file.click()"
              style="cursor: pointer; margin-top: 5px"
            >
              <b-icon icon="pencil"></b-icon>Edit
            </h6>
            <h6
              @click.prevent="delImg()"
              style="cursor: pointer; margin-top: 5px"
            >
              <b-icon icon="trash"></b-icon>
            </h6>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <h5 class="name-text">
              {{
                userData2.first_name === ''
                  ? userData2.user_name
                  : userData2.first_name + ' ' + userData2.last_name
              }}
            </h5>
            <p class="name-phone">{{ userData2.user_phone }}</p>
          </b-col>
        </b-row>
        <b-container fluid class="card" @click="setShowPersonalInfo">
          <b-row align-h="between" class="vh-100" align-v="center">
            <b-col class=" pl-2 pr-0" md="10">
              <h6 class="name-text-button">Personal Information</h6>
            </b-col>
            <b-col class="text-right" xs="2" sm="2" md="2" lg="2" xl="2">
              <b-icon icon="arrow-right"></b-icon>
            </b-col>
          </b-row>
        </b-container>

        <b-container fluid class="card" @click="setShowChangePassword">
          <b-row align-h="between" class="vh-100" align-v="center">
            <b-col class=" pl-2 pr-0" md="9">
              <h6 class="name-text-button">Change Password</h6>
            </b-col>
            <b-col class="text-right" xs="2" sm="2" md="2" lg="2" xl="2">
              <b-icon icon="arrow-right"></b-icon>
            </b-col>
          </b-row>
        </b-container>

        <b-container fluid class="card" @click="setShowChangePin">
          <b-row align-h="between" class="vh-100" align-v="center">
            <b-col class=" pl-2 pr-0" md="10">
              <h6 class="name-text-button">Change PIN</h6>
            </b-col>
            <b-col class="text-right" xs="2" sm="2" md="2" lg="2" xl="2">
              <b-icon icon="arrow-right"></b-icon>
            </b-col>
          </b-row>
        </b-container>

        <b-container fluid class="card" @click.prevent="handleLogout">
          <b-row align-h="between" class="vh-100" align-v="center">
            <b-col class=" pl-2 pr-0" md="10">
              <h6 class="name-text-button">
                Logout
              </h6>
            </b-col>
            <b-col class="text-right" xs="2" sm="2" md="2" lg="2" xl="2">
              <b-icon icon="arrow-right"></b-icon>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
    <b-row v-if="showPersonalInfo">
      <PersonalInfo />
    </b-row>
    <b-row v-if="showChangePassword">
      <ChangePassword />
    </b-row>
    <b-row v-if="showChangePin">
      <ChangePin />
    </b-row>
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
      formImage: {},
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
    ...mapActions([
      'patchImage',
      'getUserById',
      'cekPin',
      'logout',
      'deleteImg'
    ]),
    // handleFile(event) {
    //   this.form.user_img = event.target.files[0]
    // },
    // setImage(data) {
    //   this.form = {
    //     user_img: this.userData2.user_img
    //   }
    //   // console.log(this.form)
    // },
    updateImage() {
      // console.log(this.userData2.user_id)
      // console.log(this.form)
      this.form.user_img = event.target.files[0]
      const data = new FormData()
      data.append('user_img', this.form.user_img)
      const setData = {
        user_id: this.userData2.user_id,
        form: data
      }
      this.patchImage(setData)
        .then(response => {
          console.log(response)
          this.$bvToast.toast(`${response.msg}`, {
            title: 'Info ',
            variant: 'success',
            solid: true
          })
          // this.form = {}
          this.cekPin(this.userData.user_id)
          this.getUserById(this.userData2.user_id)
        })
        .catch(error => {
          this.$bvToast.toast(`${error.data.msg}`, {
            title: 'Check it again ',
            variant: 'danger',
            solid: true
          })
        })
    },
    delImg(data) {
      console.log(this.userData2.user_id)
      const setData = {
        user_id: this.userData2.user_id,
        form: data
      }
      this.deleteImg(setData)
        .then(response => {
          console.log(response)
          this.$bvToast.toast(`${response.msg}`, {
            title: 'Info ',
            variant: 'success',
            solid: true
          })
          // this.form = {}
          this.cekPin(this.userData.user_id)
          this.getUserById(this.userData2.user_id)
        })
        .catch(error => {
          this.$bvToast.toast(`${error.data}`, {
            title: 'Check it again ',
            variant: 'danger',
            solid: true
          })
        })
    },
    updateProfile() {},
    // logout() {
    //   this.logout()
    // },
    handleLogout() {
      this.$bvModal
        .msgBoxConfirm('Are you sure?', {
          cancelVariant: 'light',
          okVariant: 'info',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
        .then(item => {
          this.isLogout = item
          this.isLogout ? this.logout(this.$bvToast) : console.log(item)
        })
    }
  }
}
</script>

<style scoped>
.profile-image {
  max-width: 70px;
  max-height: 70px;
  background-blend-mode: normal;
  border-radius: 10px;
  margin-top: 0;
}

.card {
  width: 60%;
  cursor: pointer;
  text-align: left;
  height: 64px;
  background-color: rgba(229, 232, 237, 1);
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.name-text {
  font-family: ' Nunito Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  /* identical to box height, or 133% */

  text-align: center;

  color: #4d4b57;
}

.name-text-button {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height, or 175% */

  color: #4d4b57;
}

.name-phone {
  font-family: 'Nunito Sans';
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
