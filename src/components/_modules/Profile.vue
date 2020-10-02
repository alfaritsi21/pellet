<template>
  <div>
    <b-row align-h="center" v-if="showMainProfile"
      ><b-col class="main mt-2" cols="6">
        <b-row
          ><b-col
            ><img
              src="https://media1.popsugar-assets.com/files/thumbor/HwtAUAufmAZv-FgGEIMJS2eQM-A/0x1:2771x2772/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg"
              alt=""
              class="navbar-image"
            />

            <p class="mt-2"><b-icon icon="pencil"></b-icon>Edit</p></b-col
          ></b-row
        >
        <b-row
          ><b-col
            ><h5 class="name-text">Robert Downey Jr</h5>
            <p class="name-phone">+62 813-9387-7946</p></b-col
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
              ><h6 class="name-text-button">Logout</h6>
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
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    PersonalInfo,
    ChangePassword,
    ChangePin
  },
  computed: {
    ...mapGetters({
      showMainProfile: 'getShowMainProfile',
      showPersonalInfo: 'getShowPersonalInfo',
      showChangePassword: 'getShowChangePassword',
      showChangePin: 'getShowChangePin'
    })
  },
  methods: {
    ...mapMutations([
      'setShowPersonalInfo',
      'setShowMainProfile',
      'setShowChangePassword',
      'setShowChangePin'
    ])
  }
}
</script>

<style scoped>
/* .main {
  background-color: coral;
} */

.navbar-image {
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
</style>
