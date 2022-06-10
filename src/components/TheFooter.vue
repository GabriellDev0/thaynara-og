<template>
        <footer class="footer">
            <p class="footer_copy">2022<span class="footer_symbol_copy">©</span> THAYNARA OG. Todos os direitos reservados.</p>
            <social-icons colorIcons="#666666"></social-icons>  
        </footer>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue"
export default {
    name: "TheFooter",
    components:{
        SocialIcons
    }
}
</script>

<style>
.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 60px;
    background-color: #000000;
    margin-top: 200px;
}

.footer_copy{
    font-weight: var(--font-light);
    font-size: 0.625rem;
}
</style>