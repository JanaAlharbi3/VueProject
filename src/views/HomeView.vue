<template>
  <div class="flex items-center justify-center flex-wrap">
    <Cards v-for="user in users" :user="user" :key="user.id" />
  </div>
  <PageNumber :fetchUsers="fetchUsers"/>
</template>
  
  <script>
import Cards from "../components/Cards.vue";
import PageNumber from "../components/PageNumber.vue";
import BookDetails from "../components/BookDetails.vue";

import UserDetails from "./UserDetails.vue";

export default {
  components: {
    "Cards": Cards,
    "PageNumber": PageNumber,
    "UserDetails": UserDetails,
    "book-details": BookDetails,
  },
  name: "app",
  data() {
    return {
      books: [
        {
          id: 1,
          title: "blaaah",
          author: "badr",
        },
        {
          id: 2,
          title: "blaaah222",
          author: "jana",
        },
      ],
      users: [],
    };
  },
  computed:{
    users(){
      return this.$store.state.users;
    }
  },
  methods: {
    doingSomething(book) {
      alert("hello world!!!" + book.title);
    },
    async fetchUsers() {
      //await to wait the action to be completed and not to execute the other code
      await this.$store.dispatch("getUsers", {
        currentPage: this.$store.state.currentPage,
        perPage: this.$store.state.perPage,

      });
      this.users = this.$store.state.users;
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
  
