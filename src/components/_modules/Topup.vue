<template>
  <div class="topup">
    <div class="sub-topup-1">
      <h5>How To Top Up</h5>
    </div>
    <div class="sub-topup-2">
      <div>
        <h6>
          1
          <p>Go to the nearest ATM or you can use E-Banking.</p>
        </h6>
        <h6>
          2
          <p>Type your security number on the ATM or E-Banking.</p>
        </h6>
        <h6>
          3
          <p>Select “Transfer” in the menu.</p>
        </h6>
        <h6>
          4
          <p>Type the virtual account number that we provide you at the top.</p>
        </h6>
        <h6>
          5
          <p>Type the amount of the money you want to top up.</p>
        </h6>
        <h6>
          6
          <p>Read the summary details.</p>
        </h6>
        <h6>
          7
          <p>Press transfer / top up.</p>
        </h6>
        <h6>
          8
          <p>You can see your money in Zwallet within 3 hours.</p>
        </h6>
      </div>
    </div>
    <a href="#" @click="topupNow(1)">Top up</a>
    <div v-if="isTopUp === true" class="topUp-modal">
      <div class="sub-topUp-Modal">
        <h5 @click="topupNow(2)">X</h5>
        <div class="inputAmount">
          <input type="number" placeholder="0.00" v-model="nominal" />
        </div>
        <p>Type the amount you want to top up and then press top up now.</p>
        <div class="btna">
          <button @click="onTopUp(1)" type="button">Top Up Now</button>
        </div>
        <div v-if="validation === true" class="pinCheck">
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Transfer',
  data() {
    return {
      pin: [],
      validation: false,
      nominal: '',
      isTopUp: false
    }
  },
  components: {},
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    ...mapActions(['topup', 'cekPin']),
    onTopUp(val) {
      if (val === 1) {
        this.validation = true
      } else {
        const pin = this.pin.join('')
        this.cekPin(this.userData.user_id)
          .then(result => {
            if (result === Number(pin)) {
              this.topup([pin, this.nominal, this.userData])
                .then(response => {
                  this.$bvToast.toast(response.msg, {
                    title: 'Success',
                    variant: 'success',
                    solid: true
                  })
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
              this.$bvToast.toast('Invalid pin, please try again', {
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
    },
    topupNow(val) {
      if (val === 1) {
        this.isTopUp = true
      } else {
        this.isTopUp = false
      }
    }
  }
}
</script>

<style src="../../assets/css/Topup/Topup.css"></style>
