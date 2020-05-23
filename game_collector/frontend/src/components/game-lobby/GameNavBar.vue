<template>
<div>
  <button
    class="btn btn-sm btn-outline-info"
    @click="triggerSelectGameNavItem('nav-rule')"
    > Rule
  </button> |

  <button
    class="btn btn-sm btn-outline-info"
    @click="triggerSelectGameNavItem('nav-competing')"
    > Competing
  </button> |

  <button
    class="btn btn-sm btn-outline-info"
    @click="triggerSelectGameNavItem('nav-leader-board')"
    > Leader board
  </button>
</div>
</template>

<script>
export default {
  name: "GameNavBar",
  methods: {
    triggerSelectGameNavItem(item) {
      this.$emit("input", item)
    }
  }
};
</script>

