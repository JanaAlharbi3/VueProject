import axios from "axios";
import { createApp } from "vue";
import { createStore } from "vuex";

//Vue.use(Vuex);
//we added export so it can be imported in other file
export const store = createStore({
  //state is just data stored in our app
  state: {
    products: [
      { name: "first cream", price: 60 },
      { name: "second cream", price: 90 },
      { name: "third cream", price: 60 },
    ],
    users: [],
    totalUsers: 0,
    perPage: 0,
    user: null,
    currentPage: 1,
      perPage: 6,
    // currentPage:1,
  },
  getters: {
    sale: (state) => {
      var newProduct = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price * 0.5,
        };
      });
      return newProduct;
    },
  },
  //differ with methode in track which mean I can tarck which mutation made the change
  mutations: {
    reducePrice: (state) => {
      state.products.forEach((product) => {
        product.price *= 0.5;
      });
    },
    AddVat: (state) => {
      state.products.forEach((product) => {
        product.price += 10;
      });
    },
    SetUsers: (state, users) => {
      state.users = users;
    },
    setTotalUsers: (state, totalUsers) => {
      state.totalUsers = totalUsers;
    },
    SetPerPage: (state, perPage) => {
      state.perPage = perPage;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    setCurrentPage:(state,page)=>{
      state.currentPage=page;

    }//added
  },

  actions: {
    reducePrice: (context) => {
      setTimeout(function () {
        context.commit("reducePrice");
      }, 3000);
    },
    AddVat: (context) => {
      setTimeout(function () {
        context.commit("AddVat");
      }, 3000);
    },
    async getUsers({ commit }, { currentPage, perPage }) {
      // const response= await axios.get('https://reqres.in/api/users?page=currentPage&per_page=12');
      const response = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}&per_page=${perPage}`
      );
      commit("SetUsers", response.data.data);
      commit("setTotalUsers", response.data.total);
    },
    async getUserById({ commit }, id) {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      commit("SET_USER", response.data.data);
      // console.log('response data:', response.data.data);
    },
  },
});

//export const getUsers
const app = createApp({});
app.use(store);
app.mount("#app");
