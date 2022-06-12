<template>
        <div>
            <h3>Admin Dashboard</h3>
            <button @click="logOut">Deslogar</button>
        </div>
  
</template>

<script>
import  store  from "../store"
export default {
    name: "AdminDashBoardView",
    methods:{
        logOut(){
            store.dispatch('logout')
        },
    },
 }


</script>
<style scoped>

</style>