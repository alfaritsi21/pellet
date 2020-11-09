<template>
  <div>
    <div class="text">
      <h6>
        <b>Select Top Up Nominal</b>
      </h6>
    </div>
    <div v-if="midtrans === false" class="manual-topup">
      <div class="select-topup">
        <b-form @submit.prevent="onTopUp(1)">
          <input
            v-model="nominal"
            type="number"
            min="1000"
            placeholder="0.00"
          />
          <b-button type="submit">Top Up Now</b-button>
        </b-form>
      </div>
      <div class="howto-topup">
        <p v-b-modal.modal-topup>
          <b>How To Top Up ?</b>
        </p>
      </div>
      <b-modal id="modal-topup" title="How To Top Up">
        <div class="card">
          <span>1</span> Go to the nearest ATM or you can use E-Banking.
        </div>
        <div class="card">
          <span>2</span> Type your security number on the ATM or E-Banking.
        </div>
        <div class="card"><span>3</span> Select “Transfer” in the menu</div>
        <div class="card">
          <span>4</span> Type the virtual account number that we provide you at
          the top.
        </div>
        <div class="card">
          <span>5</span> Type the amount of the money you want to top up.
        </div>
        <div class="card"><span>6</span> Read the summary details</div>
        <div class="card"><span>7</span> Press transfer / top up</div>
        <div class="card">
          <span>8</span> You can see your money in Pellet within 3 hours.
        </div>
      </b-modal>
      <div v-if="validation === true" class="topup">
        <div class="topUp-modal">
          <div class="sub-topUp-Modal">
            <div class="pinCheck">
              <h4>Please input your pin number</h4>
              <div class="rowPin2">
                <div class="sub-rowPin2">
                  <input v-model="pin[0]" maxlength="1" type="text" />
                </div>
                <div class="sub-rowPin2">
                  <input v-model="pin[1]" maxlength="1" type="text" />
                </div>
                <div class="sub-rowPin2">
                  <input v-model="pin[2]" maxlength="1" type="text" />
                </div>
                <div class="sub-rowPin2">
                  <input v-model="pin[3]" maxlength="1" type="text" />
                </div>
                <div class="sub-rowPin2">
                  <input v-model="pin[4]" maxlength="1" type="text" />
                </div>
                <div class="sub-rowPin2">
                  <input v-model="pin[5]" maxlength="1" type="text" />
                </div>
              </div>
              <div class="btna">
                <button @click="onTopUp(2)" type="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="midtransBtn" href="#" @click="topupMidtrans"
        >Top up with midtrans</a
      >
    </div>
    <div v-if="midtrans === true" class="midtrans-topup">
      <a v-if="midtransSuccess === true" :href="link" target="_blank">
        <button
          @click="onLinkMidtrans"
          class="bn3"
          type="button"
          style="color: white"
        >
          Click Here
        </button>
      </a>
      <!-- <input
        class="bn1"
        type="text"
        placeholder="input your top up id"
        v-model="form.id_topup"
      /> -->
      <input
        class="bn2"
        min="5000"
        type="number"
        placeholder="nominal Rp. 0.00"
        v-model="form.nominal"
      />
      <button
        v-if="isMidtransSubmit === true"
        class="bn3"
        type="button"
        @click="midtransSubmit"
      >
        Submit
      </button>
      <a class="midtransBtn2" href="#" @click="cancelMidtrans">cancel</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import io from 'socket.io-client'
