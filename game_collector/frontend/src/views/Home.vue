<template>
  <div class="home">
    <div class="game-menu">
      <ul class="nav nav-pills">
        <router-link :to="gobangLobby" tag="li" active-class="active"
          ><a> Gobang </a></router-link
        >
        <router-link :to="othelloLobby"><a> Othello </a></router-link>
      </ul>

      <v-btn class="ma-2" outlined color="indigo">
        <router-link :to="gobangLobby"> Gobang </router-link>
      </v-btn>

      <v-btn class="ma-2" outlined color="indigo">
        <router-link :to="othelloLobby"> Othello </router-link>
      </v-btn>

    </div>
    <ul>
      <li>fdafaff</li>
      <li>werewrewrew</li>
      <li>rewrqwerfq</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      //route
      gobangLobby: { name: "GobangLobby" },
      othelloLobby: { name: "OthelloLobby" }
    };
  },
  components: {}
};
</script>

<style>
.game-menu {
  border-style: solid;
  width: 50%;
  height: 100px;
}
</style>
