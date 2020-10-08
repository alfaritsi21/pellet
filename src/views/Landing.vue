<template>
  <b-container-fluid class="container ">
    <!-- <div class="navbar">zwalet</div> -->
    <b-row class="jumbotron p-2 ml-1 mr-1">
      <b-col>
        <b-row class="navbar " align-h="between ">
          <b-col cols="3" xs="3" sm="3" md="3" lg="3" xl="3">
            <h1>Pellet</h1>
          </b-col>
          <b-col cols="6" xs="6" sm="6" md="6" lg="6" xl="6" class="text-right">
            <router-link to="/login">
              <b-button class="btn1">Login</b-button>
            </router-link>
            <router-link to="/register">
              <b-button class="btn2">Sign up</b-button>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-row class="m-0 " align-h="center" style="width:100%">
        <b-col xs="6" sm="6" md="6" lg="6" xl="6">
          <div class="title-banner ">
            <h1>
              Awesome App
              <br />For Saving
              <span style="color: #6379f4">Time</span>
            </h1>
            <p class="my-4">
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </p>
            <router-link to="/login">
              <b-button class="py-2 try">Try it Free</b-button>
            </router-link>
          </div>
        </b-col>
        <b-col class="right" xs="6" sm="6" md="6" lg="6" xl="6">
          <img style="max-width:80%" src="../assets/phone.png" alt />
        </b-col>
      </b-row>
    </b-row>

    <b-row class="about">
      <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <b-row>
          <b-col>
            <h1><span style="color: #6379f4">About</span> the Application.</h1>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            We have some great features from the application and it's totally
            free to use by all users around the world.
          </b-col>
        </b-row>

        <b-row class="mt-5" align-h="center">
          <b-col cols="12" xs="3" sm="3" md="3" lg="3" xl="3">
            <b-card>
              <img src="../assets/call.png" alt />
              <b-card-title>
                <strong>24/7 Support</strong>
              </b-card-title>
              <b-card-text class="pt-3">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" xs="3" sm="3" md="3" lg="3" xl="3">
            <b-card>
              <img src="../assets/lock.png" alt />
              <b-card-title>
                <strong>Data Privacy</strong>
              </b-card-title>
              <b-card-text class="pt-3">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" xs="3" sm="3" md="3" lg="3" xl="3">
            <b-card>
              <img src="../assets/download.png" alt />
              <b-card-title>
                <b-card-title>
                  <strong>Easy Download</strong>
                </b-card-title>
              </b-card-title>
              <b-card-text class="pt-3">
                Pellet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="trusted" align-h="center">
      <b-col cols="12">
        <b-row align-h="center">
          <b-col xs="5" sm="5" md="5" lg="5" xl="5">
            <b-row style="width:100%">
              <b-col class="p-5">
                <h1>
                  100+
                  <span style="color: #6379f4">Trusted</span> Partners.
                </h1>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p>
                  We have reached global level and have 100+ brand partners
                  around the globe.
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col xs="5" sm="5" md="5" lg="5" xl="5">
            <img style="width:100%" src="../assets/company.png" alt />
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="features">
      <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <b-row>
          <b-col xs="5" sm="5" md="5" lg="5" xl="5">
            <img style="max-width:100%; " src="../assets/phone2.png" alt />
          </b-col>
          <b-col xs="7" sm="7" md="7" lg="7" xl="7" class="text-left">
            <b-row>
              <b-col>
                <h1 style="margin-top: 60px">
                  All The
                  <span style="color: #6379f4">Great</span>
                  <br />Pellet Features.
                </h1>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card class="card" bg-variant="white" style="width: 80%">
                  <h3><span>1.</span> Small Fee</h3>
                  <p>
                    We only charge 5% of every success transaction done in
                    Pellet app.
                  </p>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card class="card" bg-variant="white" style="width: 80%">
                  <h3><span>2.</span>Data Secured</h3>
                  <p>
                    All your data is secured properly in our system and it’s
                    encrypted.
                  </p>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card class="card" style="width: 80%">
                  <h3><span>3.</span>User Friendly</h3>
                  <p>
                    Pellet come up with modern and sleek design and not
                    complicated.
                  </p>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class=" thought">
      <b-col cols="12">
        <b-row style="width:100% " class="text-center">
          <b-col>
            <h1 style="margin-top: 20px">
              What Users are
              <span style="color: #6379f4">Saying</span>
            </h1>
          </b-col>
        </b-row>
        <b-row style="width:100%">
          <b-col>
            <p>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-5" align-h="center">
          <b-col md="3">
            <b-card>
              <img src="../assets/p1.png" alt />
              <b-card-title>
                <strong>Sherina Chaw</strong>
              </b-card-title>
              <b-card-text class="pt-3">
                “I use this app since 2 years ago and this is the best app that
                I’ve ever use in my entire life”
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="3">
            <b-card>
              <img src="../assets/p2.png" alt />
              <b-card-title>
                <strong>Jessica Mera</strong>
              </b-card-title>
              <b-card-text class="pt-3">
                “I use Pellet to manage all financial needs. It’s super easy to
                use and it’s 100% free app”
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="3">
            <b-card>
              <img src="../assets/p3.png" alt />
              <b-card-title>
                <b-card-title>
                  <strong>Robert Chandler</strong>
                </b-card-title>
              </b-card-title>
              <b-card-text class="pt-3">
                “Since I’m using this app, I’m not going to move to another
                similar app. Thank you Pellet!”
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="mt-5 p-5 footer">
      <b-col cols="12" xl="12">
        <h1>Pellet</h1>
        <p>
          Simplify financial needs and saving
          <br />much time in banking needs with <br />one single app.
        </p>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <b-row align-h="between">
          <b-col md="5">2020 Pellet. All right reserved</b-col>
          <b-col md="5">
            <b-row>
              <b-col>+62 895 1234 1234</b-col>
              <b-col>contact@Pellet.com</b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container-fluid>
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
  width: 100%;
  height: 1000px;
  margin: 0px;
  padding: 0px;
}