export default {
  data() {
    return {
      socket: io(process.env.VUE_APP_URL),
      // socket: io('http://127.0.0.1:3001'),
      pin: [],
      validation: false,
      nominal: '',
      midtrans: false,
      form: {
        id_topup: '',
        nominal: ''
      },
      midtransSuccess: false,
      link: '',
      isMidtransSubmit: true
    }
  },
  computed: {
    ...mapGetters(['userData', 'getUserData2'])
  },
  methods: {
    ...mapActions([
      'topup',
      'cekPin',
      'weeklyHistory',
      'getIncomeTotal',
      'getExpenseTotal',
      'getIncomePerDay',
      'getExpensePerDay',
      'midtransPayment',
      'topupPayment'
    ]),
    onTopUp(val) {
      if (Number(this.nominal) >= 5000) {
        if (val === 1) {
          this.validation = true
        } else {
          const pin = this.pin.join('')
          this.cekPin(this.userData.user_id)
            .then(result => {
              if (result === Number(pin)) {
                this.topup([pin, this.nominal, this.getUserData2])
                  .then(response => {
                    this.$bvToast.toast(response.msg, {
                      title: 'Success',
                      variant: 'success',
                      solid: true
                    })
                    this.weeklyHistory(this.userData.user_id)
                    this.cekPin(this.userData.user_id)
                    this.socket.emit('notification', response.data)
                    this.nominal = ''
                    this.pin = []
                    this.validation = false
                  })
                  .catch(error => {
                    this.$bvToast.toast(error.data.msg + ' please try again', {
                      title: 'Warning',
                      variant: 'danger',
                      solid: true
                    })
                    this.nominal = ''
                    this.pin = []
                    this.validation = false
                  })
              } else {
                this.$bvToast.toast('Invalid pin number, please try again', {
                  title: 'Warning',
                  variant: 'danger',
                  solid: true
                })
                this.nominal = ''
                this.pin = []
                this.validation = false
              }
            })
            .catch(err => {
              this.$bvToast.toast(err.data.msg, {
                title: 'Warning',
                variant: 'danger',
                solid: true
              })
              this.nominal = ''
              this.pin = []
              this.validation = false
            })
        }
      } else {
        this.$bvToast.toast('Minimum top up Rp. 5000', {
          title: 'Warning',
          variant: 'danger',
          solid: true
        })
      }
    },
    midtransSubmit() {
      this.topupPayment([this.form.nominal, this.getUserData2])
        .then(result => {
          this.form.id_topup = result.data.topup_code
          this.midtransPayment([this.form, this.$bvToast])
            .then(result => {
              this.$bvToast.toast('Open link below to continue your payment', {
                title: 'Payment bill created',
                variant: 'info',
                solid: true
              })

              console.log(result)
              this.link = result.pagination
              this.midtransSuccess = true
              this.isMidtransSubmit = false
            })
            .catch(err => {
              console.log(err)
            })
          this.form.nominal = ''
          this.form.id_topup = ''
        })
        .catch(err => {
          this.$bvToast.toast(err.data.msg, {
            title: 'Warning',
            variant: 'danger',
            solid: true
          })
        })
    },
    topupMidtrans() {
      this.midtrans = true
    },
    cancelMidtrans() {
      this.midtrans = false
    },
    onLinkMidtrans() {
      setTimeout(() => {
        this.link = ''
        this.midtransSuccess = false
      }, 60000)
      this.isMidtransSubmit = true
    }
  }
}
</script>
<style src="../../assets/css/Topup/Topup.css"></style>
<style scoped>
.card {
  margin-bottom: 10px;
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  color: #7a7886;
}
div .card span {
  color: #6379f4;
  padding-right: 20px;
  padding-left: 20px;
}
div.a {
  text-align: left;
  color: #7a7886;
  font-size: 16px;
}
button {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  background: #6379f4;
}
.select-topup {
  margin-bottom: 10px;
  width: 50%;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  text-align: left;
  position: relative;
  left: 25%;
  top: 100px;
}
input {
  text-align: center;
  width: 100%;
  border: 3px solid rgba(169, 169, 169, 0.6);

  border-radius: 5px;
  background: linear-gradient(
      rgba(169, 169, 169, 0.4),
      rgba(169, 169, 169, 0.4)
    )
    center bottom 5px / calc(100% - 10px) 2px no-repeat;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input:focus {
  outline: none;
}
.howto-topup {
  width: 50%;
  align-items: center;
  color: #6379f4;
  position: relative;
  top: 125px;
  left: 44%;
  font-size: 12px;
}
.text {
  text-align: left;
}
.manual-topup {
  position: relative;
  height: 450px;
}
.midtransBtn {
  position: absolute;
  bottom: 0;
  right: 20px;
  padding: 5px 0;
  font-size: 12px;
  color: #6379f4;
  border-radius: 5px;
}
.midtrans-topup {
  height: 430px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 100px;
}
.midtransBtn2 {
  position: absolute;
  bottom: 0;
  left: 0px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: #6379f4;
}
.bn1,
.bn2,
.bn3 {
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 10px 0;
  width: 300px;
  border-radius: 10px;
}
.bn3 {
  color: white;
}

@media (max-width: 768px) {
  .bn1,
  .bn2,
  .bn3 {
    width: 250px;
  }
}
@media (max-width: 576px) {
  .bn1,
  .bn2,
  .bn3 {
    width: 150px;
  }
  .howto-topup {
    top: 125px;
  }
  .select-topup button {
    font-size: 12px;
  }
}
</style>
