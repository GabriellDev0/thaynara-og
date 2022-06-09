<template>
    <header class='header'>
        
        <img class='header_logotipo' width="153" height="16" src="@/assets/thaynara-og.svg" alt="Logo tipo do site, escrito Thaynara OG em uma cor rosa choque">

        <img width="373" height="722" class="header_picture_thay" src="@/assets/contato-foto.jpg" alt="Imagem da Thaynara bem vestida sentada em uma calçada mostrando todo o seu look com o cotovelo apoiado no joelho e a mão apoiada no queixo">
        <social-icons colorIcons="#FFDADA"></social-icons>  
    </header>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue"
export default {
    name: "TheHeader",
    components:{
        SocialIcons
    }
}
</script>

<style scoped>
.header{
  display: flex;
  padding: 60px;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.header_picture_thay{
  position: absolute;
  top: 0px;
  left: 300px;
  max-width: 373px;
  max-height:722px;
}



</style>