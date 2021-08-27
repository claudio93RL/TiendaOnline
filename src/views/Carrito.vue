<template>
  <div class="container">
    <h1>carrito de compras:</h1>

    <table class="table table-dark mt-5">
      <thead class="text-center">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Descr.</th>
          <th scope="col">Disp</th>
          <th scope="col">Desct</th>
          <th scope="col">Price</th>
          <th scope="col">Prod</th>
          <th scope="col">Total</th>
          <th scope="col">Tarro</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(item, index) in $store.state.carritoDeCompras" :key="index">
          <th class="col-1">{{ index + 1 }}</th>
          <td data-titulo="Prod" class="col-2">
            <img width="100px" height="100px" :src="item.url" alt="" />
          </td>
          <td data-titulo="Desc" class="col-1">{{ item.name }}</td>
          <td data-titulo="stoc" class="col-1">10</td>
          <td data-titulo="Desc" class="col-1">{{ item.descout }}%</td>
          <td data-titulo="Pric" class="col-1">{{ item.price }}</td>
          <td data-titulo="Acti" class="col-1">
            <div class="d-flex flex-column align-items-center">
              <div class="d-flex">
                <button class="btn btn-info" @click="addProductCounter(item)">
                  +</button
                ><button
                  class="btn btn-info"
                  @click.prevent="SubProductCounter(item)"
                >
                  -
                </button>
              </div>
              {{ item.qty }}
            </div>
          </td>
          <td data-titulo="Name" class="col-1">
            {{
              item.descout
                ? (item.price * item.qty * item.descout) / 100
                : item.price * item.qty
            }}
          </td>
          <td data-titulo="Name" class="col-1">
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>
        <tr v-if="getTotalShoppingCart">
          <td colspan="6"></td>
          <td>total</td>
          <td>{{ getTotalShoppingCart }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["SubProductCounter", "addProductCounter"]),
  },
  computed: {
    ...mapGetters(["getTotalShoppingCart"]),
  },
};
</script>

<style  scoped>
@media (max-width: 30em) {
  table td img {
    width: 70px;
    height: 100px;
  }
  table {
    width: 100%;
    border: none;
  }
  table tr {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    padding-right: 1em;
    margin-bottom: 0;
    text-align: center;
  }
  table thead {
    display: none;
  }
  table td[data-titulo] {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  table td[data-titulo]::before {
    content: attr(data-titulo);
    margin-right: 90px;
    padding: 0.5em;
  }
}
</style>
