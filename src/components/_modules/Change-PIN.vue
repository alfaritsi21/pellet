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

    <b-form class="containerPin">
      <input maxlength="1" type="text" />
      <input maxlength="1" type="text" />
      <input maxlength="1" type="text" />
      <input maxlength="1" type="text" />
      <input maxlength="1" type="text" />
      <input maxlength="1" type="text" />
      <b-row align-h="center" class="mt-5"
        ><b-col cols="6"
          ><b-button block class="submit" type="submit"
            >Continue</b-button
          ></b-col
        ></b-row
      >
    </b-form>
    <!-- <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div> -->

    <!-- <b-row align-h="center" class="text-center m-5"
          ><b-col cols="6">asdasd</b-col></b-row
        > -->
  </b-container>
</template>

<style  scoped>
p {
  color: grey;
}

.containerPin {
  margin-top: 70px;
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
