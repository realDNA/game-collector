export const gameNavWindowMixin = {
  data() {
    return {
      gameNavItem: "nav-rule", //default show game rule
      rule: null
    };
  },
  computed: {
    selectedGameWindow() {
      let component = null;
      if (this.gameNavItem == "nav-rule") {
        component = "GameRule";
      } else if (this.gameNavItem == "nav-competing") {
        component = "GameCompeting";
      } else if (this.gameNavItem == "nav-leader-board") {
        component = "GameLeaderBoard";
      }
      return component;
    },
    selectedGameWindowProperties() {
      let properties = null;
      if (this.gameNavItem == "nav-rule") {
        properties = { rule: this.rule };
      } else if (this.gameNavItem == "nav-competing") {
        properties = {};
      } else if (this.gameNavItem == "nav-leader-board") {
        properties = {};
      }
      return properties;
    }
  }
};
