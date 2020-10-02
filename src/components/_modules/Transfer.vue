<template>
  <div class="transfer">
    <div class="search">
      <h6 v-if="isSelect === false">Search Receiver</h6>
      <div v-if="isSelect === false" class="src-input">
        <img src="../../assets/image/search.png" alt="" />
        <input type="search" placeholder="Search receiver here" />
      </div>
      <div v-if="isSelect === true" class="select-receiver">
        <SelectUser />
      </div>
    </div>
    <div v-if="isSelect === false" class="receiver">
      <div v-for="(item, index) in 15" :key="index" class="receiver-user">
        <img
          @click="selectReceiver(item)"
          src="../../assets/image/propict.png"
          alt=""
        />
        <h6>Momo Taro</h6>
        <p>+62 812-4343-6731</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SelectUser from '../_base/transfer/select_user'
export default {
  name: 'Transfer',
  data() {
    return {}
  },
  components: {
    SelectUser
  },
  computed: {
    ...mapGetters(['isSelect'])
  },
  methods: {
    ...mapActions(['throwSelectTrigger']),
    selectReceiver() {
      this.throwSelectTrigger(true)
    }
  }
}
</script>

<style src="../../assets/css/Transfer/transfer.css"></style>
