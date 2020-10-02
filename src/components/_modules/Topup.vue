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
    <a href="#" @click="topupNow">Top up now</a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Transfer',
  data() {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([]),
    topupNow() {
      console.log('aaa')
    }
  }
}
</script>

<style src="../../assets/css/Topup/Topup.css"></style>
