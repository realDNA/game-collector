<template>
  <div class="gobang-lobby">
    <button class="btn btn-sm btn-outline-info">
        <router-link to="/">
            Go back to lobby
        </router-link>
    </button>

    <h1>
        Gobang
    </h1>

    <GameNavBar
    @select-game-nav-item="selectGameNavItem"
    />

    <div v-if='gameNavItem == "nav-rule"'>
        <GameRule
            :rule="rule"
        />
    </div>
    <div v-else-if='gameNavItem == "nav-competing"'>
        <GameCompeting/>
    </div>
    <div v-else-if='gameNavItem == "nav-leader-board"'>
        <GameLeaderBoard/>
    </div>
    <div v-else>
        <p> Something Wrong happened. </p>
    </div>

    <button class="btn btn-sm btn-outline-info">
        <router-link to="/gobang/waiting">
            random match
        </router-link>
    </button>
    <button class="btn btn-sm btn-outline-info"> match with a friend </button>
  </div>

</template>

<script>
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
  created() {
    this.rule = "this is rule, this is rule, this is rule, this is rule"
  },
  methods: {
    selectGameNavItem(item) {
        this.gameNavItem = item;
    }
  }
};
</script>
