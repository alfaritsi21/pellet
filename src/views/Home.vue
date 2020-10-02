<template>
  <b-container fluid>
    <!-- =====================NAVBAR============================= -->
    <b-container fluid class="navbar-container">
      <b-row align-h="around">
        <b-col md="4"><p class="navbar-logo">Pellet</p></b-col>
        <b-col md="3" class="navbar-profile">
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/HwtAUAufmAZv-FgGEIMJS2eQM-A/0x1:2771x2772/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg"
            alt=""
            class="navbar-image"
          />
          <div class="navbar-detail">
            <p class="navbar-name">Robert Downey Jr</p>
            <p class="navbar-phone">+62 8712 3575</p>
          </div>
          <b-icon class="navbar-notification" icon="bell"></b-icon>
        </b-col>
      </b-row>
    </b-container>
    <!-- ==================MAIN CONTENT========================== -->
    <div class="main-container">
      <b-row align-h="center">
        <b-col class="main-side" cols="2"
          ><b-row align-h="between">
            <b-col cols="12" class="side-content" @click="setShowDashboard">
              <b-row>
                <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >
                <b-col cols="3">
                  <b-icon class="side-notification" icon="grid"></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6">Dashboard</b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="side-content" @click="setShowTransfer">
              <b-row>
                <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >
                <b-col cols="3">
                  <b-icon class="side-notification" icon="arrow-up"></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6">Transfer</b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="side-content" @click="setShowTopup">
              <b-row>
                <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >
                <b-col cols="3">
                  <b-icon class="side-notification" icon="plus"></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6">Top Up</b-col>
              </b-row>
            </b-col>
            <b-col
              cols="12"
              class="side-content side-profile"
              @click="setShowProfile"
            >
              <b-row>
                <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >
                <b-col cols="3">
                  <b-icon class="side-notification" icon="person"></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6">Profile</b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="side-logout">
              <b-row>
                <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >
                <b-col cols="3">
                  <b-icon
                    class="side-notification"
                    icon="box-arrow-right"
                  ></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6" @click="onLogout"
                  >Logout</b-col
                >
              </b-row>
            </b-col>
          </b-row></b-col
        >
        <b-col class="main-content" cols="7">
          <div class="dashboard-container" v-show="showDashboard">
            <Dashboard />
          </div>
          <div class="dashboard-container" v-show="showTransfer">
            <Transfer />
          </div>
          <div class="dashboard-container" v-show="showTopup">
            <Topup />
          </div>
          <div class="dashboard-container" v-show="showProfile">
            <Profile />
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- =====================FOOTER============================= -->
    <b-container fluid class="footer-container">
      <b-row align-h="around">
        <b-col cols="3"
          ><p class="footer-text">2020 Pellet. All right reserved.</p></b-col
        >
        <b-col cols="5"
          ><b-row align-h="around">
            <b-col cols="5"
              ><p class="footer-text">+62 5637 8882 9901</p></b-col
            >
            <b-col cols="4"
              ><p class="footer-text">contact@zwallet.com</p></b-col
            >
          </b-row></b-col
        >
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Dashboard from '../components/_modules/Dashboard'
import Profile from '../components/_modules/Profile'
import Topup from '../components/_modules/Topup'
import Transfer from '../components/_modules/Transfer'

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Dashboard,
    Profile,
    Topup,
    Transfer
  },
  computed: {
    ...mapGetters({
      showDashboard: 'getshowDashboard',
      showTransfer: 'getShowTransfer',
      showTopup: 'getshowTopup',
      showProfile: 'getshowProfile'
    })
  },
  methods: {
    ...mapMutations([
      'setShowDashboard',
      'setShowTransfer',
      'setShowTopup',
      'setShowProfile'
    ]),
    ...mapActions(['logout']),
    onLogout() {
      this.logout()
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
  margin: 0;
}

.justify-content-around {
  margin-right: 0;
  margin-left: 0;
}

.justify-content-center {
  margin-right: 0;
  margin-left: 0;
}

.navbar-container {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 15px 15px;
  height: 70px;
}

.navbar-logo {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  text-align: left;
  padding: 15px 0;

  color: #6379f4;
}

.navbar-profile {
  display: flex;
  justify-content: center;
}

.navbar-image {
  width: 48px;
  height: 48px;
  background-blend-mode: normal;
  border-radius: 10px;
  margin-top: 15px;
}

.navbar-detail {
  margin: 12px 15px;
}

.navbar-name {
  margin-bottom: 0;
  margin-left: 5px;
  margin-right: 5px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 31px;
  /* identical to box height, or 172% */

  text-align: center;

  color: #3a3d42;
}

.navbar-phone {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  padding-bottom: 15px;
  /* identical to box height, or 185% */

  color: rgba(58, 61, 66, 0.9);
}

.navbar-notification {
  margin: 25px 10px;
  font-size: 23px;
}

.main-container {
  margin: 30px 0;
  height: 488px;
}

.main-side {
  /* background-color: greenyellow; */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 0;
}

.main-content {
  /* background-color: hotpink; */
  margin-left: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  height: 490px;
  overflow-y: scroll;
}

.main-content::-webkit-scrollbar {
  display: none;
}

.side-content {
  margin: 10px 0;
  border-radius: 10px;
}

.side-content:hover {
  cursor: pointer;
  background-color: whitesmoke;
}

.side-profile {
  margin-bottom: 170px;
}

.side-indicator {
  width: 5px;
  /* background: #6379f4; */
  text-align: left;
}

.side-logout {
  margin-bottom: 10px;
}

.side-logout:hover {
  cursor: pointer;
  background-color: whitesmoke;
}

.text-hidden {
  opacity: 0;
}

.side-notification {
  /* color: #6379f4; */
  font-size: 25px;
  margin-top: 5px;
}

.side-menu {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 31px;
  text-align: left;

  /* color: #6379f4; */
}

.footer-container {
  background-color: #6379f4;

  /* border-radius: 15px 15px 0 0; */
  height: 49px;
}

.footer-text {
  margin-top: 5px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  color: rgba(239, 239, 239, 0.9);
}
</style>
