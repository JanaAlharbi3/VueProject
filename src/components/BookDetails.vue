
<template>
  <div>
    <h1>hey</h1>
    <!-- <h1 class="text-black">{{ book.title}}</h1> -->
  </div>
</template>
<script>

export default {
    name:'BookDetails',
    props:['book'],
    data() {
    },
    methods: {
      doThis() {
        this.$emit('doSomething', this.book)
      }
    }
};
  
</script>