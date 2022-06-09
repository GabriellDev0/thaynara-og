<template>
  <router-view/>
</template>

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
}
img{
  max-width: 100%;
  display: block;
}

</style>
