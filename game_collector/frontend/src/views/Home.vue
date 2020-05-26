<template>
  <div class="home">
    <div class="game-menu">

        <ul class="nav nav-pills">
            <router-link :to="gobangLobby" tag="li" active-class="active"><a> Gobang </a></router-link>
            <router-link :to="othelloLobby"><a> Othello </a></router-link>
        </ul>

        <button>
            <router-link to="/gobang"> Gobang </router-link>
        </button>

        <button>
            <router-link to="/othello"> Othello </router-link>
        </button>
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
        gobangLobby : {name: 'GobangLobby'},
        othelloLobby : {name: 'OthelloLobby'}
    }
  },
  components: {
  }
};
</script>

<style>
.game-menu {
    border-style: solid;
    width: 50%;
    height: 100px;
}
</style>
