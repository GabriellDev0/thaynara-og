<template>
    <header class='header'>
        
        <img class='header_logotipo' width="153" height="16" src="@/assets/thaynara-og.svg" alt="Logo tipo do site, escrito Thaynara OG em uma cor rosa choque">

        
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

</style>