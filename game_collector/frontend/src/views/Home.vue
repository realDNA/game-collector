<template>
  <div class="home">
    <div class="game-menu">
        <button>
            <router-link to="/gobang">
                Gobang
            </router-link>
        </button>

        <button>
            <router-link to="/othello">
                Othello
            </router-link>
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
