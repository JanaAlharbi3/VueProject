<template >
  <div><Cards :user="user" /> </div>
</template> 

<script>
import Cards from "../components/Cards.vue";

export default {
  name: "UserDetails",
  components: {
    Cards: Cards,
  },
  data() {
    return {
      user: {},
      users: [],
    };
  },
  methods: {
    async fetchUser() {
      await this.$store.dispatch("getUserById", this.$route.params.id);
      this.user = this.$store.state.user;
    },
  },
  mounted() {
    this.fetchUser();
  },
};
</script>  