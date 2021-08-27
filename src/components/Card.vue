<template>
  <div class="card mt-3" style="width: 17rem">
    <img
      :src="productos.url"
      class="card-img-top"
      width="10rem"
      height="200px"
      :alt="productos.name"
    />
    <div class="card-body">
      <h5 class="card-title">{{ productos.name }}</h5>
      <p class="card-text">Some quick example text to build on the card.</p>
      <hr />
      <p class="card-text">
        color :
        <span
          class="btn col-8 ml-3"
          :style="{ backgroundColor: productos.color }"
        />
      </p>
      <hr />
      <p class="card-text">
        Precio : <span>{{ productos.price }}$</span>
      </p>
      <hr />
      <p class="card-text">
        Descuento : <span>{{ productos.descout }}%</span>
      </p>
      <div class="text-center">
        <!-- <button class="btn btn-info col-12">add</button> -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productos", "index"],
  methods: {},
  created() {
    console.log(screen.width);
  },
};
</script>

<style scoped>
</style>