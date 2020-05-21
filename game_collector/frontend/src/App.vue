<template>
  <div id="app">
    <div>
        <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    rand() {
        return Math.random().toString(36).substr(2); // remove `0.`
    },
    generateToken() {
        return this.rand + this.rand; // to make it longer
    }
  },
  methods: {
    async setTokenInfo() {
      var originalToken = window.localStorage.getItem("userToken");
      if(!originalToken){
          var userNewToken = this.generateToken;
          window.localStorage.setItem("userToken", userNewToken);
      }
    }
  },
  created() {
    this.setTokenInfo();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
