<template>
  <div class="content_site">
    <TheHeader/>
    <div class="content_main">
      <router-view v-slot="{ Component }">
          <transition mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      <TheNav/>
    </div>
    <TheFooter/>
  </div>
   
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheNav from "@/components/TheNav.vue"
import TheFooter from "@/components/TheFooter.vue"
export default {
    components:{
      TheHeader,
      TheNav,
      TheFooter
    }
}
</script>

<style>


.content_site{
    max-width: 1920px;
}

.content_main{
  display: grid;
  grid-template-columns: 1fr 250px;
}

</style>
