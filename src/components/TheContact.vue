<template>
    <main class="contact_page">
        <div class="contact_page_text">
            <img class="contact_page_text_1" width="802" height="440" src="@/assets/contato1.svg" alt="Texto contato na cor rosa.">
            <img class="contact_page_text_2" width="802" height="440" src="@/assets/contato2.svg" alt="Texto contato na cor rosa">
        </div>

            <ContactForm/>
    </main>
  
</template>

<script>
import ContactForm from "@/components/ContactForm.vue"
export default {
    name: "TheContact",
    components:{
        ContactForm
    }
}
</script>

<style scoped>
.contact_page{
    display: flex;
    gap: 30px;
}

.contact_page_text{
    position: relative;
    /* background-color: red; */
    width: 950px;
    height: 600px;
}

.contact_page_text_1,
.contact_page_text_2{
    position: absolute;
    left: 140px;
    top: 60px;
    pointer-events: none;
}

.contact_page_text_2{  
    z-index: -1;
}



</style>