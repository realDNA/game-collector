<template>
  <div class="gobang">
    <h1>
        Gobang
    </h1>
    <div> Rule | Competing | Leader board </div>
    <GameRule
        :rule="rule"
    />
  </div>
</template>

<script>
import GameRule from "@/components/game-lobby/GameRule.vue";

export default {
  name: "Gobang",
  components: {
    GameRule
  },
  data() {
    return {
      rule: null
    }
  },
  created() {
    this.rule = "this is rule, this is rule, this is rule, this is rule"
  }
};
</script>
