<template>
  <div class="othello-lobby">
    <button class="btn btn-sm btn-outline-info">
      <router-link to="/">
        Go back to lobby
      </router-link>
    </button>

    <h1>Othello</h1>

    <GameNavBar v-model="gameNavItem" />

    <component :is="selectedGameWindow" v-bind="selectedGameWindowProperties" />

    <button class="btn btn-sm btn-outline-info">
      <router-link to="/othello/waiting">
        random match
      </router-link>
    </button>

    <button class="btn btn-sm btn-outline-info">match with a friend</button>
  </div>
</template>

<script>
// 3rd library
//import moment from 'moment'
//import ReconnectingWebSocket from 'reconnecting-websocket';

// components
import GameNavBar from "@/components/game-lobby/GameNavBar.vue";
import GameRule from "@/components/game-lobby/GameRule.vue";
import GameCompeting from "@/components/game-lobby/GameCompeting.vue";
import GameLeaderBoard from "@/components/game-lobby/GameLeaderBoard.vue";

// mixins
import { gameNavWindowMixin } from "@/mixins/game-lobby/gameNavWindowMixin";

export default {
  name: "OthelloLobby",
  components: {
    GameNavBar,
    GameRule,
    GameCompeting,
    GameLeaderBoard
  },
  mixins: [gameNavWindowMixin],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    require("@/assets/js/helloworld.js");
  },
  created() {
    this.rule =
      "othello : this is rule, this is rule, this is rule, this is rule";
  },
  methods: {}
};
</script>
