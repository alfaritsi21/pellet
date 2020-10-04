<template>
  <b-container fluid class="top-container">
    <!-- ===============BALANCE================== -->
    <b-row align-h="between" class="balance-container">
      <b-col md="5" class="balance-detail">
        <p class="balance-text">Balance</p>
        <p class="balance-nominal">Rp {{ getUserData2.user_saldo }},00</p>
        <p class="balance-phone">
          {{ getUserData2.user_phone }}
        </p>
      </b-col>
      <b-col md="4" class="balance-menu">
        <div>
          <b-button class="button-transfer" @click="setShowTransfer"
            ><b-row align-h="center">
              <b-col class="button-icon-transfer"
                ><b-icon class="side-notification" icon="arrow-up"></b-icon
              ></b-col>
              <b-col class="button-text-transfer"><p>Transfer</p></b-col>
            </b-row></b-button
          >
        </div>
        <div>
          <b-button class="button-transfer" @click="setShowTopup"
            ><b-row align-h="center">
              <b-col class="button-icon-transfer"
                ><b-icon class="side-notification" icon="plus"></b-icon
              ></b-col>
              <b-col class="button-text-transfer"
                ><p class="topup">Topup</p></b-col
              >
            </b-row></b-button
          >
        </div>
      </b-col>
    </b-row>
    <b-row align-h="between" class="bottom-container">
      <b-col cols="7">
        <div class="chart-container">
          <b-row align-h="between">
            <b-col cols="6">
              <b-icon icon="arrow-down" style="color: green"></b-icon>
            </b-col>
            <b-col cols="6">
              <b-icon icon="arrow-up" style="color: red"></b-icon>
            </b-col>
          </b-row>
          <b-row align-h="between">
            <b-col cols="6">
              <p class="chart-text">Income</p>
            </b-col>
            <b-col cols="6">
              <p class="chart-text">Expense</p>
            </b-col>
          </b-row>
          <b-row align-h="between">
            <b-col cols="6">
              <p class="chart-nominal">{{ formatCurrency(weeklyIncome) }}</p>
            </b-col>
            <b-col cols="6">
              <p class="chart-nominal">{{ formatCurrency(weeklyExpense) }}</p>
            </b-col>
          </b-row>
          <div class="chart">
            <line-chart
              :data="chartData"
              width="380px"
              height="230px"
            ></line-chart>
          </div>
        </div>
      </b-col>
      <b-col cols="5">
        <div class="transaction-container">
          <b-row align-h="between">
            <b-col cols="7">
              <p class="chart-nominal">Transaction History</p>
            </b-col>
            <b-col cols="3">
              <p class="transaction-see" @click="setShowTransaction">See all</p>
            </b-col>
          </b-row>
          <div class="transaction-list">
            <b-col
              v-for="(item, index) in getHistory"
              :key="index"
              class="navbar-profile"
            >
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
              <p
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
              </p>
            </b-col>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      chartData: [
        {
          name: 'Income',
          data: {
            '2020-10-01': 100000,
            '2020-10-03': 18000,
            '2020-10-04': 12000,
            '2020-10-05': 21000,
            '2020-10-06': 34000,
            '2020-10-07': 16000
          }
        },
        {
          name: 'Expense',
          data: {
            '2020-10-01': 98000,
            '2020-10-03': 22000,
            '2020-10-04': 46000,
            '2020-10-05': 26000,
            '2020-10-06': 34000,
            '2020-10-07': 16000
          }
        }
      ],
      weeklyIncome: 0,
      weeklyExpense: 0
    }
  },
  created() {
    this.cekDataUser()
    this.getWeeklyIncomeTotal()
    this.getWeeklyExpenseTotal()
    this.getWeeklyIncomePerDay()
    this.getWeeklyExpensePerDay()
    this.weeklyTransaction()
  },
  computed: {
    ...mapGetters(['userData', 'getUserData2', 'getHistory'])
  },
  components: {},
  methods: {
    ...mapMutations([
      'setShowDashboard',
      'setShowTransfer',
      'setShowTopup',
      'setShowProfile',
      'setShowTransaction'
    ]),
    ...mapActions([
      'cekPin',
      'getIncomeTotal',
      'getExpenseTotal',
      'getIncomePerDay',
      'getExpensePerDay',
      'weeklyHistory'
    ]),
    weeklyTransaction() {
      this.weeklyHistory(this.userData.user_id)
    },
    cekDataUser() {
      this.cekPin(this.userData.user_id)
    },
    getWeeklyIncomeTotal() {
      const d = new Date()
      d.setDate(d.getDate() - 7)
      const date = d.toISOString().slice(0, 10)
      const income = {
        date: date,
        user: this.userData.user_id
      }
      this.getIncomeTotal(income)
        .then(response => {
          this.weeklyIncome = response[0].income
        })
        .catch(err => {
          console.log(err)
        })
    },
    getWeeklyExpenseTotal() {
      const d = new Date()
      d.setDate(d.getDate() - 7)
      const date = d.toISOString().slice(0, 10)
      const expense = {
        date: date,
        user: this.userData.user_id
      }
      this.getExpenseTotal(expense)
        .then(response => {
          this.weeklyExpense = response[0].expense
        })
        .catch(err => {
          console.log(err)
        })
    },
    getWeeklyIncomePerDay() {
      const d = new Date()
      d.setDate(d.getDate() - 7)
      const date = d.toISOString().slice(0, 10)
      const income = {
        date: date,
        user: this.userData.user_id
      }
      this.getIncomePerDay(income)
        .then(response => {
          console.log(response)
          const incomeData = {}
          for (let index = 0; index < 7; index++) {
            const d = new Date()
            d.setDate(d.getDate() - index)
            const date = d.toISOString().slice(0, 10)
            var columnName = date
            incomeData[columnName] = 0
          }

          for (let index = 0; index < response.length; index++) {
            const d = new Date(response[index].date)
            const date = d.toISOString().slice(0, 10)
            incomeData[date] = response[index].income
          }

          console.log(incomeData)
          this.chartData = [
            {
              name: 'Income',
              data: incomeData
            },
            this.chartData[1]
          ]
          console.log(this.chartData)
        })
        .catch(error => {
          console.log(error)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getWeeklyExpensePerDay() {
      const d = new Date()
      d.setDate(d.getDate() - 7)
      const date = d.toISOString().slice(0, 10)
      const expense = {
        date: date,
        user: this.userData.user_id
      }
      this.getExpensePerDay(expense)
        .then(response => {
          console.log(response)
          const expenseData = {}
          for (let index = 0; index < 7; index++) {
            const d = new Date()
            d.setDate(d.getDate() - index)
            const date = d.toISOString().slice(0, 10)
            var columnName = date
            expenseData[columnName] = 0
          }

          for (let index = 0; index < response.length; index++) {
            const d = new Date(response[index].date)
            const date = d.toISOString().slice(0, 10)
            expenseData[date] = response[index].expense
          }

          console.log(expenseData)
          this.chartData = [
            this.chartData[0],
            {
              name: 'Expense',
              data: expenseData
            }
          ]
          console.log(this.chartData)
        })
        .catch(error => {
          console.log(error)
        })
        .catch(err => {
          console.log(err)
        })
    },
    formatCurrency(number) {
      return number.toLocaleString('ID-JK', {
        style: 'currency',
        currency: 'IDR'
      })
    }
  }
}
</script>

<style scoped>
.main-content {
  padding-right: 0;
  padding-left: 0;
}

.balance-container {
  background: #6379f4;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.balance-detail {
  /* background-color: greenyellow; */
  text-align: left;
  padding: 0 50px;
}

.balance-text {
  margin-top: 10px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* identical to box height, or 172% */

  color: #e0e0e0;
}

.balance-nominal {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  /* identical to box height */

  color: #ffffff;
}

.balance-phone {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  /* identical to box height */

  color: #dfdcdc;
}

.balance-menu {
  padding-top: 13px;
}

.button-transfer {
  background: rgba(255, 255, 255, 0.2);
  /* White */

  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  width: 142px;
  height: 37px;
  margin-bottom: 20px;
}

.button-transfer p {
  text-align: left;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  padding-left: 0;
  padding-right: 10px;
  /* identical to box height */

  /* Zwallet/White */

  color: #ffffff;
}

.topup {
  margin-right: 15px;
}

.button-icon-transfer {
  font-size: 15px;
  text-align: right;
  padding-right: 0;
}

.bottom-container {
  padding-top: 20px;
}

.chart-container {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  height: 338px;
  padding: 10px 20px;
}

.transaction-container {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  height: 338px;
  padding: 25px 20px;
}

.col-7 {
  padding-left: 0;
}

.col-5 {
  padding-right: 0;
}

.chart-text {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* identical to box height */

  color: #6a6a6a;
}

.chart-nominal {
  margin-top: -10px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height */

  /* Zwallet/Dark */

  color: #3a3d42;
}

.chart {
  width: 400px;
  height: 230px;
}

.transaction-see {
  margin-top: -10px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height */

  /* Zwallet/Dark */

  color: #6379f4;
}

.transaction-see:hover {
  cursor: pointer;
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
  margin: 25px 10px;
  font-size: 23px;
}

.transaction-list {
  height: 280px;
  overflow-y: scroll;
}

.transaction-list::-webkit-scrollbar {
  display: none;
}

.transaction-nominal {
  margin: 25px 0;
  margin-left: 10px;

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height */

  text-align: right;

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

  text-align: right;

  color: #ff5b37;
}
</style>
