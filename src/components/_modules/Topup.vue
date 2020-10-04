<template>
  <div>
    <div class="text">
      <h6><b>Select Top Up Nominal</b></h6>
    </div>
    <div class="select-topup">
      <b-form @submit="onSubmit()">
        <input
          v-model="form.topup_nominal"
          type="number"
          min="10000"
          placeholder="Input Nominal"
        />
        <b-button>Top Up Now</b-button>
      </b-form>
    </div>
    <div class="howto-topup">
      <p v-b-modal.modal-topup><b>How To Top Up ?</b></p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        topup_nominal: 0
      }
    }
  }
}
</script>
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
</style>
