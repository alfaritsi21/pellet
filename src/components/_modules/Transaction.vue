<template>
  <b-container fluid class="transaction-container">
    <div v-if="this.sortBy === 'week'" class="this-week">
      <p class="transaction-title">Transaction History</p>
      <p class="transaction-week">This Week</p>
      <b-row v-for="(item, index) in getHistory" :key="index" align-h="between">
        <b-col cols="7" class="left-detail"
          ><b-col class="navbar-profile">
            <img
              :src="`${urlApi}${item.user_img}`"
              alt=""
              class="navbar-image"
            />
            <div class="navbar-detail">
              <p class="navbar-name">
                {{
                  item.first_name === ''
                    ? item.user_name
                    : item.first_name + ' ' + item.last_name
                }}
              </p>
              <p class="navbar-phone">
                {{
                  userData.user_id === item.target_id
                    ? item.trans_type
                    : 'Subscription'
                }}
              </p>
            </div>
          </b-col></b-col
        >
        <b-col cols="4"
          ><p
            class="transaction-nominal"
            :style="[
              userData.user_id === item.target_id
                ? { color: 'green' }
                : { color: 'red' }
            ]"
          >
            {{
              userData.user_id === item.target_id
                ? '+' + item.trans_nominal
                : '-' + item.trans_nominal
            }}
          </p></b-col
        >
      </b-row>
    </div>
    <!-- ====================THIS MONTH===================== -->
    <div v-if="this.sortBy === 'month'" class="this-month">
      <p class="transaction-title">Transaction History</p>
      <p class="transaction-week">This Month</p>
      <b-row
        v-for="(item, index) in getMonthlyHistory"
        :key="index"
        align-h="between"
      >
        <b-col cols="7" class="left-detail"
          ><b-col class="navbar-profile">
            <img
              :src="`${urlApi}${item.user_img}`"
              alt=""
              class="navbar-image"
            />
            <div class="navbar-detail">
              <p class="navbar-name">
                {{
                  item.first_name === ''
                    ? item.user_name
                    : item.first_name + ' ' + item.last_name
                }}
              </p>
              <p class="navbar-phone">
                {{
                  userData.user_id === item.target_id
                    ? item.trans_type
                    : 'Subscription'
                }}
              </p>
            </div>
          </b-col></b-col
        >
        <b-col cols="4"
          ><p
            class="transaction-nominal"
            :style="[
              userData.user_id === item.target_id
                ? { color: 'green' }
                : { color: 'red' }
            ]"
          >
            {{
              userData.user_id === item.target_id
                ? '+' + item.trans_nominal
                : '-' + item.trans_nominal
            }}
          </p></b-col
        >
      </b-row>
    </div>
    <div v-if="this.sortBy === 'day'" class="this-week">
      <p class="transaction-title">Transaction History</p>
      <p class="transaction-week">Today</p>
      <b-row
        v-for="(item, index) in getDailyHistory"
        :key="index"
        align-h="between"
      >
        <b-col cols="7" class="left-detail"
          ><b-col class="navbar-profile">
            <img
              :src="`${urlApi}${item.user_img}`"
              alt=""
              class="navbar-image"
            />
            <div class="navbar-detail">
              <p class="navbar-name">
                {{
                  item.first_name === ''
                    ? item.user_name
                    : item.first_name + ' ' + item.last_name
                }}
              </p>
              <p class="navbar-phone">
                {{
                  userData.user_id === item.target_id
                    ? item.trans_type
                    : 'Subscription'
                }}
              </p>
            </div>
          </b-col></b-col
        >
        <b-col cols="4"
          ><p
            class="transaction-nominal"
            :style="[
              userData.user_id === item.target_id
                ? { color: 'green' }
                : { color: 'red' }
            ]"
          >
            {{
              userData.user_id === item.target_id
                ? '+' + item.trans_nominal
                : '-' + item.trans_nominal
            }}
          </p></b-col
        >
      </b-row>
    </div>
    <select class="sort-history" v-model="sortBy" @change="sorting">
      <option value="week">This week</option>
      <option value="month">This month</option>
      <option value="day">Today</option>
    </select>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      sortBy: 'week'
    }
  },
  computed: {
    ...mapGetters([
      'userData',
      'getHistory',
      'getMonthlyHistory',
      'getDailyHistory'
    ])
  },
  created() {
    this.monthlyTransaction()
  },
  methods: {
    ...mapActions(['monthlyHistory', 'weeklyHistory', 'dailyHistory']),
    monthlyTransaction() {
      this.monthlyHistory(this.userData.user_id)
    },
    sorting() {
      this.dailyHistory(this.userData.user_id)
      this.weeklyHistory(this.userData.user_id)
      this.monthlyHistory(this.userData.user_id)
    }
  }
}
</script>

<style scoped>
.sort-history {
  position: absolute;
  top: 25px;
  right: 60px;
  font-size: 14px;
  border-radius: 10px;
  color: rgb(15, 15, 15);
  background-color: #d6d7dab9;
  box-shadow: -2px 2px 9px #4b4b4bc0;
  cursor: pointer;
  padding: 3px 5px;
}
.sort-history:focus {
  outline: none;
  border: none;
}
.transaction-title {
  padding-top: 15px;
  padding-left: 30px;

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  /* identical to box height */

  /* Zwallet/Dark */

  color: #3a3d42;
}

.transaction-week {
  padding-left: 30px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: left;
  /* identical to box height, or 169% */

  color: #7a7886;
}

.transaction-month {
  margin-top: 30px;
  padding-left: 30px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: left;
  /* identical to box height, or 169% */

  color: #7a7886;
}

.navbar-profile {
  display: flex;
  height: 80px;
  padding: 0 10px;
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
  text-align: left;
}

.navbar-name {
  margin-top: 5px;
  margin-bottom: 0;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height, or 172% */

  text-align: left;

  color: #3a3d42;
}

.navbar-phone {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  padding-bottom: 15px;
  /* identical to box height, or 185% */

  color: rgba(58, 61, 66, 0.9);
}

.navbar-notification {
  padding-top: 23px;
  font-size: 23px;
  justify-content: center;
}

.left-detail {
  padding-left: 40px;
}

.transaction-nominal {
  margin: 25px 0;
  margin-left: 10px;

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height */

  text-align: center;

  color: #1ec15f;
}

.transaction-nominal-minus {
  margin: 25px 0;

  margin-left: 10px;

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height */

  text-align: center;

  color: #ff5b37;
}
</style>
