<template>
  <div class="transfer">
    <div class="search">
      <h6 v-if="isSelect === false">Search Receiver</h6>
      <div v-if="isSelect === false" class="src-input">
        <img src="../../assets/image/search.png" alt="" />
        <input
          type="search"
          placeholder="Search receiver here"
          v-model="searchAccount"
        />
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
    <div v-if="isSelect === false" class="paginationTF">
      <b-pagination
        v-model="currentPage"
        @change="handlePageChange"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import SelectUser from '../_base/transfer/select_user'
export default {
  name: 'Transfer',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      searchAccount: '',
      perPage: 1,
      currentPage: 1
    }
  },
  components: {
    SelectUser
  },
  watch: {
    searchAccount(value) {
      if (value.length < 1) {
        this.showAllUser()
      } else {
        this.searchReceiverAccount(value)
      }
    }
  },
  created() {
    this.showAllUser()
  },
  computed: {
    ...mapGetters(['isSelect', 'showUserData', 'paginationInfo']),
    rows() {
      return this.paginationInfo.totalPage
    }
  },
  methods: {
    ...mapActions([
      'throwSelectTrigger',
      'showUser',
      'selectReceiverData',
      'searchReceiverAccount'
    ]),
    ...mapMutations(['setPage']),
    handlePageChange(val) {
      this.setPage(val)
      this.showUser()
    },
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
