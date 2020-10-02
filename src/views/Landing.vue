<template>
  <b-container fluid class="container">
    <!-- <div class="navbar">zwalet</div> -->
    <b-jumbotron class="jumbotron p-0 m-0">
      <b-row class="m-0">
        <b-col cols="12" xl="6">
          <h1 class="title-banner m-0">
            Awesome App For Saving <span style="color: #6379f4">Time</span>
          </h1>
          <p class="my-4">
            We bring you a mobile app for banking problems that oftenly wasting
            much of your times.
          </p>
          <router-link to="/login">
            <b-button class="py-3 try">Try it Free</b-button>
          </router-link> </b-col
        ><b-col cols="12" xl="6"
          ><router-link to="/login"
            ><b-button class="btn1">Login</b-button></router-link
          >
          <router-link to="/register"
            ><b-button class="btn2">Sign up</b-button></router-link
          >
          <b-row><img src="../assets/phone.png" alt="" /></b-row></b-col
      ></b-row>
    </b-jumbotron>
    <div class="about">
      <b-row
        ><b-col>
          <h1><span style="color: #6379f4">About</span> the Application.</h1>
        </b-col></b-row
      >
      <b-row class="mt-2"
        ><b-col>
          We have some great features from the application and it's totally free
          to use by all users around the world.
        </b-col></b-row
      >

      <b-row class="mt-5" align-h="center">
        <b-col md="3"
          ><b-card
            ><img src="../assets/call.png" alt="" /><b-card-title
              ><strong> 24/7 Support</strong></b-card-title
            ><b-card-text class="pt-3"
              >We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.</b-card-text
            ></b-card
          ></b-col
        >
        <b-col md="3"
          ><b-card
            ><img src="../assets/lock.png" alt="" /><b-card-title
              ><strong>Data Privacy</strong></b-card-title
            ><b-card-text class="pt-3"
              >We make sure your data is safe in our database and we will
              encrypt any data you submitted to us.</b-card-text
            ></b-card
          ></b-col
        >
        <b-col md="3"
          ><b-card
            ><img src="../assets/download.png" alt="" /><b-card-title
              ><b-card-title
                ><strong>Easy Download</strong></b-card-title
              ></b-card-title
            ><b-card-text class="pt-3"
              >Pellet is 100% totally free to use it’s now available on Google
              Play Store and App Store.</b-card-text
            ></b-card
          ></b-col
        >
      </b-row>
    </div>
    <div class="trusted">
      <b-row
        ><b-col cols="12" xl="6"
          ><b-row class="p-5"
            ><b-col>
              <h1>
                100+ <span style="color: #6379f4">Trusted</span> Partners.
              </h1></b-col
            ></b-row
          >
          <b-row
            ><b-col
              ><p>
                We have reached global level and have 100+ brand partners around
                the globe.
              </p></b-col
            ></b-row
          ></b-col
        ><b-col cols="12" xl="6"
          ><img src="../assets/company.png" alt="" /></b-col
      ></b-row>
    </div>
    <div class="features">
      <b-row
        ><b-col cols="12" xl="5">
          <img src="../assets/phone2.png" alt="" /></b-col
        ><b-col cols="12" xl="7" class="text-left"
          ><b-row>
            <h1>
              All The <span style="color: #6379f4">Great</span> <br />
              Pellet Features.
            </h1></b-row
          ><b-row>
            <b-card bg-variant="white" style="width: 80%"
              ><h3><span>1.</span> Small Fee</h3>
              <p>
                We only charge 5% of every success transaction done in Pellet
                app.
              </p></b-card
            > </b-row
          ><b-row
            ><b-card bg-variant="white" style="width: 80%"
              ><h3><span>2.</span>Data Secured</h3>
              <p>
                All your data is secured properly in our system and it’s
                encrypted.
              </p></b-card
            > </b-row
          ><b-row
            ><b-card style="width: 80%"
              ><h3><span>3.</span>User Friendly</h3>
              <p>
                Pellet come up with modern and sleek design and not complicated.
              </p></b-card
            ></b-row
          ></b-col
        ></b-row
      >
    </div>
    <div class="thought">
      <b-row
        ><b-col
          ><h1>
            What Users are <span style="color: #6379f4">Saying</span>
          </h1></b-col
        ></b-row
      >
      <b-row
        ><b-col
          ><p>
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p></b-col
        ></b-row
      >
      <b-row class="mt-5" align-h="center">
        <b-col md="3"
          ><b-card
            ><img src="../assets/p1.png" alt="" /><b-card-title
              ><strong> Sherina Chaw</strong></b-card-title
            ><b-card-text class="pt-3"
              >“I use this app since 2 years ago and this is the best app that
              I’ve ever use in my entire life”</b-card-text
            ></b-card
          ></b-col
        >
        <b-col md="3"
          ><b-card
            ><img src="../assets/p2.png" alt="" /><b-card-title
              ><strong>Jessica Mera</strong></b-card-title
            ><b-card-text class="pt-3"
              >“I use Pellet to manage all financial needs. It’s super easy to
              use and it’s 100% free app”</b-card-text
            ></b-card
          ></b-col
        >
        <b-col md="3"
          ><b-card
            ><img src="../assets/p3.png" alt="" /><b-card-title
              ><b-card-title
                ><strong>Robert Chandler</strong></b-card-title
              ></b-card-title
            ><b-card-text class="pt-3"
              >“Since I’m using this app, I’m not going to move to another
              similar app. Thank you Pellet!”</b-card-text
            ></b-card
          ></b-col
        >
      </b-row>
    </div>
    <div class="footer">
      <b-row class="m-auto p-5"
        ><b-col cols="12" xl="12"
          ><h1>Pellet</h1>
          <p>
            Simplify financial needs and saving <br />
            much time in banking needs with <br />
            one single app.
          </p>
          <br />
          <br />
          <br />
          <hr />
          <br />
          2020 Pellet. All right reserved
        </b-col></b-row
      >
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {}
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
.container {
  font-family: 'Nunito Sans', sans-serif;
}

.navbar {
  margin-top: 0px;
  background-color: blue;
}

.jumbotron {
  background-color: white;
  height: 150vh;
}

.title-banner {
  line-height: 186px;
}

.btn1 {
  width: 120px;
  color: white;
  background-color: #6379f4;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 8px;
}

/* .btn1:hover {
  width: 120px;
  color: #6379f4;
  background-color: white;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 8px;
} */

.btn2 {
  width: 120px;
  color: #6379f4;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 8px;
}
/* .btn2:hover {
  width: 120px;
  color: white;
  background: #6379f4;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 5px;
} */
.try {
  background-color: #6379f4;
}

.about {
  padding-top: 60px;
  width: 100%;
  height: 550px;
  background-color: rgba(71, 58, 209, 0.06);
  text-align: center;
}

.trusted {
  height: 300px;
}

.features {
  height: auto;
  background: rgba(71, 58, 209, 0.06);
}

.thought {
  height: 500px;
}

.footer {
  text-align: left;
  height: 438px;
  background-color: rgba(99, 121, 244, 1);
  color: white;
}

.footer p {
  line-height: 31px;
}

hr {
  border-top: 1px solid white;
}
</style>
