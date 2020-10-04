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
            <b-col class="navbar-profile">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                class="navbar-image"
              />
              <div class="navbar-detail">
                <p class="navbar-name">Chris Evans</p>
                <p class="navbar-phone">Transfer</p>
              </div>
              <p class="transaction-nominal">+Rp.50.000</p>
            </b-col>
            <b-col class="navbar-profile">
              <img
                src="https://logodix.com/logo/69184.jpg"
                alt=""
                class="navbar-image"
              />
              <div class="navbar-detail">
                <p class="navbar-name">Netflix</p>
                <p class="navbar-phone">Subscription</p>
              </div>
              <p class="transaction-nominal-minus">-Rp.149.000</p>
            </b-col>
            <b-col class="navbar-profile">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                class="navbar-image"
              />
              <div class="navbar-detail">
                <p class="navbar-name">Chris Evans</p>
                <p class="navbar-phone">Transfer</p>
              </div>
              <p class="transaction-nominal">+Rp.50.000</p>
            </b-col>
            <b-col class="navbar-profile">
              <img
                src="https://logodix.com/logo/69184.jpg"
                alt=""
                class="navbar-image"
              />
              <div class="navbar-detail">
                <p class="navbar-name">Netflix</p>
                <p class="navbar-phone">Subscription</p>
              </div>
              <p class="transaction-nominal-minus">-Rp.149.000</p>
            </b-col>
            <b-col class="navbar-profile">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQEBAVFRUVFRUVFQ8VDxUVFRUVFRUWFhUVFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAPFi0dIBkrLSstLS0rLSstLSstLS0rKystLS0tLS0rLSstLSstKystLS0tLS0tLSstLTctLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUGBwj/xAA+EAACAQIDBQUFBQcEAwEAAAAAAQIDEQQhMQUSQVFhBiJxgbETMpHB8AczodHhFBUjUnKCkkKisvFDYmMk/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAIBEBAQEBAAIDAQADAAAAAAAAAAECERIxAyFBYQQyUf/aAAwDAQACEQMRAD8A82GIZo5AAMAGhIYDAAAAAhVrxirykl6/ACZGpWjH3pJeZpsXtCUnaMt2PTJvxZUt1ObpeN1U2pTWl34K3qYv3t/83/kauwJMnlTjcw2nB6pryv6FunVjJXi0/A51IsUVo72fB6fiPI43oFahWkspr+75lk7l6gEMChCJCIEAAwEAAAhDABAAwEACuBJDIpkgAAGAAOxpMfjHKTinaKytz8RbwWMVtOzcYJf1N+iNZOTbu7vrqJDSM7eukbeY1BE9wkqb1IIxgTULPMy0qTempOVCSz5/TQEfZtK+sfxXj9cDLBq1rXi9V81yeviTdBxjvfFc1lf66GSGGcrJKzauutsvmviRV/B4ZNKDd4tb0ZfJ9c0VauHnSna+Wub1XgZ9jVd2sk804SuuqjO/11L+OoKTi9bLd5XfBvyay5kl5TjUfvGPJluE01dFDHYRrNdbcPr9SGAr7itJ8TTOnNjZsBiNEIBiIEAxAIRIQCAdgAxgAEDQ0JAUTGQGmBV2li9yO6tZadFzNHfoXtr/AHn9q+ZTijirE4pfoZqdBsKFO7N3haCRxa6k6oUcDJ8DNHZ8kn3dfw8Dd4ekbfA4FSaucXTSYcngqTi7SjyenFa/P4mzqYONSEor3lLeSstGr28s/U7elsGnLVedi/hOzlO/pkc+a+DzvB4D+G4vlq1lyt+DZGOElB0+62lJ28Go/DNHreG7L08pculrGSHZOk3nlbT/AKJ5p4PHqmzX7Z+yTa7+7ZcJb2fhmX1gZxgm4vK7dlwsl+f4HsOG7P0ILKK8RYnYdF8PFaI58668HiWKpxku8nfgtPL9DntpUt2VuPK2R6d2t7PTo1FOm7xfDivBnn/aXBVN+6926TsrNX0uvma4vWWpxmo+5HhksnqMIRskuWQz0syABAAhiABDEAAAAYhkRkDGRACQ7kUSKNLtR/xH4L0K8UXdr07SUuat8CnAzqxsMDC7N1h0avAqyNnQZnWuWxw8ToNmvQ0lBG82TB3OK0jrMHHum0wVOzRrNnyNxhX3jN3WzpxLFKnkRoNWLFOWZ046j+zmOpRNijFUgSwmnNbd2cqtKUONm4vqjxXtI5R1Vmm1424H0Bi42PHftAwffmksmt5ckxi8qbnZ1x8ZXSa45gYMBK9NX4XRnPdHmIBgBEB2ACIDEwEAwAw3FcQEErgIEBJMdxDArbTjem3yaZqqbNxjvu5eBponOlja4Vl+hLM12Glki7CRnWkdDhWm0dNs5q10cRhcal1ZvcBtuOSat1MtStJqO92dobik0uGZy+ytt0Xk5I6CnXTWXjczafVbSjVLNGszW4auZaOKinZu3MvU43NOq7EpVCjT2pQt95G/9QS2hRdrTjnw3ldlcljMzzXtyleSfGLy4fWZ6PiZZZHlv2nVd2cUnrF38DnM+11/q8/wcbR836mcx4f3V8fiZLn0J6eSkAXFcoAYrhcgLCGRuAwFcAK1wAEQMYhgMYgAjWV01zRpGrOxsca5KUWn9Iw4lJ97icW/bvn0zYXQsJNvMxYSOSNrTw91c4tdSMCw0NXJ/EJUopd2o4+Mor1YVcLKT4pc1qbrZHZ2lN5Sle902nllb/S+8s9COuf8jQKdaDvvXXCV00+OTWR2nZTtJJyVObfLMobQ2BCkowp7rmrucm2vaJvNSTXwZqY0tysnF8dehzqSrOx7lgk5U95HDdpsZiVKShdJcvzPROyaf7Mm1nZehre1GyqsqbnRScru90rL/wBnfl9aGMafx5LRxddy953vxjN+i9Dp9jxrSdt+m2ldK7jL4NaFXF9k41KitKUn3W3KonK695Wcbbr6G52X2OrQhFwk9/2km4+0vT3X7u4kv4clzVlnazWmvj9OeXvHSbKjWjZT8Gt5NeKOF+1GP8aFlduDXk7npWBw04xW+u8la/P9TT4nZtOrjqXtIbyVObUebjKNlb+4yl5Vuezjx7FYCrRahVg4vdTSfFc0YDte3FSVWkqs4pSjXlCMUrbsJRbUfLcOKPb8evLPXn+THhqwgGI7cAQAAmIYAACGBUGIZAxiABjAAK+Ltl0uylOfAvYpZL4FRKzuZ320npZwstDptlxUsmclh5HQbPq2tYz27xXVYbZMHmXnSjSXddmU9l4u+Rnx1VNGMt625Gq2lK93nd6u5pYW9pF8mjY7Tq2i2zTqTTTaNJ9uK9/7M4lSoq38q9DZSgpKz4nH9iMQ5UorodS6m7rpfXkZd474wfuyF72SL9KmkrXYLNZO4vZvU67XPEMRpc53E4tU8VRfSor8rqOZ0OKfdscrVpupilZX3Iq+Wm89f9plfbTM6537SVu0bWyliItPwpSb/wCR52d79rOIvWpU08lGU357sE/9j+JwJ7vhnMR5fnvd0AAjVkYgAAEMAFYYhgUxiQyAGIYDAQwI1I3VilNcC+jFUw93dO3PI51OupVKg8zb4aZp4q0rdTaYYz07y32CxW6Xf2tvM0dG9jNUxKivkZcaysG2sTK8eSd2UpbUje1tOenxLFXF8fwMFHAOo81q7Za9TqfTm/fp6Z9n3aOit2Emk8la9rna/veNWrKlCEnbWag/Zx6Obyb6K7PJsPgKVFRhGCukm5Z70pPgm/kdPgMdUp3nDJZZZ6ZXyXjbzMtca5ro6u1KmGqJSvuPJPqdJhdqRnG+VmcZtTHRnDdno7eKfNciWw6kkt2+hx5cWzrqMZXu8jWbESdXES470Ip9FFd1eZiqYhp316fM5LH9rv2ZVqUIt1ZybjPhC6te3PUYl1fpLZn25vtrtFV8bUlF92NqcfCGTf8AlvGhGxH0ZOTjx29vQMQFQxAADEAAAAAFNDACAAAABiABkokSUQNXXym/E2GDnkUMX7zfUng6nAy00jf06mXlcoYydkm/iXMAk7L6zNhi9nNQ3uGatl55Gfpp7c9h8TT4u75I6XYWN76VPDznJ2aSWtradDRU6MU77q8DsezNVU5RnRlZpZJ5+N7+HMa47xi3039OhiZ3mtnS3qazjKS5Xdlx/UsVcfiaCc6+BkoWTlJWeTeX4svfv/HJOzp3kspKFmskuMnn9WJKlXrL/wDTVdRvd/hK26t13i3GKUb3b4X05K2fI0md/vI4vavarD1XBUVNNu8t6nKKTumleXS50vZrEOcJSeuWVuZl7T9nYTw6tFKUXvNpLV2VvT4mDsvLdpOOjvl1SXXXO5xqTn059Vs8RNQTbeT16aM8n2xiN+vOXV28OH4HoHaDaW5Rm/8AVJWWd7PKzT+LPMnLibf42fdY/NfUACbC562BgJDAYCABiATYDAjcAKwABACBiAYyIwGFSooxbfAhUnupt8DTVqspO8mS1VqMt6N3r8zCnYjh6lnZ6My1o8Th0vYLGtWzOjwWM313pO9srvKxxUJ2NrsrFpPP0vc5sXNb7E4GcWmlrn48i1gatldqzvpw8jZYHbcJQVOUE8sm8rdLvgWsDRp1MrJc3lp0Mba3n8p4THru/m8ranXbFrzmk4RtFq7k/Q12zdnUlbuWXDjn68TcwxXs4WyUdfd8HfL5t+Jxeu/K/tZ9pu1KWeqte6zuvFHJTxSpxm43ySTsn5Zfh9WNptfaKcW3Lda0Vu9y7yvn8rM4XbO2J7zSk7N6eCtZ5Kzz87dDrOO/TLWlDa+0ZVG4Xuk9eF+JrBtiPZnPjOPPb2gBBc6RJDIXJIBoABsAuRYNkbgMBXACuFxNiuQMQgIJXHcwzrRWr8iriMQ5ZLJeoUsXX3nZaL8epWnEkhkGAz0qvB/ExNWYmiKzVIihKzIQq8GTsRWxw2Naz5eumR0WyduqPvLPn6fD5HGIz0qzRzc9WWx6Vhu1f9t87P8AMMd2jcvdlnpnbLK+fC/5vmcJgYVqst2EW27cMv8Ar8js9kdg6s2pYiraP8sEm/8AJmdkz7rSd1+KtPFVsTOFOlfebabtpd23r+b+mPthgYYedKhF3koOc52s5SnK3wW7ZLkeh7J2VSw63aUEkuOsm+bfHVnmfbzFb20qmeUIU4Pxs5P/AJF+PXdJvPMtSArgelgYgEAySIhcCYmRuFyguIBEDEAgK1wMTqLxMNSq3xt0RFWKlZL8ipVxEn0RFvkLdIIXGDjmhuICaAYWAxzQkZt0xyhZ2AjujgrEkjJFDg2GAwMKq7srS/keXw5myp7LUM5R83+Zo4NrNHQbM23luVVeOm9xXiuPr4nGs38aZ1P11uwaVN2at4nZYeass+BwGwopT3oO8XyeR2uEmmkeXXt6M+m1nOMYOUnZJOTfJJHgmPxbr16td/8AknKS/pv3V/ikdx9oHaZODwVCV9776a4R/kv14nAPJeB6Phxz7rH5tfkJVHHR+RZp17lZ5ohFmzBsFIZVjMmptFGcRjjVJqQEhXEADuIBAO4guAGmcmCQJEkjlRYkkNIlFFGOa08UWpUbmCos4rqXkBUdAj7IuMxyQGCMMx4qleN1qvQyJEt7P8ANdFk0OtDdk15rwIogsU2ZYoqxZmjMo2uytpVKE96LuuMHo/yfU3m1u2LdJU6CcXJd58V0T+Zy2Gg5y3VpxZbns6LzUpb3CXD4HGs5t7Xedak5FRR55t5t8xTCpGUJOE1aS4c/y8BM0jhgwk7q3JmWcbFKMt2o11NgldEEIsyRlzMWhK4RkYXIRkTKDfZJVuZFkWgM0aiehIqSVs0Z6c7gZAEAGrUSdgGiKEicUQiZIoIg/fj5suFH2u7Ntp2tZMswrxejQVlItDC4RCWSMaJvmQkBDERur8V6Fctrlz+ZTT1T1WTCpIk3+pjuKusly+YGTCY1qXTSx0WFquom7LK2iS4O2S8Hn0OQvnc3Wwa3fUZSsm9Wm0utlmcVWPb8mpxd8/PIjRqbyuZdu0rzy4JGsw1TddnozrP0VlxdPO64/ItYOpdGOstHyfrkzHhXuycepf1F+pC5guWLmOcQiKHG4rCu3p8QMyYzHBWJpgFjDTyk15ozletlJPyAz+0ERuAFYYAFESVT3WAARXu+RRr6gBKRtaPu/AnIAKiMiEtAABfXoVKv3rGAUlqxv3PMAIKj+aL+yvfQAc1Wy2t76/pXqzSYn3vMAL+FW6nueRil94/IQHVRsEIACMVUyRAABDQAAzBieHiABWQAAI//2Q=="
                alt=""
                class="navbar-image"
              />
              <div class="navbar-detail">
                <p class="navbar-name">Chris Evans</p>
                <p class="navbar-phone">Transfer</p>
              </div>
              <p class="transaction-nominal">+Rp.50.000</p>
            </b-col>
            <b-col class="navbar-profile">
              <img
                src="https://logodix.com/logo/69184.jpg"
                alt=""
                class="navbar-image"
              />
              <div class="navbar-detail">
                <p class="navbar-name">Netflix</p>
                <p class="navbar-phone">Subscription</p>
              </div>
              <p class="transaction-nominal-minus">-Rp.149.000</p>
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
  },
  computed: {
    ...mapGetters(['userData', 'getUserData2'])
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
      'getExpensePerDay'
    ]),
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
        .then((response) => {
          this.weeklyIncome = response[0].income
        })
        .catch((err) => {
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
        .then((response) => {
          this.weeklyExpense = response[0].expense
        })
        .catch((err) => {
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
        .then((response) => {
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
        .catch((error) => {
          console.log(error)
        })
        .catch((err) => {
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
        .then((response) => {
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
        .catch((error) => {
          console.log(error)
        })
        .catch((err) => {
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
