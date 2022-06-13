<template>
        <header class="header_admin">
            <h3 class="header_admin_logo">Admin Dashboard</h3>
            <button class="header_admin_btn_logout" @click="logOut">Deslogar</button>
        </header>
        <section class="contact_admin" v-if="messages">
            <ul class="contact_admin_itens">
            <transition-group>
                <li v-for="(contact, id) in messages" :key="id + contact.name">
                    <router-link :to="{name: 'mensagem', params:{idCollection: contact.id}}">

                        <span class="contact_admin_itens_id">ID: {{id}}</span>   
                        <p><b>Tipo de Contato:</b> {{contact.contact_type}}</p>
                        <p><b>Nome:</b> {{contact.name}}</p>
                        <p><b>Empresa:</b> {{contact.company}}</p>

                    </router-link>
                </li>
               </transition-group> 
            </ul>
            <router-view></router-view> 
        </section>
        
</template>

<script>
import  store  from "../store"
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/index"
export default {
    name: "AdminDashBoardView",
    data(){
        return{
            messages: [],
            idCollection: null
        }
    },
    methods:{
        logOut(){
            store.dispatch('logout')
        },
    },
   async created(){
        const q = query(collection(db, "thaynara-form"))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
            this.messages.push({...doc.data(), id: doc.id})
        })
    }
 }


</script>
<style scoped>
.header_admin{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px;
    background-color: var(--secundary-color-neutral);
}

.header_admin_logo{
    letter-spacing: 3px;
}

.header_admin_btn_logout{
    padding: 10px 40px;
    border-radius: 5px;
    background-color: var(--background-color);
    transition: all 0.3s ease-in-out;
}

.header_admin_btn_logout:hover{
    transform: scale(1.1);
}

.contact_admin_itens{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 450px));
    position: relative;
    padding: 60px 30px;
    gap: 30px;
}

.contact_admin_itens a{
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 6px;
    box-shadow: 2px 15px 20px 1px rgb(0 0 0 / 28%);
    padding: 30px 60px;
    transition: all 0.3s ease-in-out;
}



.contact_admin_itens a:hover{
    transform: scale(1.1);
}

.contact_admin_itens_id{
    content: '';
    display: flex;
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: var(--secundary-color);
    top: -10px;
    left: -10px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
}

p{
    font-size: 0.875rem;
}



</style>