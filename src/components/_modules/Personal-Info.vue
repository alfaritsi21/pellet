<template>
  <b-container fluid>
    <b-row class="personal"
      ><b-col cols="12">
        <strong>Personal Information</strong>
        <br />
        <br />
        <p>
          We got your personal information from the sign <br />
          up proccess. If you want to make changes on <br />
          your information, contact our support.
        </p>
      </b-col></b-row
    >
    <b-container fluid>
      <b-row class="card">
        <b-col cols="12"
          ><p>First Name</p>
          <strong>Robert</strong></b-col
        >
      </b-row>
      <b-row class="card">
        <b-col
          ><p>Last Name</p>
          <strong>Chandler</strong></b-col
        >
      </b-row>
      <b-row class="card">
        <b-col
          ><p>Verified E-Mail</p>
          <strong>Pewdiepie1@gmail.com</strong></b-col
        >
      </b-row>
      <b-row class="card" align-h="between" align-v="center">
        <b-col cols="8"
          ><p>Phone Number</p>
          <strong>Robert</strong></b-col
        ><b-col cols="4" class="text-right">Manage</b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<style scoped>
.personal {
  text-align: left;
  margin: 10px 10px;
  font-weight: 700px;
  font-size: 18px;
}

p {
  font-size: 16px;
  color: grey;
}

.card {
  text-align: left;
  width: 100%;
  height: 85px;
  margin-bottom: 5px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
