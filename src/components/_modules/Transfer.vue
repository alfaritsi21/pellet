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
      <div
        v-for="(item, index) in showUserData"
        :key="index"
        class="receiver-user"
      >
        <img
          @click="selectReceiver(item)"
          :src="`${urlApi}${item.user_img}`"
          alt=""
        />
        <h6>
          {{
            item.first_name.length === 0
              ? item.user_name
              : item.first_name + ' ' + item.last_name
          }}
        </h6>
        <p>+62 {{ item.user_phone.substring(1) }}</p>
      </div>
    </div>
  </div>
  <!-- <img
    v-if="item.user_image.length < 1"
    src="../../assets/img/propict.png"
    alt="#"
  />
  <img v-else :src="`${urlApi}${item.user_image}`" alt="#" /> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SelectUser from '../_base/transfer/select_user'
export default {
  name: 'Transfer',
  data() {
    return { urlApi: process.env.VUE_APP_URL }
  },
  components: {
    SelectUser
  },
  created() {
    this.showAllUser()
  },
  computed: {
    ...mapGetters(['isSelect', 'showUserData'])
  },
  methods: {
    ...mapActions(['throwSelectTrigger', 'showUser', 'selectReceiverData']),
    selectReceiver(data) {
      this.selectReceiverData(data)
      this.throwSelectTrigger(true)
    },
    showAllUser() {
      this.showUser()
    }
  }
}
</script>

<style src="../../assets/css/Transfer/transfer.css"></style>