.navbar {
  width: 100%;
}

.navbar h1 {
  /* width: 100%; */
  text-align: left;
  font-size: 26px;
  color: rgba(99, 121, 244, 1);
  font-weight: 700;
}
.jumbotron {
  background-color: white;
  height: 150vh;
}
.title-banner {
  /* position: relative;
  top: 100px; */
  padding-top: 20px;
  padding-left: 25px;
  text-align: left;
}

.right {
  /* background-color: aqua; */
  background-image: url(../assets/rect.png);
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: top right;
}

.title-banner h1 {
  font-weight: 700;
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

.btn2 {
  width: 120px;
  color: #6379f4;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 8px;
}

.try {
  background-color: #6379f4;
}
.about {
  padding-top: 60px;
  width: 100%;
  height: 550px;
  background-color: rgba(71, 58, 209, 0.06);
  text-align: center;
  overflow-y: scroll;
}
.about::-webkit-scrollbar {
  display: none;
}

.trusted {
  background-color: aqua;
  height: 300px;
  width: 100%;
}
.features {
  width: 100%;
  height: 500px;
  background: rgba(71, 58, 209, 0.06);
  overflow-y: scroll;
}

.features::-webkit-scrollbar {
  display: none;
}
.thought {
  width: 100%;
  height: 500px;
  overflow-y: scroll;
}

.thought::-webkit-scrollbar {
  display: none;
}
.footer {
  position: absolute;
  width: 100%;
  text-align: left;
  height: 430px;
  background-color: rgba(99, 121, 244, 1);
  color: white;
}
.footer p {
  line-height: 31px;
}
.footer h1 {
  font-weight: 700;
}
hr {
  border-top: 1px solid white;
}

img {
  transition: transform 0.5s ease-in-out;
}
img:hover {
  transform: scale(1.1);
}

.card {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  margin-bottom: 5px;
}
</style>
