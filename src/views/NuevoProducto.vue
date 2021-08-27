<template>
  <div class="container">
    <h1>Registre su producto:</h1>

    <form class="row text-center" @submit.prevent="sendProduct(product)">
      <div class="form-group col-sm-6 col-12">
        <label>Name:</label>
        <input
          type="text"
          class="form-control"
          placeholder="ingrese un nombre"
          required
          v-model.trim="product.name"
        />
      </div>
      <div class="form-group col-sm-6">
        <label>Price:</label>
        <input
          value="100"
          type="number"
          class="form-control"
          placeholder="price"
          required
          v-model.number="product.price"
        />
      </div>
      <div class="form-group col-6">
        <label>Color:</label>
        <input
          type="color"
          class="form-control"
          placeholder="color"
          required
          v-model="product.color"
        />
      </div>
      <div class="form-group col-sm-6">
        <label>ofert:</label>
        <input
          type="number"
          class="form-control"
          v-model.number="product.descout"
        />
      </div>
      <div class="form-group col-sm-6">
        <label>category:</label>
        <select class="form-control" v-model="product.category">
          <option value="food">Comida</option>
          <option value="pets">Mascotas</option>
          <option value="others">Otros</option>
        </select>
      </div>
      <div class="form-group col-sm-6">
        <label>img:</label>
        <input
          type="url"
          default="https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537__340.png"
          placeholder="url (no-required)"
          class="form-control"
          v-model="product.url"
        />
      </div>
      <div class="col-12 justify-content-between">
        <button class="btn propio col-sm-4 col-12 mr-5" type="submit">
          agregar
        </button>
      </div>
    </form>
    <hr />
    <table class="table table-dark mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Color</th>
          <th scope="col">Tipo</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in $store.state.productList" :key="index">
          <th class="col-1">{{ index + 1 }}</th>
          <td data-titulo="Name" class="col-1">{{ item.name }}</td>
          <td data-titulo="Price" class="col-2">{{ item.price }}</td>
          <td data-titulo="Color" class="col-2">{{ item.color }}</td>
          <td data-titulo="Categ" class="col-2">{{ item.category }}</td>
          <td data-titulo="Act" class="col-2">
            <button class="btn btn-warning" @click="ActivateEdition(item)">
              E
            </button>
            <button class="btn btn-danger" @click="deleteProductList(index)">
              D
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      product: {
        name: "",
        price: 0,
        color: "#000000",
        descout: 0,
        category: "others",
        url: "https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537__340.png",
      },
    };
  },
  methods: {
    sendProduct(producto) {
      this.$store.dispatch("addProductToList", producto);
      this.product = {
        name: "",
        price: 0,
        color: "#000000",
        descout: 0,
        category: "others",
        url: "https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537__340.png",
      };
    },
    ActivateEdition(producto) {
      this.updateItemProductList(producto);
      this.$router.push("Editar");
    },
    ...mapActions(["deleteProductList", "updateItemProductList"]),
  },
};
</script>
<style scoped >
@media (max-width: 30em) {
  table {
    width: 100%;
    border: none;
  }
  table tr {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    padding: 1em;
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
