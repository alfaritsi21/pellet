<template>
  <div>
    <form
      v-if="isContinue === false"
      @submit.prevent="onContinue"
      class="sub-select-receiver"
    >
      <h6>Transfer Money</h6>
      <div class="transfer-to-receiver">
        <img src="../../../assets/image/propict.png" alt="" />
        <h6>Momo Taro</h6>
        <p>+62 812-4343-6731</p>
      </div>
      <p class="cc">
        Type the amount you want to transfer and then press continue to the next
        steps.
      </p>
      <input class="amount" type="number" placeholder="0.00" />
      <h6 class="aa">Rp.120.000 Available</h6>
      <div class="notes">
        <img src="../../../assets/image/edit-2.png" alt="" />
        <input type="text" placeholder="Add some notes" />
      </div>
      <div class="button">
        <button class="xx" type="submit">Continue</button>
        <img @click="onBack(1)" src="../../../assets/image/back.png" alt="" />
      </div>
    </form>
    <div v-if="isContinue === true" class="confirmation">
      <div v-if="isStatus === false">
        <h6 class="re">Transfer To</h6>
        <div class="transfer-to-receiver">
          <img src="../../../assets/image/propict.png" alt="" />
          <h6>Momo Taro</h6>
          <p>+62 812-4343-6731</p>
        </div>
        <hr />
        <h6>Details</h6>
        <div class="detail">
          <p>Amount</p>
          <h6>Rp.100.000</h6>
          <p>Balance Left</p>
          <h6>Rp.20.000</h6>
          <p>Date & Time</p>
          <h6>May 11, 2020 - 12.20</h6>
          <p>Notes</p>
          <h6>For buying some socks</h6>
        </div>
        <hr />
        <div class="button2">
          <button @click="onContinue2" class="yy" type="button">
            Continue
          </button>
          <img @click="onBack(2)" src="../../../assets/image/back.png" alt="" />
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
          <h6>Rp.100.000</h6>
          <p>Balance Left</p>
          <h6>Rp.20.000</h6>
          <p>Date & Time</p>
          <h6>May 11, 2020 - 12.20</h6>
          <p>Notes</p>
          <h6>For buying some socks</h6>
        </div>
        <hr />
        <h6 class="re">Transfer To</h6>
        <div class="transfer-to-receiver">
          <img src="../../../assets/image/propict.png" alt="" />
          <h6>Momo Taro</h6>
          <p>+62 812-4343-6731</p>
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
          <div v-for="(item, index) in 6" :key="index" class="sub-rowPin">
            <input maxlength="1" type="text" />
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
      isPin: false,
      isStatus: false,
      statusSuccess: null,
      statusResponse: 'success'
    }
  },
  computed: {
    ...mapGetters(['isContinue'])
  },
  methods: {
    ...mapActions(['throwSelectTrigger', 'throwContinue']),
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
      this.isPin = false
      this.isStatus = true
      if (this.statusResponse === 'success') {
        this.statusSuccess = true
      } else {
        this.statusSuccess = false
      }
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
