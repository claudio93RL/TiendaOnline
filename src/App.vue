<template>
  <div>
    <SideBar />
    <div class="carrito">
      <router-link to="/carrito">
        <i class="fas fa-shopping-cart"
          ><span>{{ $store.getters.getShoppingCartITems }}</span></i
        >
      </router-link>
      <router-link to="/carrito">
        <i class="fas fa-user"></i>
      </router-link>
    </div>
    <div :style="{ 'margin-left': $store.getters.sidebarWidth }">
      <router-view />
    </div>
  </div>
</template>


<script>
import SideBar from "./components/SideBar.vue";
import { mapActions } from "vuex";
export default {
  components: {
    SideBar,
  },
  methods: {
    ...mapActions(["cargarLocalStorage"]),
  },
  created() {
    this.cargarLocalStorage();
  },
};
</script>
<style>
.carrito {
  float: right;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 1em;
  color: black;
}
.carrito i {
  margin-right: 0.1em;
  font-size: 2em;
  padding: 0.2em;
  color: var(--sidebar-bg-color);
  position: relative;
}
.carrito i span {
  position: absolute;
  top: 10px;
  left: 24px;
  z-index: 1;
  color: white;
  font-size: 0.5em;
}
.carrito i:last-of-type {
  margin-right: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.propio {
  background-color: var(--sidebar-bg-color);
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.carrito i:hover {
  color: var(--sidebar-item-hover);
}
.carrito i.active {
  color: var(--sidebar-item-active);
}
</style>
