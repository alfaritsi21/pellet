<template>
  <b-container fluid>
    <b-row class="text-left p-3"
      ><b-col cols="12"
        ><h3>Change PIN</h3>
        <p>
          Enter your current 6 digits Zwallet PIN below to <br />
          continue to the next steps.
        </p>
      </b-col></b-row
    >

    <b-form @submit.prevent="submit" class="containerPin">
      <input maxlength="1" type="text" v-model="pin[0]" />
      <input maxlength="1" type="text" v-model="pin[1]" />
      <input maxlength="1" type="text" v-model="pin[2]" />
      <input maxlength="1" type="text" v-model="pin[3]" />
      <input maxlength="1" type="text" v-model="pin[4]" />
      <input maxlength="1" type="text" v-model="pin[5]" />
      <b-row align-h="center" class="mt-5">
        <b-col cols="6">
          <b-button
            v-if="currentPin === true"
            block
            class="submit"
            type="submit"
            @click="onSubmit(1)"
          >
            Current pin
          </b-button>
          <b-button
            v-else
            block
            class="submit"
            type="submit"
            @click="onSubmit(2)"
          >
            Change pin now</b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      pin: [],
      currentPin: true
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    ...mapActions(['changePin', 'cekPin']),
    ...mapMutations(['setShowDashboard']),
    onSubmit(val) {
      if (val === 1) {
        const pin = this.pin.join('')
        this.cekPin(this.userData.user_id)
          .then((result) => {
            if (result === Number(pin)) {
              this.$bvToast.toast('Now please input your new pin', {
                title: 'Check pin success',
                variant: 'success',
                solid: true
              })
              this.currentPin = false
              this.pin = []
            } else {
              this.$bvToast.toast('Icorrect pin number, please try again', {
                title: 'Warning',
                variant: 'danger',
                solid: true
              })
              this.pin = []
            }
          })
          .catch((err) => {
            this.$bvToast.toast(err.data.msg, {
              title: 'Warning',
              variant: 'danger',
              solid: true
            })
            this.pin = []
          })
      } else {
        const pin = this.pin.join('')
        this.changePin([pin, this.userData.user_id])
          .then((response) => {
            this.$bvToast.toast(response, {
              title: 'Success',
              variant: 'success',
              solid: true
            })
            this.pin = []
            this.currentPin = true
            this.setShowDashboard()
          })
          .catch((error) => {
            this.$bvToast.toast(error.data.msg, {
              title: 'Warning',
              variant: 'danger',
              solid: true
            })
            this.pin = []
          })
      }
    },
    submit() {}
  }
}
</script>

<style  scoped>
p {
  color: grey;
}

.containerPin {
  margin-top: 30px;
}
input {
  /* padding: 20px; */
  font-size: 30px;
  text-align: center;
  width: 53px;
  height: 65px;
  border: 1px solid rgba(169, 169, 169, 0.6);
  box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
  border-radius: 10px;
  background: linear-gradient(
      rgba(169, 169, 169, 0.4),
      rgba(169, 169, 169, 0.4)
    )
    center bottom 5px / calc(100% - 10px) 2px no-repeat;

  border: 1px solid rgba(169, 169, 169, 0.4);
  margin: 5px;
}

.submit {
  color: rgba(136, 136, 143, 1);
  background-color: #dadada;
  border: 1px solid #dadada;
  border-radius: 12px;
}
</style>
