<template>
  <div class="gobang-lobby">

    <button class="btn btn-sm btn-outline-info">
        <router-link to="/">
            Go back to lobby
        </router-link>
    </button>

    <h1> Gobang </h1>

    <GameNavBar v-model="gameNavItem"/>

    <component :is="selectedGameWindow" v-bind="selectedGameWindowProperties"/>

    <button class="btn btn-sm btn-outline-info">
        <router-link to="/gobang/waiting">
            random match
        </router-link>
    </button>

    <button class="btn btn-sm btn-outline-info"> match with a friend </button>

  </div>

</template>

<script>
//import moment from 'moment'
//import ReconnectingWebSocket from 'reconnecting-websocket';
import GameNavBar from "@/components/game-lobby/GameNavBar.vue";
import GameRule from "@/components/game-lobby/GameRule.vue";
import GameCompeting from "@/components/game-lobby/GameCompeting.vue";
import GameLeaderBoard from "@/components/game-lobby/GameLeaderBoard.vue";

export default {
  name: "GobangLobby",
  components: {
    GameNavBar,
    GameRule,
    GameCompeting,
    GameLeaderBoard
  },
  data() {
    return {
        gameNavItem: "nav-rule", //default show game rule
        rule: null
    }
  },
  computed: {
    selectedGameWindow() {
      let component = null;
      if(this.gameNavItem=="nav-rule") {
        component = "GameRule"
      } else if (this.gameNavItem=="nav-competing") {
        component = "GameCompeting"
      } else if (this.gameNavItem=="nav-leader-board") {
        component = "GameLeaderBoard"
      }
      return component;
    },
    selectedGameWindowProperties() {
      let properties = null;
      if(this.gameNavItem=="nav-rule") {
        properties = {rule: this.rule}
      } else if (this.gameNavItem=="nav-competing") {
        properties = {}
      } else if (this.gameNavItem=="nav-leader-board") {
        properties = {}
      }
      return properties;
    }
  },
  mounted() {
    require('@/assets/js/helloworld.js');
  },
  created() {
    this.rule = "this is rule, this is rule, this is rule, this is rule"
  },
  methods: {

  }
};
</script>

