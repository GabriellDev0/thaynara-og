<template>
    <main class="contact_page">
      <img width="373" height="722" class="contact_picture_thay" src="@/assets/contato-foto.jpg" alt="Imagem da Thaynara bem vestida sentada em uma calçada mostrando todo o seu look com o cotovelo apoiado no joelho e a mão apoiada no queixo">
        <div class="contact_page_text">
            <img class="contact_page_text_1" width="802" height="440" src="@/assets/contato1.svg" alt="Texto contato na cor rosa.">
            <img class="contact_page_text_2" width="802" height="440" src="@/assets/contato2.svg" alt="Texto contato na cor rosa">
        </div>
            <ContactForm/>
            <ProfessionalContact/>
    </main>
  
</template>

<script>
import ContactForm from "@/components/ContactForm.vue"
import ProfessionalContact from "@/components/ProfessionalContact.vue"
export default {
    name: "ContactView",
    components:{
        ContactForm,
        ProfessionalContact
    }
}
</script>

<style scoped>
.contact_page{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.contact_picture_thay{
  position: absolute;
  top: 0px;
  left: 300px;
  max-width: 373px;
  max-height:722px;
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

@media (max-width: 1600px){

    .contact_picture_thay{
      left: 300px;
      max-width: 373px;
      max-height:722px;
  }
    .contact_page_text_1,
    .contact_page_text_2{
      left: 220px;
      top: 60px;
      width: 600px;
      height: 300px;
  }

    .contact_page_text{
      /* background-color: red; */
      width: 600px;
      height: 600px;
      margin-right: 250px;
  }

}

@media (max-width: 1500px){
    .contact_page{
        align-items: center;
    }
    .contact_picture_thay{
      display: none;
  }
    .contact_page_text_1,
    .contact_page_text_2{
      left: 10px;
      top: 60px;
      width: 600px;
      height: 300px;
  }

    .contact_page_text{
      /* background-color: red; */
      width: 600px;
      height: 600px;
      margin-right: 0px;
  }

}

@media (max-width: 1320px){

    .contact_page_text_1,
    .contact_page_text_2{
      left: 10px;
      top: 60px;
      width: 400px;
      height: 300px;
  }

    .contact_page_text{
      /* background-color: red; */
      width: 400px;
      height: 600px;
      margin-right: 0px;
  }
}

@media (max-width: 1020px){
    .contact_page_text{
        height: 0px;
    }
    .contact_page{
        grid-template-columns: 1fr;
        justify-items: center;
        
    }
    .contact_page_text_1,
    .contact_page_text_2{
      left: 60px;
      top: -80px;
      width: 200px;
      height: 200px;
  }
}

</style>