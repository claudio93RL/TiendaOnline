<template>
  <div class="container">
    <h1>home</h1>
    <Search />
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-6 col-lg-4 align-items-center"
        v-for="(item, index) in $store.getters.getProductos"
        :key="index"
      >
        <Card :productos="item" :index="index"
          ><button class="btn propio col-12" @click="addProductToCart(item)">
            Add
          </button></Card
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Card from "../components/Card.vue";
import Search from "../components/Search.vue";

export default {
  name: "Home",
  components: {
    Card,
    Search,
  },
  methods: {
    ...mapActions(["buscar", "addProductToCart"]),
  },
  mounted() {
    this.buscar("");
  },
};
</script>
