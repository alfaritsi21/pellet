<template>
  <div>
    <form
      v-if="isContinue === false"
      @submit.prevent="onContinue"
      class="sub-select-receiver"
    >
      <div class="button">
        <img @click="onBack(1)" src="../../../assets/image/back.png" alt="" />
      </div>
      <h6 class="transfer-money">Transfer Money</h6>
      <div class="transfer-to-receiver">
        <img :src="`${urlApi}${getReceiverData.user_img}`" alt="" />
        <h6>
          {{
            getReceiverData.first_name.length === 0
              ? getReceiverData.user_name
              : getReceiverData.first_name + ' ' + getReceiverData.last_name
          }}
        </h6>
        <p>+62 {{ getReceiverData.user_phone.substring(1) }}</p>
      </div>
      <p class="cc">
        Type the amount you want to transfer and then press continue to the next
        steps.
      </p>
      <div class="input-value-container">
        <input
          class="amount"
          type="number"
          placeholder="0.00"
          v-model="nominal"
        />
        <h6 class="aa">Rp.{{ getUserData2.user_saldo }} Available</h6>
        <div class="notes">
          <img src="../../../assets/image/edit-2.png" alt="" />
          <input type="text" placeholder="Add some notes" v-model="notes" />
        </div>
      </div>

      <div class="button">
        <button class="xx" type="submit">Continue</button>
      </div>
    </form>
    <div v-if="isContinue === true" class="confirmation">
      <div v-if="isStatus === false">
        <b-row>
          <b-col cols="1">
            <img
              class="back-img"
              @click="onBack(2)"
              src="../../../assets/image/back.png"
              alt=""
            />
          </b-col>
          <b-col cols="2"> <h6 class="re">Transfer To</h6> </b-col>
        </b-row>

        <div class="transfer-to-receiver">
          <img :src="`${urlApi}${getReceiverData.user_img}`" alt="" />
          <h6>
            {{
              getReceiverData.first_name.length === 0
                ? getReceiverData.user_name
                : getReceiverData.first_name + ' ' + getReceiverData.last_name
            }}
          </h6>
          <p>+62 {{ getReceiverData.user_phone.substring(1) }}</p>
        </div>
        <hr />
        <h6>Details</h6>
        <div class="detail">
          <p>Amount</p>
          <h6>Rp.{{ nominal }}</h6>
          <p>Balance Left</p>
          <h6>Rp.{{ getUserData2.user_saldo - nominal }}</h6>
          <p>Date & Time</p>
          <h6>{{ new Date() }}</h6>
          <p>Notes</p>
          <h6>{{ notes }}</h6>
        </div>
        <hr />
        <div class="button2">
          <button @click="onContinue2" class="yy" type="button">
            Continue
          </button>
        </div>
      </div>
      <div v-if="isStatus === true" class="status">
        <div v-if="statusSuccess === true" class="statusSuccess">
          <img class="v" src="../../../assets/image/success.png" alt="" />
          <h6 class="vp">Transfer Success</h6>
        </div>
        <div v-if="statusSuccess === false" class="statusSuccess">
          <img class="v" src="../../../assets/image/failed.png" alt="" />
          <h6 class="vp">Transfer Failed</h6>
          <p class="nn">
            We can’t transfer your money at the moment, we recommend you to
            check your internet connection and try again.
          </p>
        </div>
        <div class="detail">
          <p>Amount</p>
          <h6>Rp.{{ nominal }}</h6>
          <p>Balance Left</p>
          <h6>Rp.{{ getUserData2.user_saldo - nominal }}</h6>
          <p>Date & Time</p>
          <h6>{{ new Date() }}</h6>
          <p>Notes</p>
          <h6>{{ notes }}</h6>
        </div>
        <hr />
        <h6 class="re">Transfer To</h6>
        <div class="transfer-to-receiver">
          <img :src="`${urlApi}${getReceiverData.user_img}`" alt="" />
          <h6>
            {{
              getReceiverData.first_name.length === 0
                ? getReceiverData.user_name
                : getReceiverData.first_name + ' ' + getReceiverData.last_name
            }}
          </h6>
          <p>+62 {{ getReceiverData.user_phone.substring(1) }}</p>
        </div>
        <hr />
        <div class="button3">
          <button
            v-if="statusSuccess === true"
            @click="backToHome(0)"
            class="ww"
            type="button"
          >
            Back to Home
          </button>
          <button
            v-if="statusSuccess === false"
            @click="backToHome(1)"
            class="ww"
            type="button"
          >
            Try Again
          </button>
          <div v-if="statusSuccess === true" class="downloadPdf">
            <img src="../../../assets/image/download.png" alt="" />
            <p>Download PDF</p>
          </div>
          <div v-if="statusSuccess === true" class="share">
            <img src="../../../assets/image/share-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="isPin === true" class="pinConfirmation">
      <div class="pinInput22">
        <img @click="onExit" src="../../../assets/image/x.png" alt="" />
        <button @click="pinContinue" type="button">Continue</button>
        <div class="rowPin">
          <div class="sub-rowPin">
            <input maxlength="1" type="text" v-model="pin[0]" />
          </div>
          <div class="sub-rowPin">
            <input maxlength="1" type="text" v-model="pin[1]" />
          </div>
          <div class="sub-rowPin">
            <input maxlength="1" type="text" v-model="pin[2]" />
          </div>
          <div class="sub-rowPin">
            <input maxlength="1" type="text" v-model="pin[3]" />
          </div>
          <div class="sub-rowPin">
            <input maxlength="1" type="text" v-model="pin[4]" />
          </div>
          <div class="sub-rowPin">
            <input maxlength="1" type="text" v-model="pin[5]" />
          </div>
        </div>
        <p>
          Enter your 6 digits PIN for confirmation to continue transferring
          money
        </p>
        <h4>Enter PIN to Transfer</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SelectUser',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      isPin: false,
      isStatus: false,
      statusSuccess: null,
      statusResponse: 'success',
      nominal: '',
      notes: '',
      pin: []
    }
  },
  computed: {
    ...mapGetters(['isContinue', 'getReceiverData', 'userData', 'getUserData2'])
  },
  created() {
    this.getUserData()
  },
  methods: {
    ...mapActions([
      'throwSelectTrigger',
      'throwContinue',
      'cekPin',
      'transfer'
    ]),
    getUserData() {
      this.cekPin(this.userData.user_id)
    },
    onBack(value) {
      if (value === 1) {
        this.throwSelectTrigger(false)
      } else {
        this.throwContinue(false)
      }
    },
    onContinue() {
      this.throwContinue(true)
    },
    onContinue2() {
      this.isPin = true
    },
    onExit() {
      this.isPin = false
    },
    pinContinue() {
      const pin = this.pin.join('')
      this.cekPin(this.userData.user_id)
        .then((result) => {
          if (result === Number(pin)) {
            if (this.getUserData2.user_saldo >= this.nominal) {
              this.transfer([
                this.userData.user_id,
                this.getReceiverData.user_id,
                this.nominal,
                this.notes
              ])
                .then((response) => {
                  this.$bvToast.toast('Transfer Success', {
                    title: 'Success',
                    variant: 'success',
                    solid: true
                  })
                  this.isPin = false
                  this.isStatus = true
                  this.statusSuccess = true
                })
                .catch((error) => {
                  this.$bvToast.toast(error.data.msg, {
                    title: 'Warning',
                    variant: 'danger',
                    solid: true
                  })
                  this.isPin = false
                  this.isStatus = true
                  this.statusSuccess = false
                })
            } else {
              this.$bvToast.toast('Your balance is not sifficient', {
                title: 'Warning',
                variant: 'danger',
                solid: true
              })
              this.isPin = false
              this.isStatus = true
              this.statusSuccess = false
            }
          } else {
            this.$bvToast.toast('Incorrect pin number, please try again', {
              title: 'Warning',
              variant: 'danger',
              solid: true
            })
            this.isPin = false
            this.isStatus = true
            this.statusSuccess = false
          }
        })
        .catch((err) => {
          this.$bvToast.toast(err.data.msg, {
            title: 'Warning',
            variant: 'danger',
            solid: true
          })
          this.isPin = false
          this.isStatus = true
          this.statusSuccess = false
        })
    },
    backToHome(value) {
      if (value === 0) {
        this.statusSuccess = null
        this.isStatus = false
        this.isPin = false
        this.throwSelectTrigger(false)
        this.throwContinue(false)
      } else {
        this.isStatus = false
      }
    }
  }
}
</script>

<style src="../../../assets/css/Transfer/select_user.css"></style>
