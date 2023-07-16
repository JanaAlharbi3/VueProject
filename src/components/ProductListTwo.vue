<template>

<div class="bg-green-800 rounded text-center italic" id="product-list-two">
 <h2 class="font-bold hover:bg-green-300 hover:shadow-xl">product-list-two </h2>
  <ul>
   <li v-for="product in products">
<span class="name">{{product.name}}</span>
<span class="price">{{product.price}}</span>
   </li>
  </ul>
  <button class="bg-red-800 rounded text-center italic text-black" v-on:click="reducePrice">reducePrice</button>
    <button class="bg-green-300 rounded text-center italic text-black m-10" v-on:click="AddVat">AddVat</button>

</div>
</template>

<script>
export default{
    computed:{
        products(){
            return this.$store.state.products;
        },
                sale(){
       return this.$store.getters.sale;
            }
    },

     methods:{
        reducePrice:function(){
            //by actions
            this.$store.dispatch('reducePrice')
//in this way we can use mutations that are defined in store so we can track
            //this.$store.commit('reducePrice')
            //by state in store
    //         this.$store.state.products.forEach(product=>{
    //             product.price *=0.5;
    //         }) 
         }
     }
  
}
</script>