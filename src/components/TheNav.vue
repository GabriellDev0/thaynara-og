<template>
    <nav class="navBar">
            <ul class="navBar_list">
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'whitepage', params: { name: 'sobre' }}">Sobre</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'whitepage', params: { name: 'novidades' }}">Novidades</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'whitepage', params: { name: 'agenda' }}">Agenda</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'whitepage', params: { name: 'thay-e-unicef' }}">Thay e Unicef</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'whitepage', params: { name: 'galeria' }}">Galeria</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'whitepage', params: { name: 'sao-joao-da-thay' }}">São João da Thay</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'contato', params: { name: 'contato' }}">Contato</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'whitepage', params: { name: 'imprensa' }}">Imprensa</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'whitepage', params: { name: 'fa-clubes' }}">Fã-Clubes</router-link>
                </li>
                <li class="navBar_list_item">
                    <router-link :to="{ name: 'admin', params: { name: 'admin' }}">Admin</router-link>
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