<template>
    <nav class="navBar">
            <ul class="navBar_list">
                <li class="navBar_list_item">
                    <router-link to="/sobre">Sobre</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link to="/novidades">Novidades</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link to="/agenda">Agenda</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link to="/thay-e-unicef">Thay e Unicef</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link to="/galeria">Galeria</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link to="/sao-joao-da-thay">São João da Thay</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link to="/">Contato</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link to="/imprensa">Imprensa</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link to="/fa-clubes">Fã-Clubes</router-link>
                </li>
            </ul>
        </nav>
</template>

<script>
export default {
    Name: "TheNav"
}
</script>

<style>
.navBar{
    justify-self: flex-end;
    grid-column: 2;
}

.navBar_list{
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: end;
    margin-right: 60px;
}

.navBar_list_item{
    font-size: var(--font-sizeM);
    font-weight: var(--font-regular);
    transition: 0.3s;
}

.navBar_list_item:hover{
    transform: scale(1.2);
}
</style>