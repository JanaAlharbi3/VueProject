
<template>
  <div>
    <div class="flex justify-center mt-4">
      <button v-for="n in totalPages" :key="n" @click="setActivePage(n)" class="text-blue-900 m-1 py-1 px-3 rounded-full"
        :class="{
          'bg-blue-200 ': currentPage === n,
          'bg-blue-100  hover:bg-blue-200': currentPage !== n,
        }"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>
  
   
  
  <script>
export default {
  name: "Page",
  props:["fetchUsers"],
  data() {
    return {};
  },

  computed: {
    totalPages() {
      return Math.ceil(this.$store.state.totalUsers / this.$store.state.perPage);
    },
  },

  methods: {
    setActivePage(n) {
      this.$store.commit("setCurrentPage",n)
      this.fetchUsers();
    },
  
  },
};
</script>
  
  