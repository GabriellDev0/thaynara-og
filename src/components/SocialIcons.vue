<template>
    <ul class='social-icons'>
                <li :style="{'backgroundColor' : colorIcons}" class="instagram">
                    <a href="#" aria-label="Link para o Instagram"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="youtube" >
                    <a href="#" aria-label="Link para o Youtube"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="twitter" >
                    <a href="#" aria-label="Link para o Twitter"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="facebook" >
                    <a href="#" aria-label="Link para o Facebook"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="snapchat" >
                    <a href="#" aria-label="Link para o SnapChat"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="tiktok" >
                    <a href="#" aria-label="Link para o TikTok"></a>
                </li>
            </ul>
</template>

<script>
export default {
    name: "SocialIcons",
    props: ['colorIcons']
}
</script>

<style scoped>
.social-icons{
  display: flex;
  gap: 10px;
}
.instagram, 
.youtube,
.twitter,
.facebook,
.snapchat,
.tiktok{
  mask-repeat: no-repeat;
}
.instagram{
  mask-image: url("@/assets/icon-instagram.svg");
}
.youtube{
  mask-image: url("@/assets/icon-youtube.svg");
}
.twitter{
  mask-image: url("@/assets/icon-twitter.svg");
}
.facebook{
  mask-image: url("@/assets/icon-facebook.svg");
}
.snapchat{
  mask-image: url("@/assets/icon-snapchat.svg");
}
.tiktok{
  mask-image: url("@/assets/icon-tiktok.svg");
}
a{
  display: flex;
  width: 23px;
  height: 24px;
}
</style>