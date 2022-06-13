<template>
        <section class="modal_content">
                <div class="message_content" v-for="(message) in message" :key="message.id">
                <p><b>Tipo de Contato:</b> {{message.contact_type}}</p>
                <p><b>Nome:</b> {{message.name}}</p>
                <p><b>Empresa:</b> {{message.company}}</p>
                <p><b>Email:</b> {{message.email}}</p>
                <p><b>Telefone:</b> {{message.telephone}}</p>
                <p><b>Mensagem:</b> {{message.message}}</p>
                <button class="modal_content_btn_fechar" @click="routUpdate"></button>
            </div>
            
        </section>
        
        
    
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/index";
export default {
    name: "AdminMessageView.vue",
    props:["idCollection"],
    data(){
        return{
            message: []
        }
    },
   async mounted(){
        const docRef = doc(db, "thaynara-form", this.idCollection);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
             this.message.push(docSnap.data()) 
        } else {
        // doc.data() will be undefined in this case
        console.log("Mensagem não encontrada");
     }
    },
    methods:{
        routUpdate(){
            this.$router.push({path: '/admin-dashboard'})
        }
    }
}
</script>

<style>
.modal_content {
  display: flex;
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  justify-content: center;
  align-items: center;
}

.message_content {
  background: white;
  width: 80vw;
  max-width: 600px;
  padding: 40px;
  border-radius: 6px;
  box-shadow: 2px 15px 20px 1px rgb(0 0 0 / 28%);
  position: relative;
  box-sizing: border-box;
  animation: modal .3s forwards;
  
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.modal_content_btn_fechar{
  width: 60px;
  height: 60px;
  border-radius: 100px;
  border: none;
  top: -30px;
  right: -30px;
  position: absolute;
  background: url("@/assets/fechar.svg") no-repeat;
  cursor: pointer;
}

p{
    font-size: 1rem;
    color: #333333;
}


</style>