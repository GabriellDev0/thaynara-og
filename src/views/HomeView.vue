<template>
    <TheHeader/>
    <TheContact/>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheContact from "@/components/TheContact.vue"
export default {
  name: 'HomeView',
  components: {
      TheHeader,
      TheContact
  }
}
</script>

<style>

</style>
