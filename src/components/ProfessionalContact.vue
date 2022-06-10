<template>
    <div class="contact_professional">
        <h3 class="contact_professional_title">CONTATO PROFISSIONAL</h3>
        <p class="contact_professional_phone">98 991234-5678</p>
        <p class="contact_professional_email">contato@thaynaraog.com.br</p> 
    </div>
</template>

<script>
export default {
    name: "ProfessionalContact"
}
</script>

<style>
.contact_professional{
    /* background-color: red; */
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 0px 0px 30px;
    position: relative;
}
.contact_professional::before{
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: var(--secundary-color);
    left: 0px;
    top: 0px;
}

.contact_professional_title{
    grid-column: 1/3; 
    font-weight: var(--font-regular);
    font-size: var(--font-sizeP);
    color: var(--terciary-color);
    letter-spacing: 5px;
}

.contact_professional_phone{
    max-width: 150px;
    margin-left: 30px;
}

.contact_professional_email{
    justify-self: end;
}

.contact_professional_phone,
.contact_professional_email{
    font-weight: var(--font-bold);
    font-size: var(--font-sizeP);
    color: var(--terciary-color);
    position: relative;
}

.contact_professional_phone::before,
.contact_professional_email::before{
    content: '';
    position: absolute;
    width: 24px;
    height: 20px;
    left: -35px;
}

.contact_professional_phone::before{
    background: url("@/assets/icon-email.svg") no-repeat
}
.contact_professional_email::before{
    background: url("@/assets/icon-telefone.svg") no-repeat
}
</style>