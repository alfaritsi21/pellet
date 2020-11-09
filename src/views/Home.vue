<template>
  <b-container fluid class="main-page">
    <!-- =====================NAVBAR============================= -->
    <b-container fluid class="navbar-container">
      <b-row align-h="around">
        <b-col cols="4" sm="4" md="4" lg="4" xl="4">
          <p class="navbar-logo" @click="setShowDashboard">Pellet</p>
        </b-col>
        <b-col cols="3" sm="3" md="3" lg="3" xl="3" class="navbar-profile">
          <img
            :src="`${urlApi}${userData2.user_img}`"
            alt
            class="navbar-image"
          />
          <div class="navbar-detail">
            <p class="navbar-name">
              {{
                userData2.first_name === ''
                  ? userData2.user_name
                  : userData2.first_name + ' ' + userData2.last_name
              }}
            </p>
            <p class="navbar-phone">{{ userData2.user_phone }}</p>
          </div>
          <div class="notif">
            <div class="notif-icon">
              <b-icon
                v-if="getNotification === true"
                v-b-popover.hover.bottom="'Ada notifikasi baru, segera lihat !'"
                @click="onBell"
                class="navbar-notification"
                icon="bell"
              ></b-icon>
              <b-icon
                v-else
                @click="onBell"
                class="navbar-notification"
                icon="bell"
              ></b-icon>
              <div v-if="getNotification === true" class="red-notif"></div>
            </div>
            <div v-if="isNotif === true" class="sub-notif">
              <div class="today">
                <p class="day1">Today</p>
                <div
                  v-for="(item, index) in getDailyHistory"
                  :key="index"
                  class="today-detail"
                >
                  <img
                    v-if="item.target_id === userData.user_id"
                    src="../assets/image/arrow-up(1).png"
                    alt
                  />
                  <img v-else src="../assets/image/arrow-up(2).png" alt />
                  <p>
                    {{
                      item.target_id === userData.user_id
                        ? item.trans_type === 'Top up'
                          ? 'Top up success'
                          : 'Transfered From ' + item.user_name
                        : 'Transfer to ' + item.user_name
                    }}
                  </p>
                  <h6>Rp.{{ formatPrice(item.trans_nominal) }}</h6>
                </div>
              </div>
              <div class="today">
                <p class="day1">This week</p>
                <div
                  v-for="(item, index) in getHistory"
                  :key="index"
                  class="today-detail"
                >
                  <img
                    v-if="item.target_id === userData.user_id"
                    src="../assets/image/arrow-up(1).png"
                    alt
                  />
                  <img v-else src="../assets/image/arrow-up(2).png" alt />
                  <p>
                    {{
                      item.target_id === userData.user_id
                        ? item.trans_type === 'Top up'
                          ? 'Top up success'
                          : 'Transfered From ' + item.user_name
                        : 'Transfer to ' + item.user_name
                    }}
                  </p>
                  <h6>Rp.{{ formatPrice(item.trans_nominal) }}</h6>
                </div>
              </div>
              <div class="today">
                <p class="day1">This month</p>
                <div
                  v-for="(item, index) in getMonthlyHistory"
                  :key="index"
                  class="today-detail"
                >
                  <img
                    v-if="item.target_id === userData.user_id"
                    src="../assets/image/arrow-up(1).png"
                    alt
                  />
                  <img v-else src="../assets/image/arrow-up(2).png" alt />
                  <p>
                    {{
                      item.target_id === userData.user_id
                        ? item.trans_type === 'Top up'
                          ? 'Top up success'
                          : 'Transfered From ' + item.user_name
                        : 'Transfer to ' + item.user_name
                    }}
                  </p>
                  <h6>Rp.{{ formatPrice(item.trans_nominal) }}</h6>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- ==================MAIN CONTENT========================== -->
    <div class="main-container">
      <b-row align-h="center">
        <b-col class="main-side" cols="12" sm="12" md="2" lg="3" xl="2">
          <b-row align-h="between">
            <b-col cols="12" class="side-content" @click="setShowDashboard">
              <b-row @click="onDashboard" class="dash">
                <!-- <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >-->
                <b-col cols="3">
                  <b-icon class="side-notification" icon="grid"></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6">Dashboard</b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="side-content" @click="setShowTransfer">
              <b-row>
                <!-- <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >-->
                <b-col cols="3">
                  <b-icon class="side-notification" icon="arrow-up"></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6">Transfer</b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="side-content" @click="setShowTopup">
              <b-row>
                <!-- <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >-->
                <b-col cols="3">
                  <b-icon class="side-notification" icon="plus"></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6">Top Up</b-col>
              </b-row>
            </b-col>
            <b-col
              cols="12"
              class="side-content side-profile"
              @click="showProfiles"
            >
              <b-row>
                <!-- <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >-->
                <b-col cols="3">
                  <b-icon class="side-notification" icon="person"></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6">Profile</b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="side-logout">
              <b-row>
                <!-- <b-col cols="1" class="side-indicator"
                  ><p class="text-hidden">a</p></b-col
                >-->
                <b-col cols="3">
                  <b-icon
                    class="side-notification"
                    icon="box-arrow-right"
                  ></b-icon>
                </b-col>
                <b-col class="side-menu" cols="6" @click.prevent="handleLogout"
                  >Logout</b-col
                >
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="7">
          <div class="main-content-dashboard" v-show="showDashboard">
            <Dashboard />
          </div>
          <div class="dashboard-container main-content" v-show="showTransfer">
            <Transfer />
          </div>
          <div class="dashboard-container main-content" v-show="showTopup">
            <Topup />
          </div>
          <div class="dashboard-container main-content" v-show="showProfile">
            <Profile />
          </div>
          <div
            class="dashboard-container main-content"
            v-show="showTransaction"
          >
            <Transaction />
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- =====================FOOTER============================= -->
    <b-container fluid class="footer-container">
      <b-row align-h="around">
        <b-col cols="3" sm="3" md="3" lg="3" xl="3">
          <p class="footer-text">2020 Pellet. All right reserved.</p>
        </b-col>
        <b-col cols="9" sm="9" md="9" lg="9" xl="9">
          <b-row align-h="around">
            <b-col cols="7" sm="7" md="7" lg="7" xl="7">
              <p class="footer-text">+62 5637 8882 9901</p>
            </b-col>
            <b-col cols="5" sm="5" md="5" lg="5" xl="5">
              <p class="footer-text">contact@Pellet.com</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Dashboard from '../components/_modules/Dashboard'
