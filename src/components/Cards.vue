<template>
  <div>
    <div class="px-10 pt-20 ">


      <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">

        <div class="bg-white rounded p-10 mb-5 ml-3 shadow-md border hover:shadow-2xl w-96 h-96 items-center justify-center">

          <img class="w-20 rounded-full mx-28 my-8" :src="user.avatar" alt="no img"/>

          <h3 class="rounded text-black italic font-normal text-center">
            First Name:{{ user.first_name }}
          </h3>

          <h3 class="italic font-normal text-center text-black">
            Last Name:{{ user.last_name }}
          </h3>

          <h3 class="italic font-normal text-center text-black">
            ID:{{ user.id }}
          </h3>

          <h3 class="italic font-normal text-center text-black">
            Email:{{ user.email }}
          </h3>

        </div>
      </router-link>
   </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: ["user"],
  data() {
    return {};
  },
};
</script>

