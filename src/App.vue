<template>
    <router-view/>
</template>

<script>
export default {

}
</script>

<style>
  :root{
    --background-color: #FFFFFF;
    --primary-color: #333333;
    --secundary-color: #FF8585;
    --secundary-color-neutral: #FFDADA;
    --terciary-color: #666666;
    

    --font-sizeP: 1rem;
    --font-sizeM: 1.125rem;

    --font-bold: 700;
    --font-regular: 400;
    --font-light: 300;

    --icon-colors-header: #FFDADA;
    
  }

  *{
    box-sizing: border-box;
  }
  body, ul, li, h1, h2, p{
    padding: 0px;
    margin: 0px;
  }
  ul{
    list-style: none;
  }
  body{
    font-family: "Poppins", Helvetica, Arial, sans-serif;
    color: var(--background-color);
  }
  a{
    text-decoration: none;
    color: var(--primary-color);
    position: relative;
  }
  img{
    max-width: 100%;
    display: block;
  }

  .router-link-exact-active::before{
      content: '';
      position: absolute;
      width: 60px;
      height: 2px;
      background-color: var(--secundary-color);
      right: 0px;
      bottom: -5px;
  }

  .v-enter-from,
  .v-leave-to{
      opacity: 0;
  }
  .v-enter-from{
      transform: translate3d(0,-20px,0);
  }
  .v-leave-to{
      transform: translate3d(0,20px,0);
  }
  .v-enter-active,
  .v-leave-active{
    transition: all .3s;
  }
</style>