import Profile from '../components/_modules/Profile'
import Topup from '../components/_modules/Topup'
import Transfer from '../components/_modules/Transfer'
import Transaction from '../components/_modules/Transaction'

import { mapGetters, mapMutations, mapActions } from 'vuex'
import io from 'socket.io-client'

export default {
  name: 'Home',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      // socket: io('http://127.0.0.1:3001'),
      socket: io(process.env.VUE_APP_URL),
      isNotif: false
    }
  },
  components: {
    Dashboard,
    Profile,
    Topup,
    Transfer,
    Transaction
  },
  watch: {},
  created() {
    this.cekDataUser()
  },
  mounted() {
    this.socket.on('topupNotif', data => {
      setTimeout(() => {
        this.$bvToast.toast(
          'Top up Anda sebesar Rp.' + data.topup_nominal + ' berhasil diproses',
          {
            title: 'Info',
            variant: 'info',
            solid: true
          }
        )
        this.notification(true)
      }, 5000)
    })
    this.socket.on('welcome', data => {
      setTimeout(() => {
        this.$bvToast.toast('Welcome back ' + data.user_name, {
          title: 'PELLET_BOT',
          variant: 'info',
          solid: true
        })
      }, 1000)
    })
    this.socket.on('transfer', data => {
      setTimeout(() => {
        this.$bvToast.toast(
          'You have gotten Rp.' +
            data.tf_nominal +
            ' from user with id: ' +
            data.user_id,
          {
            title: 'Info',
            variant: 'info',
            solid: true
          }
        )
        this.notification(true)
      }, 1000)
    })
  },
  computed: {
    ...mapGetters({
      showDashboard: 'getshowDashboard',
      showTransfer: 'getShowTransfer',
      showTopup: 'getshowTopup',
      showProfile: 'getshowProfile',
      showTransaction: 'getshowTransaction',
      userData: 'userData',
      userData2: 'getUserData2',
      getHistory: 'getHistory',
      getMonthlyHistory: 'getMonthlyHistory',
      getDailyHistory: 'getDailyHistory',
      getNotification: 'getNotification'
    })
  },
  methods: {
    ...mapMutations([
      'setShowDashboard',
      'setShowTransfer',
      'setShowTopup',
      'setShowProfile',
      'setShowMainProfile'
    ]),
    ...mapActions([
      'logout',
      'cekPin',
      'monthlyHistory',
      'weeklyHistory',
      'dailyHistory',
      'notification'
    ]),
    cekDataUser() {
      this.cekPin(this.userData.user_id)
        .then(response => {
          if (response === 0) {
            this.$bvToast.toast(
              'Please create new pin to secure your account',
              {
                title: 'Warning',
                variant: 'danger',
                solid: true
              }
            )
            setTimeout(() => {
              this.$router.push('/pin')
            }, 2000)
          } else {
            this.socket.emit('welcomeMessage', this.userData)
          }
        })
        .catch(error => {
          this.$bvToast.toast(error.data.msg, {
            title: 'Warning',
            variant: 'danger',
            solid: true
          })
        })
    },
    // onLogout() {
    //   this.logout(this.$bvToast)
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
    },
    showProfiles() {
      this.cekPin(this.userData.user_id)
      this.setShowProfile()
      this.setShowMainProfile()
    },
    onBell() {
      this.cekPin(this.userData.user_id)
      if (this.isNotif === false) {
        this.isNotif = true
        this.dailyHistory(this.userData.user_id)
        this.weeklyHistory(this.userData.user_id)
        this.monthlyHistory(this.userData.user_id)
        this.notification(false)
      } else {
        this.isNotif = false
      }
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    onDashboard() {
      this.cekPin(this.userData.user_id)
    }
  }
}
</script>

