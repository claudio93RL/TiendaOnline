
<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1 class="text-center mb-5">
      <span v-if="collapsed">
        <div>T</div>
        <div>O</div>
      </span>
      <span v-else>Tienda Online</span>
    </h1>
    <div class="mt-5 pt-5">
      <SidebarLink to="/Home" icon="fas fa-home">Home</SidebarLink>
      <SidebarLink to="/nuevo-producto" icon="fas fa-columns"
        >New Product</SidebarLink
      >
      <SidebarLink to="/carrito" icon="fas fa-chart-bar"
        >Shopping cart</SidebarLink
      >
    </div>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
      v-if="!movil"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  props: {},
  components: {
    SidebarLink,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
    scren() {
      return screen.width;
    },
  },
  computed: {
    ...mapGetters(["sidebarWidth", "collapsed"]),
    movil() {
      return screen.width <= 500 ? true : false;
    },
  },
};
</script>
<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 1em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 1.5rem;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>