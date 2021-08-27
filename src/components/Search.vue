<template>
  <div>
    <input
      type="text"
      class="form-control"
      @keyup="buscar(nombre)"
      v-model="nombre"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...mapActions(["buscar", "getFetch"]),
  },
  async mounted() {
    await this.buscar();
  },
};
</script>

<style lang="scss" scoped>
</style>