<style scoped>
.main-page {
  background-color: rgba(99, 121, 244, 0.2);
}

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

.navbar-logo:hover {
  cursor: pointer;
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
  color: rgba(58, 61, 66, 0.9);
}

.navbar-notification {
  margin: 25px 10px;
  font-size: 23px;
}

.main-container {
  margin: 30px 0;
  height: 600px;
}

.main-side {
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
  padding: 10px 10px 0px 10px;
}

.main-content::-webkit-scrollbar {
  display: none;
}

.side-content {
  margin: 10px 0;
  border-radius: 10px;
}

.row {
  margin-right: 0;
  margin-left: 0;
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
  background: #6379f4;
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
  margin-bottom: 15px;
}

.footer-container {
  background-color: #6379f4;
  height: 70px;
}

.footer-text {
  margin-top: 5px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: rgba(239, 239, 239, 0.9);
}

.dashboard-container-primary {
  padding-right: 0;
  padding-left: 0;
}

.main-content-dashboard {
  margin-left: 30px;
  background: transparent;
  height: 490px;
}
.notif {
  padding: 0;
  position: relative;
}
.navbar-notification {
  cursor: pointer;
  margin-bottom: 0;
}
.sub-notif {
  position: absolute;
  margin-top: 0;
  border: 1px solid black;
  width: 300px;
  max-height: 530px;
  overflow-y: scroll;
  z-index: 5;
  top: 75px;
  border-radius: 20px;
  right: -40px;
  background-color: white;
  padding: 10px 10px 0 10px;
}

.sub-notif::-webkit-scrollbar {
  display: none;
}
.today {
  padding-top: 0px;
  position: relative;
  width: 100%;
  overflow-y: scroll;
  max-height: 200px;
  margin-bottom: 10px;
}
.today::-webkit-scrollbar {
  display: none;
}
.today .day1 {
  position: sticky;
  text-align: left;
  top: 0;
  left: 0;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: white;
  z-index: 1;
}
.today-detail {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 20px;
}
.today-detail img {
  position: absolute;
  top: 0;
  left: 10px;
}
.today-detail p:nth-of-type(1) {
  text-align: left;
  width: 100%;
  padding-left: 50px;
  font-size: 13px;
  position: relative;
  margin-bottom: 5px;
}
.today-detail h6 {
  position: relative;
  margin-bottom: 0;
  text-align: left;
  width: 100%;
  padding-left: 50px;
  font-weight: bold;
  font-size: 14px;
}
.navbar-notification {
  position: relative;
}
.notif-icon {
  position: relative;
  height: 40px;
}
.red-notif {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
}

@media (max-width: 768px) {
  .side-content {
    margin: 10px 0;
    border-radius: 10px;
  }

  .side-profile {
    margin-bottom: 20px;
  }

  .side-menu {
    line-height: 31px;
    margin-bottom: 0px;
  }
  .main-container {
    margin: 15px 0;
    height: 910px;
  }

  .main-side {
    height: 200px;
    margin-bottom: 20px;
    overflow: auto;
  }
  .sub-notif {
    width: 250px;
    max-height: 430px;
    right: 10px;
    padding: 10px 10px 0 10px;
  }
  .footer-container {
    /* display: none; */
    height: 80px;
  }

  .footer-text {
    font-size: 14px;
    line-height: 20px;
  }
}
@media (max-width: 576px) {
}
</style>
