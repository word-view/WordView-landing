<template>
  <header class="header">
    <img src="../assets/wvicon-pale.png" class="wordview-logo" />
    <p class="wordview-title">WordView</p>


    <div class="otherside">
      <LocaleSwitcher />

      <a href="https://github.com/word-view" target="_blank" style="margin-left: 60px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px" height="25px">

          <path fill="#D7BAFB"
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />

        </svg>
      </a>
    </div>

  </header>

  <div class="mainshow">
    <div>
      <h2 class="title">{{ $t('mainshow.title') }}</h2>
      <p class="desc" v-html="$t('mainshow.desc')"></p>
    </div>
    <div class="mainshow-right">
      <img src="../assets/o.png" class="phone-preview" />
    </div>
  </div>
  <div class="custom-shape-divider-top-1730120392">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"></path>
    </svg>
  </div>

  <div class="info">
    <div class="info-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 -960 960 960" width="75px" fill="#CFC2DA">
        <path
          d="M280-280h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
      </svg>
      <p class="info-text" v-html="$t('info.one')"></p>
    </div>

    <div class="info-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 -960 960 960" width="75px" fill="#CFC2DA">
        <path
          d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z" />
      </svg>
      <p class="info-text" v-html="$t('info.two')"></p>
    </div>
  </div>

  <div class="email">
    <p class="email-text" v-html="$t('email.main')"></p>
    <p class="email-subtext" v-html="$t('email.small')"></p>

    <form action="https://api.wordview.cc/api/v1/email">
      <input type="email" name="email" class="email-input" placeholder="email@email.com" required />
      <button type="submit" class="email-button">{{ $t('email.button') }}</button>
    </form>
  </div>


</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue"

export default {
  name: 'LandingPage',
  props: {},
  components: { LocaleSwitcher }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 0;
  padding: 0;
}

.otherside {
  width: 100%;
  display: flex;
  justify-content: end;
  justify-items: center;
  align-items: center;
  margin-right: 120px;
}

.email-button {
  border: none;
  font-family: 'Noto Sans', sans-serif;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 20px;
  color: #D7BAFB;
  font-weight: bold;
  background-color: #533B72;
}

.email-input {
  border: none;
  padding: 10px;
  border-radius: 20px;
  margin-right: 20px;
  width: 42vw;
  font-family: "Noto Sans", sans-serif;
  color: #444046;
  background-color: #E7E0E8;
}

.email {
  margin-top: 120px;
  margin-left: 60px;
  margin-bottom: 100px;
}

.email-subtext {
  text-align: center;
  font-size: smaller;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  color: #CFC2DA;
}

.email-text {
  text-align: center;
  font-size: large;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  font-weight: bold;
  color: #CFC2DA;
}

.info-card {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
}

.info-text {
  text-align: center;
  font-size: large;
  font-family: 'Poppins', sans-serif;
  color: #CFC2DA;
}

.info {
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
}

.phone-preview {
  width: auto;
  height: 300px;
  padding-right: 60px;
}

.wave {
  width: 100%;
  height: 100px;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #CFC2DA;
}

.desc {
  font-family: 'Poppins', sans-serif;
  color: #CFC2DA;
}

.mainshow-right {
  margin-right: 60px;
}

.mainshow {
  background-color: #352D40;
  width: 100%;
  height: 50vh;
  padding-top: 30px;
  padding-left: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header {
  background-color: #352D40;
  width: 100%;
  height: 64px;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-left: 60px;
}

.wordview-title {
  font-family: 'Red Hat Display', sans-serif;
  margin-left: 8px;
  font-size: larger;
  font-weight: bold;
  user-select: none;
  color: #D7BAFB;
}

.wordview-logo {
  width: 45px;
  height: auto;
}

.custom-shape-divider-top-1730120392 {
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1730120392 .shape-fill {
  fill: #352D40;
}
</style>
