<template>
    <ul class='social-icons'>
                <li :style="{'backgroundColor' : colorIcons}" class="instagram" aria-label="Link para o Instagram">
                    <a href="#"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="youtube" aria-label="Link para o Youtube">
                    <a href="#"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="twitter" aria-label="Link para o Twitter">
                    <a href="#"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="facebook" aria-label="Link para o Facebook">
                    <a href="#"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="snapchat" aria-label="Link para o SnapChat">
                    <a href="#"></a>
                </li>
                <li :style="{'backgroundColor' : colorIcons}" class="tiktok" aria-label="Link para o TikTok">
                    <a href="#"></a>
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