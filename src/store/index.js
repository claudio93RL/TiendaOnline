import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const delay = (ms) => async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

function setInStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export default new Vuex.Store({
  state: {
    collapsed: true,
    SIDEBAR_WIDTH: 180,
    SIDEBAR_WIDTH_COLLAPSED: 58,
    productList: [{
        name: "Casa",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "Bote",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2017/09/17/16/35/boats-2758962__340.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "Avión",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2012/10/26/01/34/aircraft-63028__340.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "Motocicleta",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__480.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "Computadora",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378__340.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "Silla",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2016/11/19/17/39/chair-1840526__340.jpg",
        color: "coral",
        descout: 10,
        category: 'other'
      },
      {
        name: "Espejo",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2015/10/12/05/19/mirror-983427__340.png",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "Mesa",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2015/03/26/09/43/living-room-690174__340.jpg",
        color: "peru",
        descout: 10,
        category: 'other'
      },
      {
        name: "Café",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955__340.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "Bicicleta",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2015/05/28/22/29/bicycle-788733__340.jpg",
        color: "pink",
        descout: 10,
        category: 'other'
      },
      {
        name: "Gato",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg",
        color: "blue",
        descout: 10,
        category: 'other'
      },
      {
        name: "Parlante",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2018/10/13/18/30/speakers-3744843__340.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "mouse",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642__340.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
      {
        name: "Libro",
        price: 100.0,
        url: "https://cdn.pixabay.com/photo/2016/02/19/11/53/book-1210030__340.jpg",
        color: "red",
        descout: 10,
        category: 'other'
      },
    ],
    productosFiltrados: [],
    carritoDeCompras: []
  },
  mutations: {
    READ_PRODUCT_FROM_STORAGE(state, payload) {
      state.productList = payload
    },
    ADD_NEW_PRODUCT_TO_LIST(state, payload) {
      state.productList.push(payload)
      setInStorage('product', state.productList)
    },
    DELETE_ITEM_PRODUCT_LIST(state, payload) {
      state.productList.splice(payload, 1)
      setInStorage('product', state.productList)
    },
    SET_TOGGLE_SIDEBAR(state) {
      state.collapsed = !state.collapsed
    },
    SET_FILTER_PRODUCTS(state, payload) {
      state.productosFiltrados = payload
    },
    ADD_PRODUCT_TO_SHOPPING_CART(state, payload) {
      state.carritoDeCompras.push(payload)
    },
    ADD_QTY_TO_SHOPPING_CART_ITEM(state, payload) {
      state.carritoDeCompras[payload].qty++
    },
    SUB_QTY_SHOPPING_CART(state, payload) {
      state.carritoDeCompras[payload].qty--
    },
    REMOVE_ITEM_FROM_SHOPPING_CART(state, payload) {
      state.carritoDeCompras.splice(payload)
    }
  },
  actions: {
    toggleSidebar(context) {
      context.commit('SET_TOGGLE_SIDEBAR')
    },
    buscar(context, producto) {
      const item = context.state.productList.filter(item => {
        let texto = producto;
        if (texto) {
          texto.toLowerCase()
          return Object.values(item).join(',').toLowerCase().indexOf(texto) > -1
        } else {
          // devuelve todos los productos si no hay nada en el input
          return item
        }
      })
      context.commit('SET_FILTER_PRODUCTS', item)
    },
    // CRUD PRODUCT LIST
    addProductToList(context, {
      ...product
    }) {
      context.commit('ADD_NEW_PRODUCT_TO_LIST', product)
    },
    cargarLocalStorage(context) {
      if (getFromStorage('product')) {
        const productLoad = JSON.parse(localStorage.getItem('product'))
        context.commit('READ_PRODUCT_FROM_STORAGE', productLoad)
      } else {
        setInStorage('product', JSON.stringify([]))
      }
    },
    deleteProductList(context, producto) {
      context.commit('DELETE_ITEM_PRODUCT_LIST', producto)
    },
    // shoppingCart
    async addProductToCart(context, newProducto) {
      await delay(2000)
      const productIndexInShoppingCart = context.state.carritoDeCompras.findIndex(
        (product) => {
          return product.name === newProducto.name &&
            product.category === newProducto.category ?
            product :
            undefined
        }
      )
      if (productIndexInShoppingCart >= 0) {
        context.commit(
          'ADD_QTY_TO_SHOPPING_CART_ITEM',
          productIndexInShoppingCart
        )
      } else {
        context.commit(
          'ADD_PRODUCT_TO_SHOPPING_CART', {
            ...newProducto,
            qty: 1
          }
        )
      }
    },
    SubProductCounter(context, producto) {
      const productFind = context.state.carritoDeCompras.findIndex(item => {
        if (item.name === producto.name && item.qty === producto.qty) {
          return item
        }
      })
      if (context.state.carritoDeCompras[productFind].qty >= 2) {
        context.commit('SUB_QTY_SHOPPING_CART', productFind)
      } else {
        context.commit('REMOVE_ITEM_FROM_SHOPPING_CART', productFind)
      }
    },
    addProductCounter(context, producto) {
      const productFind = context.state.carritoDeCompras.findIndex(item => {
        if (item.name === producto.name && item.qty === producto.qty) {
          return item
        }
      })
      context.commit('ADD_QTY_TO_SHOPPING_CART_ITEM', productFind)
    }
  },
  getters: {
    sidebarWidth(state) {
      return state.collapsed ?
        `${state.SIDEBAR_WIDTH_COLLAPSED}px` :
        `${state.SIDEBAR_WIDTH}px`;
    },
    collapsed(state) {
      return state.collapsed
    },
    getProductos(state) {
      return state.productosFiltrados
    },
    getShoppingCartITems(state) {
      return state.carritoDeCompras.length
    },
    getTotalShoppingCart(state) {
      return state.carritoDeCompras.reduce((acomulator, producto) => acomulator + (producto.qty * producto.price) * producto.descout / 100, 0)
    },

  }
})